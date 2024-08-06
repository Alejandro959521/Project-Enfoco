const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {    

			data:[],
			isCarOpen:false,
			listCar:[],
			sum:0

			
		},
		actions: {
			// Use getActions to call a function within a fuction
			openCart: () => { setStore({ isCarOpen: true })},
			closeCart: () => { setStore({ isCarOpen: false })},
				
			getData: async () => {
				try {

					const url = "https://fakestoreapi.com"
					const options = {
						method: "GET",
						headers: {
							"Content-type": "Application/json"
						}

					}
					const respond = await fetch(url + "/products", options);
					
					if (respond.ok){
						
						const body = await respond.json(); 
					
						setStore({ data: body }) 
						//console.log("el array desde flux",getStore().data);

					}
				

				} catch (error) {
					console.log(error);

				}



			},

			getDetalles: async (id) => {  
				try {   

					const url = "https://fakestoreapi.com"
					const options = {
						method: "GET",
						headers: {
							"Content-type": "Application/json"
						}    

					}
					const respond = await fetch( `${url}/products/${id}`, options);
					
					if (respond.ok){
						
						const body = await respond.json(); 
						//console.log("entre en detalles",body)
						return body
						

					}
				

				} catch (error) {
					console.log("error desde el flux detalles",error);

				}
			},

			addCart: (data) => {
						
				setStore({listCar:[...getStore().listCar,data]})

			},

			deleted: (data) => {

				setStore({listCar: getStore().listCar.filter((item) => item.id != data.id)})

			},

			sumCar: () => { 

				const total = getStore().listCar.reduce((acc, item) => acc + item.price, 0);
				setStore({ sum: Number(total.toFixed(2))});

    
			}

		
			

			
		}  
	};
};

export default getState;
