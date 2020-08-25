import React from 'react' 

import './preview-item.styles.scss';

const PreviewItem = ({ title, url}) => (
    <div className='preview-item-container'>
        <div className='image-container'>
            <img src={`${url}`} alt='preview-img'/>
            <span>{title.toUpperCase()}</span>
        </div>
    </div>
)

export default PreviewItem