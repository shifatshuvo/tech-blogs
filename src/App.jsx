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
    const duplicateAdd = bookmarks.find(bookmark => bookmark.id == blog.id);
    // console.log(blog.id);

    if(duplicateAdd) {
      alert("Blog already added!!");
      return;
    }
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }


  const handleMarkAsRead = (id, time) => {

    // remove the read blog from bookmark
    if (bookmarks.length) {
      const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
      setBookmarks(remainingBookmarks);
      setReadingTime(readingTime + time);
      return;
    }
    alert("Already Read!!");
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
