import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import FileListItem from './FileListItem';


/*
-Stable: An element should always have the same key,
regardless of its position in the array. This means key={index} is a bad idea.

-Permanent: An element’s key must not change
between renders. This means key={Math.random()} is a bad idea.

-Unique: No two elements should have the same key.
*/
// page 95
function FileList({folders})
{
    return(  
        <div className="file-list">
            <span>
                {
                    // Key is required to help React identify which items are changed when rending 
                    // an array of elements
                    folders.map(file => 
                        <FileListItem key={file.id} file={file}/>
                    )
                }
            </span>
        </div>
    );
}
FileList.propTypes = {
    folders: PropTypes.array
}


const testFiles = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: "2 days ago",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: "9 days ago",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 3,
        name: 'assets',
        type: 'folder',
        updated_at: "9 days ago",
        latestCommit: {
            message: 'Added images'
        }
    },
    {
        id: 4,
        name: 'README',
        type: 'file',
        updated_at: "10 days ago",
        latestCommit: {
            message: 'Added a readme'
        }
    },
];
   


ReactDOM.render(<FileList folders={testFiles}/>, document.querySelector('#root'));