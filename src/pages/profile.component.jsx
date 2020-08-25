import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../redux/user/user.selectors';

import './profile.styles.scss';


const ProfilePage = ({currentUser}) => {
    const { displayName } = currentUser;
    return(
        <div>
            <h2>{displayName}</h2>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, null)(ProfilePage);