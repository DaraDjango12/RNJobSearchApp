import {useState,useEffect} from 'react';
import axios from 'axios';
// import {RAPID_API_KEY} from '@env';


// const rapidApiKey=;

const useFetch=(endpoint,query)=>{
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] =useState(null );


    

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,

        headers: {
            'X-RapidAPI-Key':'74e8b835b2mshfc5fad8354be023p13d569jsn6a178fbf056f',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },


          params: {
            query: 'Python developer in Texas, USA',
            page: '1',
            num_pages: '1'
          },


          // params: {
          //   ...query
          // },
        
      };
      const fetchData =async()=>{
        setIsLoading(true);
        try{
            const response=await axios.request(options);
            console.log(response.data)
            setData(response.data.data);
            setIsLoading(false);

        }catch(error){
            setError(error);
            alert('There is an error')}
            finally{
                setIsLoading(false)

            }
        }
        

        useEffect(()=>{
            fetchData()
        },[]);

        const refetch =()=>{
            setIsLoading(true);
            fetchData();
        }

        return{data,isLoading,error,refetch};
    }
      export default useFetch





