const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {    

			data:[],
			data2:undefined
			
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

	
		}  
	};
};

export default getState;
