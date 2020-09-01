import React from 'react';

import DataInput from './data-input.component';

import './user-data.styles.scss'

const UserData = ({placeOfResidence, age}) => {
    return(
        <div className='user-data-container'>
            {age ? (
                <div className='data-container'>
                    <h2 className='data-description'>Age</h2>
                    <h3 className='user-data-part'>{age}</h3>
                </div>
            ):
            (  <div className='input-container'>
                    <h3>Enter your age</h3>
                    <DataInput dataType='number' parent='user-data'/>
                </div>
            )}
            {placeOfResidence ? (
                <div className='data-container'>
                    <h2 className='data-description'>City</h2>
                    <h3 className='user-data-part'>{placeOfResidence}</h3>
                </div>
            ):
            (
                <div className='input-container'>
                    <h3>Enter your city</h3>
                    <DataInput dataType='text' parent='user-data'/>
                </div>
            )}
            
        </div>
    )
}

export default UserData