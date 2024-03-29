// src/Pages/Header/Header.tsx
import Status from "./Status/Status";
import Introduce from "./Introduce/Introduce";
import Sites from "./Site/Sites";

import "./Header.css";

const Header: React.FC = () => {
  const Preparing = true; // true: 구직 중, false: 구직 완료

  return (
    <div id="header">
      <Status employ={Preparing} />
      <Introduce />
      <Sites />
    </div>
  );
};

export default Header;
