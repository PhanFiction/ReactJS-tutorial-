import React from 'react';
import PropTypes from 'prop-types';

export function Time ({time})
{
    return (
        <span className="time">
            {time}
        </span>
    );
}
Time.propTypes = {
    time: PropTypes.string.isRequired
}