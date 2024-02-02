// src/Pages/Footer/Footer.tsx
import Stacks from './Stack/Stacks';
import Versions from './Version/Versions';
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div id="footer">
      <Stacks />
      <Versions />
    </div>
  );
};

export default Footer;
