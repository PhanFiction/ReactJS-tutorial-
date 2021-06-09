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

// displays error in console command if the prop is not the required type
Comment.propTypes = {
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    likes: PropTypes.number
}

let person = {
    name: 'Alex',
    age: 15,
  }
  
  function Name({name})
  {
    return(
      <div>{name}</div>
    );
  }
  Name.propTypes = {
    name: PropTypes.string.isRequired
  }
  
  function Age({age})
  {
    return(
      <div> {age} </div>
    );
  }
  Age.propTypes = {
    age: PropTypes.number
  }
  
  function Person({person})
  {
    const {name, age} = person;
    return(
      <div> 
        <Name name={name}/>
        <Age age={age}/>
      </div>
    );
  }
  



export default Comment;