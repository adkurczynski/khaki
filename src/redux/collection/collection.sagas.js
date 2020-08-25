import { takeLatest, call, put, all } from 'redux-saga/effects';

import CollectionActionTypes from './collection.types';

import {
    fetchCollectionsFailure,
    fetchCollectionsSuccess
} from './collection.actions'
import { firestore } from '../../firebase/firebase.utils';
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export function* fetchCollectionsAsync() {
    try{
        const collectionRef = firestore.collection('activities');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );
        yield put(fetchCollectionsSuccess(collectionsMap))
    }catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest (
        CollectionActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

export function* collectionSagas(){
    yield all([call(fetchCollectionsStart)])
}