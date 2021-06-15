import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import Features from './Trello/features'
import Title from './Trello/title';
import {Options, AddButton} from './Trello/button';

function Trello({features})
{
    return(
        <div className="page-wrapper">
            <div className="page-container">
                <div className="top-container">
                    <Title>Phone Features</Title>
                    <div className="icon-container">
                        <Options/>
                    </div>
                </div>
                <span className="feature-container">
                    {
                        features.map(item=> 
                            <Features key={item.id} feature={item.feature}/>
                        )
                    }
                </span>
                <AddButton/>
            </div>
        </div>
    );
}

const testFeatures = [
    {
        id: 1,
        feature: 'Subwoofer',
    },
    {
        id: 2,
        feature: 'Non-porous, washable',
    },
    {
        id: 3,
        feature: 'Wings',
    },
    {
        id: 4,
        feature: 'Bebeled Bezel',
    },
    {
        id: 5,
        feature: 'Bezeled Bevel',
    },
    {
        id: 6,
        feature: 'Seedless',
    }
]

ReactDOM.render(<Trello features={testFeatures}/>, document.querySelector('#root'));

