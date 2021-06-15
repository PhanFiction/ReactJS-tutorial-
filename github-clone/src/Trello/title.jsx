import React from 'react';
import PropTypes from 'prop-types';

export default function Title({children})
{
    return(
        <div className="title">
            {children}
        </div>
    );
}