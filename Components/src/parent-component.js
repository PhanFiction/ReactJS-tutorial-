import React from 'react';
import ReactDOM from 'react-dom';

// Parent component to render button to screen
// the CreateButton will have a prop of buttonClicked which is a function to print clicked when the button
// is pressed
function ButtonHandler()
{
  return(
    <CreateButton onAction={buttonClicked}/> //render component and have a prop buttonClicked passed to it
  );
}

// child component that creates a button
function CreateButton({onAction})
{
  return(
    <button onClick={onAction}/>
  );
}

function buttonClicked()
{
  console.log("clicked");
}

ReactDOM.render(<ButtonHandler/>, document.querySelector('#root'));