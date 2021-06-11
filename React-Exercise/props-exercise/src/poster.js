import React from 'react';
import ReactDOM from 'react-dom';
import logo from './assets/logo.jpg';
import './index.css';

let posterTest = {
    title: 'React',
    text: 'The best thing since jQuery, propably.'
}

function BoxImg()
{
    return(
        <div className="img">
            <img src={logo} alt="logo"/>
        </div>
    );
}

function Text({text})
{
    return(
        <div className='text-container'>
            {text}
        </div>
    );
}

function Title({title})
{
    return(
        <div className="title-container">
            {title}
        </div>
    );
}

function Poster({info})
{
    return(
        <div className="poster-wrapper">
            <div className="poster-box">
                <div className="box">
                    <BoxImg/>
                </div>
            </div>
            <div className="title-box">
                <Title title={info.title}/>
            </div>
            <div className="text-box">
                <Text text={info.text}/>
            </div>
        </div>
    );
}

ReactDOM.render(<Poster info={posterTest}/>, document.querySelector('#root'));