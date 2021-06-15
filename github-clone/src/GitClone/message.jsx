import React from 'react';
import PropTypes from 'prop-types';

export function CommitMessage({commit})
{
    return(
        <div className="commit-message">
            {commit.message}
        </div>
    );
}
CommitMessage.propTypes = {
    commit: PropTypes.object.isRequired
};
   