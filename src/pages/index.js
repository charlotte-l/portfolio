import React from 'react';

import SEO from '../components/common/seo';
import App from '../components/App';

const Index = () => {
  return (
    <>
      <SEO />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </>
  );
};

export default Index;
