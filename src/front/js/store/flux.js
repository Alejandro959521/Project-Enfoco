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
					

					const body = await respond.json();
					
					setStore({ data: body })
   
				} catch (error) {
					console.log(error);

				}



			}

		}  
	};
};

export default getState;
