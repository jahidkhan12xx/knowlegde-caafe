
import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    return (
        
        <div className=" bg-white p-4 m-4 rounded-xl">
            <h3 className=" text-xl font-semibold text-blue-400">Title: {bookmark.title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark : PropTypes.object.isRequired
}

export default Bookmark;