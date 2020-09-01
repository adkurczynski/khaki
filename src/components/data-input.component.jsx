import React from 'react';

import './data-input.styles.scss'

const DataInput = ({dataType, data, parent}) => {
    return (
        <div className={`data-input-container ${parent}`}>
            <input type={dataType} />
        </div>
    )
}

export default DataInput