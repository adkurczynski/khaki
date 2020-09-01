import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import PreviewItem from './preview-item.component';

import { selectCollections } from '../redux/collection/collection.selectors';
import { removeActivityStart } from '../redux/user/user.actions'

import './user-activities.styles.scss';


const UserActivities = ({ activities, collections, removeActivityStart}) => {
    const activitiesArray = Object.values(collections);
    const handleChange = event => {
        removeActivityStart(event.target.title);
    }

    return(
        <div className='activities-container'>
            {activitiesArray.filter((item) => activities.includes(item.title)).map(({id, title, url, category})=>(
                    <PreviewItem key={id} title={title} url={url} category={category} parent='user-activities' handleChange={handleChange}/>
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

const mapDispatchToProps = dispatch => ({
    removeActivityStart: activity => dispatch(removeActivityStart(activity))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserActivities); 