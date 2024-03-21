import PropTypes from "prop-types";
import { IoBookmark } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="md:mb-20 mb-8 p-4 rounded-md md:space-y-4 space-y-2 border border-purple-500">
      <img
        className="md:w-5/6 w-96 mb-8 rounded-md"
        src={cover}
        alt={`cover pic of the ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="md:w-14 md:h-14 w-12 h-12 rounded-full" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="md:text-2xl text-xl font-semibold text-gray-700">
              {author}
            </h3>
            <p className="md:text-sm text-xs text-gray-500">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)} className="text-2xl text-blue-600 hover:text-red-600">
            <IoBookmark />
          </button>
        </div>
      </div>
      <h2 className="md:text-4xl text-2xl font-semibold text-gray-700">
        {title}
      </h2>
      <p className="space-x-2 text-gray-500 mt-2">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button onClick={() => handleMarkAsRead(id, reading_time)} className="text-purple-600 font-bold underline hover:text-red-700">Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};

export default Blog;
