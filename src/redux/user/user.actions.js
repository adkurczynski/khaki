import UserActionTypes from './user.types';

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const signUpStart = userCredentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});

export const addActivityStart = activity => ({
  type: UserActionTypes.ADD_ACTIVITY_START,
  payload: activity
});

export const addActivitySuccess =  () => ({
  type: UserActionTypes.ADD_ACTIVITY_SUCCESS
});

export const addActivityFailure = error => ({
  type: UserActionTypes.ADD_ACTIVITY_FAILURE,
  payload: error
});

export const removeActivityStart = activity => ({
  type: UserActionTypes.REMOVE_ACTIVITY_START,
  payload: activity
});

export const removeActivityFailure = error => ({
  type: UserActionTypes.REMOVE_ACTIVITY_FAILURE,
  payload: error
});

export const removeActivitySuccess = () => ({
  type: UserActionTypes.REMOVE_ACTIVITY_SUCCESS,
});