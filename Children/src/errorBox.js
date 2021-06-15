import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
Dealing with Children using data structures
React.Children.map(children, function)
React.Children.forEach(children, function)
React.Children.count(children)
React.Children.only(children)
React.Children.toArray(children)
*/

function ErrorBox({children})
{
  return(
    <main className="box">
      <div className="errorBox">
        <i className="fas fa-exclamation-triangle"/>
        <span className="children">{children}</span>
      </div>
    </main>
  );
}

ReactDOM.render(<ErrorBox>Something has gone wrong</ErrorBox>, document.querySelector('#root'));