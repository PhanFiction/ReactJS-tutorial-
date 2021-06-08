import React from 'react';
import ReactDOM from 'react-dom';
import './default.css';
import img from './assets/hiiro.png';

// parent tweet 
function Tweet()
{
  return(
    <div className="center-tweet">
      <div className="tweet">
        <Avatar/>
        <div className="content">
          <NameWithHandle/><Time/>
          <Message/>
          <div className="buttons">
            <ReplyButton/>
            <RetweetButton/>
            <LikeButton/>
            <MoreOptionsButton/>
        </div>
        </div>
      </div>
    </div>
  );
}

function Avatar()
{
  return(
    <img src={img} className="avatar" alt="avatar"></img>
  );
}

function Message()
{
  return(
    <div className="message">
      Ensemble Stars Music if really fun to play.
    </div>
  );
}

function NameWithHandle()
{
  return(
    <span className="name-with-handle">
    <span className="name"> Hiiro Amagi </span>
    <span className="handle">@Amagi</span>
  </span>
  );
}

function Time()
{
  return(
    <span className="time"> 3h ago </span>
  )
}

function ReplyButton()
{
  return(
    <i className="fa fa-reply reply-button"/>
  );
}

function LikeButton()
{
  return(
    <i className="fa fa-heart like-button"/>
  );
}

function RetweetButton()
{
  return(
    <i className="fa fa-retweet retweet-button"/>
  );
}

function MoreOptionsButton()
{
  return(
    <i className="fa fa-ellipsis-h more-options-button"/>
  );
}

ReactDOM.render(<Tweet/>, document.querySelector('#root'));