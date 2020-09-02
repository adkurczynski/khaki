import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.REMOVE_ACTIVITY_SUCCESS:
      
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          activities: state.currentUser.activities.filter(item => item !== action.payload)
        },
      
      }
    case UserActionTypes.ADD_ACTIVITY_SUCCESS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          activities: state.currentUser.activities.concat(action.payload)
        }
      }
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.ADD_ACTIVITY_FAILURE:
    case UserActionTypes.REMOVE_ACTIVITY_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
