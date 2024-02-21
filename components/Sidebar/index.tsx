import "./styles/index.scss";
import onoLogo from "../../src/assets/ono-logo.svg";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { LogoutCurve } from "iconsax-react";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="ono-logo">
        <img src={onoLogo} />
      </div>
      <div className="search-box">
        <Input placeholder="Search" type="text" className="search-sidebar" />
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="logout-btn">
        <Button
          className="btn-default"
          icon={<LogoutCurve size="24" variant="Bold" />}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
