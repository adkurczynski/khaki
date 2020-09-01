import React from 'react';



const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
      return isLoading ? (
        <div className='overlay'>
          <div className='container'/>
        </div>
      ) : (
        <WrappedComponent {...otherProps} />
      );
    };
    return Spinner;
  };
  
  export default WithSpinner;