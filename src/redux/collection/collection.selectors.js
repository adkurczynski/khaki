import { createSelector } from 'reselect';


const selectCollection = state => state.collection;


export const selectCollections = createSelector(
    [selectCollection],
    collection => collection.activities
);

export const selectIsCollectionFetching = createSelector (
    [selectCollection],
    collections => collections.isFetching
);

export const selectIsCollectionLoaded = createSelector (
    [selectCollection],
    collections => !!collections.activities
);

