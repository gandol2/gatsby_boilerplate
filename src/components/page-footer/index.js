import React from 'react';
import './style.scss';

function PageFooter({ author, authUrl }) {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()}
        &nbsp;
        <a href={authUrl}>{author}</a>
        &nbsp;powered by
      </p>
    </footer>
  );
}

export default PageFooter;
