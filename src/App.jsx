import { useEffect, useState } from 'react';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/blogs")
      .then((res) => res.json())
      .then(setBlogs)
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container p-10">
      <h1 className="text-5xl font-semibold">Blogs</h1>
      <hr className="my-10"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blogs.map((blog, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <img src={blog.image_url} alt={blog.title} />
            </div>
            <div className="card-content">
              <h4 className="card-title">{blog.title}</h4>
              <p>{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
