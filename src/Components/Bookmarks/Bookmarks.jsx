import PropTypes from 'prop-types';
import Bookmark from "../Bookmaark/Bookmark";
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="w-1/3 h-full  bg-red-700 rounded-xl">
            <div  >
                <h3 className=" text-3xl font-bold text-white p-4 border-b-2">Spend Times : {readingTime} min</h3>
            </div>
            <div>
            <h3 className=" text-3xl font-bold text-white p-4">Bookmarks: {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark} />)
            }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.object.isRequired
}

export default Bookmarks;