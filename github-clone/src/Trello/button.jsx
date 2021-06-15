import React from 'react';
import PropTypes from 'prop-types';


export function Options()
{
    return(
        <div className="icon">
            <i className="fa fa-ellipsis-v"/>
        </div>
    );
}

export function AddButton()
{
    return(
        <div className="add-card-container">
            <div className="add-card">
                <p>
                    Add a card...
                </p>
            </div>
        </div>
    );
}