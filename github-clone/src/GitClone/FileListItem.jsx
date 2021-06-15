import React from 'react';
import PropTypes from 'prop-types';
import {FileIcon, FileName } from './FileItems';
import {Time} from './time';
import { CommitMessage } from './message';

export default function FileListItem({file})
{
    return(
        <div className="file-list-item">
            <div className="start">
                {FileIcon(file)}
                {FileName(file)}
            </div>
            <div className="middle">
                <CommitMessage commit={file.latestCommit}/>
            </div>
            <div className="end">
                <span className="time-age">
                    <Time time={file.updated_at}/>
                </span>
            </div>
        </div>
    );
}
FileListItem.propTypes = {
    file: PropTypes.object.isRequired
}

