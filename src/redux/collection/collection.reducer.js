import CollectionActionTypes from './collection.types';

const INITIAL_STATE = {
    collections: null,
    errorMessage: null,
    isFetching: null
}

const collectionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CollectionActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case CollectionActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching: null,
                errorMessage: null
            };
        case CollectionActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                isFetching: null
            }
        default:
            return state;
    }
}

export default collectionReducer;