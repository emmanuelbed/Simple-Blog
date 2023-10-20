import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  //Deconstructing the items needed from useFetch
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {/* Logging the error to the screen if there is one */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BlogList blogs={data} title="All Blogs!" />}
    </div>
  );
};
export default Home;
