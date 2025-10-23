// // src/components/TableOfContents.js
// import React, { useEffect, useState } from 'react';
// import './TableOfContents.css';

// const TableOfContents = ({ contentSelector = 'body' }) => {
//   const [headings, setHeadings] = useState([]);

//   useEffect(() => {
//     const container = document.querySelector(contentSelector);
//     if (!container) return;

//     const contentHeadings = Array.from(container.querySelectorAll('h2, h3')).map((heading) => {
//       const id = heading.id || heading.innerText.replace(/\s+/g, '-').toLowerCase();
//       if (!heading.id) heading.id = id;
//       return {
//         id,
//         text: heading.innerText,
//         level: heading.tagName,
//       };
//     });

//     setHeadings(contentHeadings);
//   }, [contentSelector]);

//   const scrollToSection = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="toc-bar">
//       <strong className="toc-label">📘 Table of Contents:</strong>
//       <div className="toc-links">
//         {headings.map((h) => (
//           <div
//             key={h.id}
//             className={`toc-item ${h.level === 'H3' ? 'sub-heading' : ''}`}
//             onClick={() => scrollToSection(h.id)}
//           >
//             {h.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TableOfContents;


// src/components/TableOfContents.js


import React, { useEffect, useState } from 'react';
import './TableOfContents.css';

const TableOfContents = ({ containerId = 'chiro-wrapper', offset = 80 }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const contentHeadings = Array.from(container.querySelectorAll('h2, h3')).map((heading) => {
      const id = heading.id || heading.innerText.replace(/\s+/g, '-').toLowerCase();
      if (!heading.id) heading.id = id;
      return {
        id,
        text: heading.innerText,
        level: heading.tagName,
      };
    });

    setHeadings(contentHeadings);
  }, [containerId]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className="toc-container">
      <div className="toc-bar">
        <strong className="toc-label">📘 Page of Contents:</strong>
        <div className="toc-links">
          {headings.map((h) => (
            <span
              key={h.id}
              className={`toc-item ${h.level === 'H3' ? 'sub-heading' : ''}`}
              onClick={() => scrollToSection(h.id)}
            >
              {h.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;

