import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';



const Blogs = ({handleBookmark,handleReadingTime}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then (data => setBlogs(data))
    },[])
    return (
        <div>
            {
                blogs.map(blog => <Blog key={blog.id} data={blog} handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} />)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleBookmark:PropTypes.func.isRequired,
    handleReadingTime:PropTypes.func.isRequired
}

export default Blogs;