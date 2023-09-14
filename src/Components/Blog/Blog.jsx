import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({data,handleBookmark,handleReadingTime}) => {
    const {author,author_img,cover_img,hashtags,id,published_time,reading_time,title} = data;
    return (
        <div>
            <div className="card w-[67%] bg-base-100 shadow-xl my-7">
            <figure><img src={cover_img} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <div className=" flex justify-center items-center gap-3">
                        <img src={author_img} width={60} alt="" />
                        <div>
                        <p>{author}</p>
                        <p>{published_time}</p>
                        
                        </div>
                    </div>
                    <div className=' flex gap-4'>
                    <p>{reading_time} min read</p>
                    <button onClick={()=>handleBookmark(data)}><FaBookmark></FaBookmark></button>
                    </div>
                </div>
                <h2 className="card-title">
                {title}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    {
                        hashtags.map((hash,idx) => <div key={idx} className="badge badge-outline">{hash}</div>)
                    }
                 
                </div>
                <div>
                    <a onClick={()=>handleReadingTime(reading_time,id)} className=' underline text-red-500' href="#">Mark as read</a>
                </div>
            </div>
            </div>
        </div>
    );
};

Blog.propTypes ={
    data: PropTypes.object.isRequired,
    handleBookmark : PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}

export default Blog;