import React from 'react';

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...props}) => (
    <div className='form-container'>
        <input onChange={handleChange} {...props} />
        {label ? (
            <label className={props.value.length ? 'shrink' : ''}>
                {label}
            </label>
        ) : null}
    </div>
);

export default FormInput;