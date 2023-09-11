import React from 'react';
import axios from 'axios';

const Sample = () => {

  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {
      query: 'Python developer in Texas, USA',
      page: '1',
      num_pages: '1'
    },
    headers: {
      'X-RapidAPI-Key': '74e8b835b2mshfc5fad8354be023p13d569jsn6a178fbf056f',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  async function fetchData() {
    try {
      const response = await axios.request(options);
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();
  return <View>sample</View>;
};

export default Sample;