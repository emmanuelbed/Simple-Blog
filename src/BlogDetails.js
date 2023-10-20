import { useParams } from "react-router-dom";
const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div className="blog-details">
      <h2>Blog details - {id}</h2>
      {console.log("Hello")}
    </div>
  );
};

export default BlogDetails;
