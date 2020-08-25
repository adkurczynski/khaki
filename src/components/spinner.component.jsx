import React from 'react';



const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
      return isLoading ? (
        <div class='overlay'>
          <div class='container'/>
        </div>
      ) : (
        <WrappedComponent {...otherProps} />
      );
    };
    return Spinner;
  };
  
  export default WithSpinner;