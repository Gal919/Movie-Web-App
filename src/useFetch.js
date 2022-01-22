import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url, value) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        console.log('useFetchEffect');
        if (value === undefined) return [];
        const getInfo = async () => {
          try {
            let result = await axios.get(
              url
            );
            setData(result);
           
          } catch (error) {
            console.log(error?.message);
          }
        };
        getInfo();
      },[url, value]);

      return { data };

};

export default useFetch;
