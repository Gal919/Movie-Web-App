import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, value) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (value === undefined || value === "") return [];
    const getInfo = async () => {
      setIsLoading(true);
      try {
        let result = await axios.get(url);
        setIsLoading(false);
        setData(result);
      } catch (error) {
        setIsLoading(false);
        console.log(error?.message);
      }
    };
    getInfo();
  }, [url, value]);

  return { data, isLoading };
};

export default useFetch;
