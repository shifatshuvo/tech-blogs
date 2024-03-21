import { useState } from "react";
import PropTypes from 'prop-types';
import { useEffect } from "react";

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  }, [])

  return (
    <div>
      
    </div>
  );
};

Blogs.propTypes = {}

export default Blogs;