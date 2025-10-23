// src/layouts/PageWithTOC.js
import React, { useEffect } from 'react';
import TableOfContents from '../Components/TableOfContents';
import './PageWithTOC.css';


const PageWithTOC = ({ children, title, containerId = 'main-content' }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-with-toc">

      {/* Main content wrapper for TOC scan */}
      <div
        id={containerId}
        className="page-content-wrapper"
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}
      >
        {/* Table of Contents scans only inside this container */}
        <TableOfContents containerId={containerId} />

        {/* Page title + children */}
        <div className="page-main-content">
          {title && <h1 className="page-title">{title}</h1>}
          {children}
        </div>
      </div>

    </main>
  );
};

export default PageWithTOC;
