import { axios } from "axios";



export const GetCountriesApi = () => {
    let config = {
      method: "GET",
      maxBodyLength: Infinity,
  
    //   url: `${baseUrl}/vendors/history`,

    url:"https://restcountries.com/v2/all",
  
      
    };
  
    return axios
      .request(config)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log("error", error);
        if (error.response.data.message) {
          throw new Error(error.response.data.message);
        } else if (error.response.data) {
          throw new Error(error.response);
        } else if (error.request) {
          throw new Error(error.message);
        } else {
          throw new Error(error.message);
        }
      });
  };