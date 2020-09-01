import React from 'react' 

import './preview-item.styles.scss';

const PreviewItem = ({ title, url, parent, handleChange}) => (

    <div as='button' onClick={handleChange} className={`preview-item-container ${parent}`} >
        <div className='image-container'>
            <img src={`${url}`} alt='preview-img' title={title}/>
            <span>{title.toUpperCase()}</span>
        </div>
    </div>
)

export default PreviewItem