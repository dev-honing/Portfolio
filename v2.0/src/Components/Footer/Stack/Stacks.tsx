import React from "react";
import { Link } from 'react-router-dom';

const Stacks: React.FC = () => {
  return (
    <div className="stacks">
      <Link to="/aws">
        AWS
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/my-icons-svg/SVG/AWS.svg"
          alt="AWS"
          style={{ width: "10rem", height: "10rem", cursor: 'pointer' }}
        />
      </Link>

      <Link to="/html">
        HTML
        <img
          src="https://my-icons-svg.s3.ap-northeast-2.amazonaws.com/SVG/HTML.svg"
          alt="HTML"
          style={{ width: "10rem", height: "10rem", cursor: 'pointer' }}
        />
      </Link>

      <Link to="/css">
        CSS
        <img
          src="https://my-icons-svg.s3.ap-northeast-2.amazonaws.com/SVG/CSS.svg"
          alt="CSS"
          style={{ width: "10rem", height: "10rem", cursor: 'pointer' }}
        />
      </Link>

      <Link to="/javascript">
        JavaScript
        <img
          src="https://my-icons-svg.s3.ap-northeast-2.amazonaws.com/SVG/JavaScript.svg"
          alt="JavaScript"
          style={{ width: "10rem", height: "10rem", cursor: 'pointer' }}
        />
      </Link>
    </div>
  );
};

export default Stacks;
