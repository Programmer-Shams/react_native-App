import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type QueryParams = {}; // You can define specific query parameters if needed
type ApiResponse<T> = {
  data: T;
};


const fetchData = <T>(endpoint: string, query: QueryParams) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": '008b427c31mshd908b6d83809ddbp17b82cjsn1ced75dacd5f',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchInfo = async () => {
    try {
      setIsLoading(true);
      const response: AxiosResponse<ApiResponse<T>> = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
      alert("An error occurred while fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchInfo();
  };

  return { data, isLoading, error, refetch };
};

export default fetchData;
