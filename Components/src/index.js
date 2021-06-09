import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import img from './assets/hiiro.png';
import Comment from './propType/propTypes.js';
import PropTypes from 'prop-types';

let testTweet = {
  message: 'Ensemble Stars Music if really fun to play.',
  profImg: img,
  author: {
    handle: '@Amagi',
    name: 'Hiiro Amagi'
  },
  likes: 150,
  retweets: 75,
  timestamp: "3 hr ago"
}

// parent tweet 
function Tweet({tweet})
{
  return(
    <div className="center-tweet">
      <div className="tweet">
        <Avatar imageProfile={tweet.profImg}/>
        <div className="content">
          <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
          <Message text={tweet.message}/>
          <div className="buttons">
            <ReplyButton/>
            <RetweetButton count={tweet.retweets}/>
            <LikeButton count={tweet.likes}/>
            <MoreOptionsButton/>
          </div>
        </div>
      </div>
    </div>
  );
}
Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
}


function Avatar({imageProfile})
{
  return(
    <img src={imageProfile} className="avatar" alt="avatar"></img>
  );
}

function Message({text})
{
  return(
    <div className="message">
      {text}
    </div>
  );
}
Message.propTypes = {
  text: PropTypes.string
}

function NameWithHandle({author})
{
  let {name, handle} = author;
  return(
    <span className="name-with-handle">
    <span className="name"> {name} </span>
    <span className="handle">{handle}</span>
  </span>
  );
}

NameWithHandle.propTypes = {
  author: PropTypes.shape = {
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
  }.isRequired
}

function Time({time})
{
  return(
    <span className="time"> {time} </span>
  )
}

function ReplyButton()
{
  return(
    <i className="fa fa-reply reply-button"/>
  );
}

function LikeButton({count})
{
  return(
    <span className="like-count">
      <i className="fa fa-heart like-button"/>
      {/*if count is not 0 return count else return null */}
      {count? count: null}
    </span>
  );
}
LikeButton.propTypes = {
  count: PropTypes.number
}

function RetweetCount({count})
{
  if(count > 0)
  {
    return(
      <span className="retweet-count">
        {count}
      </span>
    );
  }else{
    return null;
  }
}
RetweetCount.propTypes = {
  count: PropTypes.number
}

function RetweetButton({count})
{
  return(
    <span>
      <i className="fa fa-retweet retweet-button"/>
      <RetweetCount count={count}/>
    </span>
  );
}

function MoreOptionsButton()
{
  return(
    <i className="fa fa-ellipsis-h more-options-button"/>
  );
}

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));
//ReactDOM.render(<Comment author={'Alex'} message={'Hello'} likes={'23'}/>, document.querySelector('#root'));
