import { createSelector } from 'reselect';

const selectCollection = state => state.collections;

export const selectCollections = createSelector(
    [selectCollection],
    collections => collections.activities
);

export const selectIsCollectionFetching = createSelector (
    [selectCollection],
    collections => collections.isFetching
);

export const selectIsCollectionLoaded = createSelector (
    [selectCollection],
    collections => !!collections.activities
);