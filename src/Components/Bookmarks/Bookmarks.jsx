import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {


  return (
    <div className="md:w-1/3 bg-gray-300 md:h-screen h-60 overflow-scroll md:ml-6 mt-2 md:mt-4 
     rounded-md">
      <div className="md:p-4 p-2 border rounded-md border-purple-500 bg-purple-100">
        <h3 className="text-2xl text-purple-700 text-center font-semibold">Reading Time: {readingTime}</h3>
      </div>
      <h2 className="text-2xl text-center border-b-2 py-2 font-semibold ">Bookmarked Blogs: {bookmarks.length}</h2>
      {
        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} />)
      }
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
};

export default Bookmarks;
