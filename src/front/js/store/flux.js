const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {    

			data:[]
			

			
		},
		actions: {
			// Use getActions to call a function within a fuction

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
						console.log("el array desde flux",getStore().data);

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
						console.log("entre en detalles",body)
						return body
						

					}
				

				} catch (error) {
					console.log("error desde el flux detalles",error);

				}



			}

	
		}  
	};
};

export default getState;
