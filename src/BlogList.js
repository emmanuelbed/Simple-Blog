import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  // console.log();
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
          </Link>
          {/* <div>{blog.body}</div> */}
          <p> Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
