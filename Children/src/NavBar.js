import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function NavItem({url, children})
{
    return(
        <div>
            <a href={url}> {children} </a>
        </div>
    );
}
NavItem.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.node,
        PropTypes.string
    ]).isRequired
}

// array.forEach(function(currentValue, index, arr), thisValue)
// children, function
function Nav({children})
{
    /* alternative way with for loop instead of forEach
    for(let i = 0; i < items.length; i++)
    {
        if(items[i].type !== items[i+1].type)
        {
            items.splice(items.indexOf(i), 1);
        }
    }
    */
    let items = React.Children.toArray(children);
    React.Children.forEach(items, i => { 
        if(items[0].type === i.type) items.splice(items.indexOf(i),1);
    });
    return (
        <div>
            {items}
        </div>
    );
}


function NavBar()
{
    return (
        <Nav>
            <NavItem url='/'>Home</NavItem>
            <NavItem url='/about'>About</NavItem>
            <a href='/contact'>Contact</a>
        </Nav>
    );
}


ReactDOM.render(<NavBar/>, document.querySelector('#root'));