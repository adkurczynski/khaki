import React from 'react' 

import CustomButton from './custom-button.component'


import './preview-item.styles.scss';

const PreviewItem = ({ title, url, parent, handleChange}) => (

    <div  className={`preview-item-container ${parent}`} >
        <div className='image-container' title={title}>
            <img src={`${url}`} alt='preview-img' />
            <span>{title.toUpperCase()}</span>
            <CustomButton className='remove-button' onClick={handleChange} title={title}>Remove</CustomButton>
            <CustomButton className='add-button' onClick={handleChange} title={title}>Add</CustomButton>
        </div>
    </div>
)

export default PreviewItem