import { useEffect, useState } from "react";
import { MenuList } from "./jsonData";
import "./styles/index.scss";
import { useNavigate } from "react-router-dom";
export type MenuType = {
  name: string;
  route: string;
  icon: JSX.Element;
};

const Menu = () => {
  const [isActiveTab, setIsActiveTab] = useState<string>("");
  const router = useNavigate();

  useEffect(() => {
    setIsActiveTab(window.location.pathname);
  },[router])

  const handleTab = (route: string) => {
    router(route)
  }

 
  
  return (
    <>
      <span className="menu-span">Menu</span>
      {MenuList.map((item: MenuType, index: number) => {
        return (
          <div className={`${isActiveTab === item.route ? 'highlighter' : 'menu-item'}`} onClick={() => handleTab(item.route)} key={index}>
            <span>{item.icon}</span>
            <label>{item.name}</label>
          </div>
        );
      })}
    </>
  );
};

export default Menu;
