import { useEffect, useState } from "react";

//Custom Hook
const useFetch = (url) => {
  //Main Blogs State
  const [data, setData] = useState(null);
  //State to check the status of the data being requested
  const [isPending, setIsPending] = useState(true);
  //State to return the error message
  const [error, setError] = useState(null);

  useEffect(() => {
    //Adding a timeout function so we can see the Loading Status
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("Could not Fetch the data for that resource");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          // console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, []);
  //You need to return the individual items to be referenced by other users of the Hook
  return { data, isPending, error };
};

export default useFetch;
