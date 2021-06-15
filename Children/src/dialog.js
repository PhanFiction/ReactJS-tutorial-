import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//page 85
function Title({children})
{
    return(
        <span>
            {children}
        </span>
    );
}

function Body({children})
{
    return(
        <span>
            {children}
        </span>
    );
}

function Footer({children})
{
    return(
        <span>
            {children}
        </span>
    );
}

function Dialog()
{
    return(
        <div className="dialog-box">
            <div className="title-box">
                <Title> This is important </Title>
            </div>
            <div className="body-box">
                <Body>Here is some important text or error or something</Body>
            </div>
            <div className="footer-box">
                <Footer>Close</Footer>
            </div>
        </div>
    );
}

ReactDOM.render(<Dialog/>, document.querySelector('#root'));