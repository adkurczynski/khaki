import React from 'react';
import { useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import PreviewItem from './preview-item.component';

import { addActivityStart } from '../redux/user/user.actions'
import { selectCollections } from '../redux/collection/collection.selectors';
import { selectUserActivities } from '../redux/user/user.selectors';


import './preview.styles.scss';




const Preview = ({collections, parent, addActivityStart, userActivities}) => {
    const [activity, setActivity] =  useState();

    const handleChange = event => {
        const { title } = event.target;
        setActivity(activity, {title});
        addActivityStart(event.target.title);
    }

    console.log(parent)
    return (
        <div className={`preview ${parent}`}>
            <h2>Select things that interest you and match with others</h2>
            <div className='preview-container'>
               { userActivities.length > 0 && parent === 'userOverview' ? (
                Object.values(collections).filter((item) => !userActivities.includes(item.title)).map(({ id, title, url, category}) => (
                        <PreviewItem key={id} title={title} url={url} category={category} handleChange={handleChange} />
                    ))) : (
                Object.values(collections).filter((item, idx) => idx < 6).map(({ id, title, url, category}) => (
                        <PreviewItem key={id} title={title} url={url} category={category} handleChange={handleChange}/>
                    ))
                )
                }
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
    userActivities: selectUserActivities
});

const mapDispatchToProps = dispatch => ({
    addActivityStart: activity => dispatch(addActivityStart(activity))
})

export default  connect(mapStateToProps, mapDispatchToProps)(Preview);