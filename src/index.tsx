import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PageWrapper from './layout/PageWrapper';
import Home from './pages/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <PageWrapper>
      <Home />
    </PageWrapper>
  </React.StrictMode>
);
