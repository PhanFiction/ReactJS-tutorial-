import React from 'react';
import ReactDOM from 'react-dom';
import otherFile from './other';

// Components need to be capitalized
function HelloWorld()
{
  return (
    <div> Hello World </div>
  );
}

/*
React.createElement(
  String element (HTML type), 
  [propsObject],
  [children...]
)
*/
function HelloWorld2()
{
  return React.createElement(
    'div',
    {},
    'Hello World!',
    'Checkers');
}

function HelloWorld3()
{
  return React.createElement(
    'div', {}, 'Title',
    React.createElement('div', {},
    React.createElement('div', {}, 'Child1'),
    React.createElement('div', {}, 'Child2',
    React.createElement('div', {}, 'Child2_child')
    )));
}


/**
-Translate to JSX
<span className='song-name'>
 {props.song.name}
</span>
*/
// wont compile because missing props as an agrument
function Translate()
{
  return React.createElement(
    'span',
    {className: 'song-name'}, // propsObject
    //props.song.name // children
  );
}

// Calling other components in a function
function Animals()
{
  return (
  <div>
      <Cats/>
      <Dogs/>
      <Cows/>
  </div>
  );
}

function Cats(){
  return(
    <span> Cats says Meow </span>
  );
}

const Dogs = ()=>{
  return(
    <span> Dogs says Woof </span>
  );
}

function Cows()
{
  return(
    <span> Cows go Mooh </span>
  );
}



ReactDOM.render(<otherFile.ValidIndicator2/>, document.querySelector('#root'));