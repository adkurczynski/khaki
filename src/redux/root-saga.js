import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { collectionSagas } from './collection/collection.sagas';

export default function* rootSaga() {
    yield all([call(userSagas), call(collectionSagas)]);
}