

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Navbar from './Components/Navbar/Navbar'

function App() {
  
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);


  const handleReadingTime = (data,id) =>{
    
   
    const newRead = readingTime+ data;
    setReadingTime(newRead);

    const removeBook = bookmarks.filter(book => book.id !== id);
    setBookmarks(removeBook);

    
    
  }

  const handleBookmark = (data)=>{
    
    const newBookmarks = [...bookmarks,data];
    setBookmarks(newBookmarks);
  }
  

  return (
    <div className=' container mx-auto'>
      <Navbar/>
      <div className=' flex justify-between'>
      <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} />
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </div>
  )
}

export default App
