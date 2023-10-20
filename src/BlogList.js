const BlogList = ({ blogs, title }) => {
  // console.log();
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          {/* <div>{blog.body}</div> */}
          <p> Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
