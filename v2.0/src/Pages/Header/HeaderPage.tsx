// src/Pages/Header/HeaderPage.tsx
import Status from './Status/Status';
import Introduce from './Introduce/Introduce';
import Sites from './Site/Sites';

const Header: React.FC = () => {
  return <div id="header">
    <Status />
    <Introduce />
    <Sites />
  </div>
}

export default Header;