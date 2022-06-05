import axios from "axios";
import { useEffect, useState } from "react";

const useApiRequest = (url: string) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((response) => {
          setIsLoading(false);
          setData(response.data);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error.message);
        });
    };
    fetchData();
  }, [url]);

  return { error, isLoading, data };
};

export default useApiRequest;
