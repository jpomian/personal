import React from 'react';

const PDFViewer = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe 
        src='/cv.pdf' 
        width="100%" 
        height="100%"
        style={{ border: 'none' }}
        title="PDF Viewer"
      >
        <p>Your browser does not support PDFs. 
          <a href="/public/cv.pdf">Download the PDF</a> instead.
        </p>
      </iframe>
    </div>
  );
};

export default PDFViewer;