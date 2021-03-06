import PropTypes from 'prop-types';

function Comment({author, message, likes})
{
    return(
        <div>
            <div className="author">{author}</div>
            <div className="message">{message}</div>
            <div className="likes">{likes}</div>
        </div>
    );
}

Comment.propTypes = {
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    likes: PropTypes.number
}

export default Comment;