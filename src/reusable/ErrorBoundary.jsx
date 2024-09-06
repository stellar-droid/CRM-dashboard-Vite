import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Oops! Something went wrong.</h1>
          <p>{this.state.error?.message}</p>
          <button onClick={() => window.location.reload()}>Reload Page</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;



// import React, { useState, useEffect } from 'react';

// function ErrorBoundary({ children }) {
//   const [hasError, setHasError] = useState(false);
//   const [isLoading, setIsLoading] = useState(true); // Manage loading state here

//   useEffect(() => {
//     // Simulate a loading delay
//     const timer = setTimeout(() => setIsLoading(false), 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   const resetErrorBoundary = () => {
//     setHasError(false);
//     setIsLoading(true); // Reset loading state if needed
//   };

//   if (isLoading) {
//     return <div>Loading...</div>; // Display your loader here
//   }

//   if (hasError) {
//     return (
//       <div>
//         <h1>Something went wrong.</h1>
//         <button onClick={resetErrorBoundary}>Try again</button>
//       </div>
//     );
//   }

//   return children;
// }

// export default ErrorBoundary;
