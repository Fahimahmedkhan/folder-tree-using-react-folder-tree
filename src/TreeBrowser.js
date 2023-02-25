import React from 'react';
import FolderTree from 'react-folder-tree';
import "react-folder-tree/dist/style.css";



const TreeBrowser = () => {
    const onTreeStateChange = (state, event) => { };
    const treeState = {
        name: "Root",
        checked: 0,
        isOpen: true,
        children: [

        ]
    };
    return (
        <div className='flex items-center gap-2'>
            <FolderTree
                data={treeState}
                onChange={onTreeStateChange}
                showCheckbox={false}
            />
        </div>
    );
};

export default TreeBrowser;