
import { useState, useEffect, useCallback } from 'react';
import { GetCountriesApi } from '../utils/Apicall';

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await GetCountriesApi();
      console.log(response,'pelzzzz')

      setData(response.data.data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(() => {
    setIsLoading(true);
    fetchData();
  }, [fetchData]);

  return  {data, isLoading, error, refetch };
  

};

export default useFetch;



// import {useState,useEffect} from 'react';
// // import axios from 'axios';
// import { GetCountriesApi } from '../utils/Apicall';

// // import {RAPID_API_KEY} from '@env';


// // const rapidApiKey=;

// const useFetch=(endpoint,query)=>{
//     const [data,setData]=useState([]);
//     const [isLoading,setIsLoading] = useState(false);
//     const [error,setError] =useState(null );


    

//     // const options = {
//     //     method: 'GET',
//     //     // url: `https://jsearch.p.rapidapi.com/${endpoint}`,
//     //     url:"https://restcountries.com/v2/all",

//     //     // headers: {
//     //     //     'X-RapidAPI-Key':'01be465d78msh0cac052e8b41e98p18335djsn142d1b5c17c9',
//     //     //     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
//     //     //   },


//     //       params: {
//     //         query: 'Python developer in Texas, USA',
//     //         page: '1',
//     //         num_pages: '1'
//     //       },


//     //       // params: {
//     //       //   ...query
//     //       // },
        
//     //   };
//       const fetchData =async()=>{
//         setIsLoading(true);
//         try{
//             const response=await GetCountriesApi();
//             console.log(response,'pelumyy')
            
//             setData(response.data);
//             setIsLoading(false);

//         }catch(error){
//             setError(error);
//             alert('There is an error')}
//             finally{
//                 setIsLoading(false)

//             }
//         }
        

//         useEffect(()=>{
//             fetchData()
//         },[]);

//         const refetch =()=>{
//             setIsLoading(true);
//             fetchData();
//         }

//         console.log(data,'kilod')

        

//         return{data,isLoading,error,refetch};
//     }
//       export default useFetch





// plez
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

// const useFetch = () => {
//   const [data, setData] = useState([]);
  
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchCountryData = async () => {
//     setIsLoading(true);

//     const options = {
//       method: 'GET',
//       url: 'https://restcountries.com/v2/all',
//     };

//     try {
//       const response = await axios.request(options);
//       const ourData=response.data.data
//       const countriesWithUuids = ourData.map((country) => ({
//         ...country,
//         uuid: uuidv4(), // Generate a UUID for each country
//       }));
//       setData(countriesWithUuids);
//       setIsLoading(false);
//     } catch (error) {
//       setError(error);
//       alert('There is an error');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCountryData();
//   }, []);

//   const refetch = () => {
//     setIsLoading(true);
//     fetchCountryData();
//   };
// console.log(data,'ginger ginge')
//   return { data, isLoading, error, refetch };
// };

// export default useFetch;