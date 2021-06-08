import React from 'react';
import ReactDOM from 'react-dom';

function MyThing()
{
  return(
    <div>
      <Book/>
      <Book2/>
      <WhiteSpace/>
      <Greeting/>
    </div>
  );
}

ReactDOM.render(<MyThing/>, document.querySelector('#root'));

// Exercise 1, create component of book
function Book()
{
  return(
    <div className="book">
      <div className="title">
        The Title
      </div>
      <div className="author">
          The author
        </div>
        <ul className="stats">
          <li className="rating">
            5 Stars
          </li>
          <li className="isbn">
            12-345678-910
          </li>
        </ul>
    </div>
  );
}

// Exercise 2 White Spacing
function WhiteSpace()
{
  return(
    <div>
      Newline
      Test
      <div>
        Empty 

        Newlines

        Here
      </div>
      <div>
        &nbsp;Non-breaking
        &nbsp;Spaces&nbsp;
      </div>
      <div>
        Line1
        {'  '}
        Line2
      </div>
    </div>
  );
}

// Exercise 3 but use React.creatElement() for exercise 1
function Book2()
{
  return React.createElement(
    'div', {className: 'book'},
    React.createElement(
      'div', {className: 'title'}, 'The Title'),
    React.createElement(
      'div', {className: 'author'}, 'The author'),
    React.createElement(
      'ul', {className: 'stats'},
      React.createElement(
        'li', {className: 'rating'}, '5 stars'),
      React.createElement(
        'li', {className: "isbn"}, '12-345678-910'
      ),
    )
  );
}

// Exercise 4, when user is undefined in this component it renders Not Logged in else it says Hello username

function Greeting()
{
  let user = true;
  let check_user = nameCheck(user);
  return(
    <div>
      {check_user? 'Not logged in': `Hello ${user}`}
    </div>
  );
}

function nameCheck(user)
{
  if(user == "" || user == undefined || user == null) return true;
  return false;
}
