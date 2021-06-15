import React from 'react';
import PropTypes from 'prop-types';

export default function Features({feature})
{
    return(
        <span className="feature">
            <span className="text">
                {feature}
            </span>
        </span>
    );
}
Features.propTypes = {
    children: PropTypes.string
}
