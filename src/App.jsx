import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <div className='bg-gray-200 h-screen'>
      <Header />
      <div className='md:flex'>
        <Blogs />
        <Bookmarks />
      </div>
    </div>
  )
}

export default App
