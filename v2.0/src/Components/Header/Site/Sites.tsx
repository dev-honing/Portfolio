// src/Components/Header/Site/Sites.tsx
import React from 'react';

import "./Sites.css"

const Sites: React.FC = () => {
  return (
    <div className="sites">
      <a href="http://github.com/dev-honing" className="site" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      {/* 나중에 링크 수정하기! */}<a href="https://dev-honing.github.io/CRA-TEST/" className="site" target="_blank" rel="noopener noreferrer">Blog</a> 
    </div>
  );
};

export default Sites;
