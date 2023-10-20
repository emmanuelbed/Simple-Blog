import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //Main Blogs State
  const [blogs, setBlogs] = useState(null);
  //State to check the status of the data being requested
  const [isPending, setIsPending] = useState(true);
  //State to return the error message
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
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
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};
export default Home;
