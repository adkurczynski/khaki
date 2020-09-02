import React, { useState } from 'react';

import CustomButton from './custom-button.component';

import UserActivities from './user-activities.component';

import UserData from './user-data.component'
import Preview from './preview.component'


const UserOverview = ({currentUser}) => {
    const [activitiesComponent, showActivitiesComponent] = useState(false);

    const { displayName, age, activities, placeOfResidence } = currentUser;


    const handleChange = () => {
        showActivitiesComponent(!activitiesComponent);
    }

    return (
        <div>
            <h1>{displayName}</h1>
            { age||activities||placeOfResidence ? (
                null
            ) : (
            <div>
                <h2>Fill in your details!</h2>
            </div>
            )}
            <UserData age={age} placeOfResidence={placeOfResidence}/>
            { activities ? (
                <div className='activities-container'>
                    <UserActivities activities={activities}/>
                    <CustomButton onClick={handleChange}>Choose more stuff</CustomButton>
                </div>
            ) : (
                <CustomButton onClick={handleChange}>Choose activities</CustomButton>
            )
            }
            { activitiesComponent ? (
                <Preview parent='userOverview'/>
            ):null
            }
            
            
            
        </div>
    )
}

export default UserOverview;