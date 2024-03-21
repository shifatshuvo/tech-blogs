import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";
import "./App.css";
import { useState } from "react";

// rafcp

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }


  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    // remove the read blog from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }


  return (
    <div className="bg-gray-200 h-auto">
      <Header />
      <div className="md:flex max-w-7xl mx-auto md:px-0 px-4">
        <Blogs 
          handleAddToBookmark={handleAddToBookmark} 
          handleMarkAsRead={handleMarkAsRead}
        />
        <Bookmarks 
          bookmarks={bookmarks}
          readingTime={readingTime}
        />
      </div>
    </div>
  );
}


export default App;
