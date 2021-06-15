import React from 'react';
import PropTypes from 'prop-types';

export function FileIcon(file)
{
    // for file icon 'fa-file-text-o';
    // for folder icon 'fa-folder'
    let fileIcon = 'fa-file-text-o';
    if(file.type === 'folder') fileIcon = 'fa-folder';
    return(
        <span className="file-icon">
            <i className={`fa ${fileIcon}`}/>
        </span>
    );
}
FileIcon.propTypes = {
    file: PropTypes.object.isRequired
}

export function FileName(file)
{  
    return(
        <div className="file-name">
            {file.name}
        </div>
    );
}
FileName.propTypes = {
    file: PropTypes.string
}

