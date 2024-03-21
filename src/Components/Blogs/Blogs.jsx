import { useState } from "react";
// import PropTypes from 'prop-types';
import { useEffect } from "react";

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  }, [])

  return (
    <div className="md:w-2/3 bg-orange-200">
      <h1 className="text-4xl">Blogs: {blogs.length}</h1>
    </div>
  );
};

Blogs.propTypes = {}

export default Blogs;