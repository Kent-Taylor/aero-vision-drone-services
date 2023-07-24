import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BasicCard from './BasicCard.js';

const ParentComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote',
        params: {
          token: 'ipworld.info'
        },
        headers: {
          'X-RapidAPI-Key': '7603016162msh8263f88a5aa10dfp18e91ajsna3493aef8fcf',
          'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
        }
      };

      try {
          const response = await axios.request(options);
          console.log("DATA IN API", response.data)
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* FIXME */}
      {/* {data && <BasicCard data={data} />} */}
      {{data}}
    </div>
  );
};

export default ParentComponent;
