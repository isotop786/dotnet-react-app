// withLoader.js
import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const withLoader = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate an asynchronous operation (e.g., fetching data)
      const fetchData = async () => {
        // Perform your asynchronous operation here
        // For demo purposes, use a timeout to simulate loading
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
      };

      fetchData();
    }, []); // Run only once on mount

    return loading ? <Loader /> : <WrappedComponent {...props} />;
  };
};

export default withLoader;
