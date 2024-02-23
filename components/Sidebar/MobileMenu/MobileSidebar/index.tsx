import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./styles/index.scss";
import { CloseSquare, LogoutCurve } from "iconsax-react";
import OnoImage from "../../../../src/assets/ono-logo.svg";
import { MenuList } from "../../jsonData";
import { MenuType } from "../../Menu";
import { useNavigate } from "react-router-dom";
import Button from "../../../elements/Button";

type Props = {
  setMobileSidebarOpen: (value: boolean) => void;
  mobileSidebarOpen: boolean;
};

export default function MobileSidebar({
  setMobileSidebarOpen,
  mobileSidebarOpen,
}: Props) {
    const [isActiveTab, setIsActiveTab] = useState<string>("");
  const router = useNavigate();

  useEffect(() => {
    setIsActiveTab(window.location.pathname);
  },[router])

  const handleTab = (route: string) => {
    router(route)
  }
  const initial = mobileSidebarOpen ? { width: 0 } : { width: "100%" };
  const animate = mobileSidebarOpen ? { width: "100%" } : { width: 0 };
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={mobileSidebarOpen ? { duration: 0.6 } : { duration: 0.3 }}
      className="mobile-menu-container"
      style={{ zIndex: 99, top: 0, left: 0 }}
    >
      <button
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        className="menu-close"
      >
        <img src={OnoImage} />
        <CloseSquare size={32} />
      </button>

      <div className="menu-list">
      {MenuList.map((item: MenuType, index: number) => {
        return (
          <div className={`${isActiveTab === item.route ? 'highlighter' : 'menu-item'}`} onClick={() => handleTab(item.route)} key={index}>
            <span>{item.icon}</span>
            <label>{item.name}</label>
          </div>
        );
      })}
      </div>
      <div className="logout-btn">
        <Button
          className="btn-default"
          icon={<LogoutCurve size="24" variant="Bold" />}
        >
          Logout
        </Button>
      </div>
    </motion.div>
  );
}
