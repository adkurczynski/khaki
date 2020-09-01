import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../redux/user/user.selectors';

import UserOverview from '../components/user-overview.component';

import './profile.styles.scss';


const ProfilePage = ({currentUser}) => {
    return(
        <div>
            <UserOverview currentUser={currentUser}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, null)(ProfilePage);