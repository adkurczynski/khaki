import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Preview from './preview.component';
import WithSpinner from './spinner.component';

import { selectIsCollectionFetching } from '../redux/collection/collection.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const PreviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
    )(Preview)


    export default PreviewContainer;