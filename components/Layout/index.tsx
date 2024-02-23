import React, { useState } from "react";
import "./styles/index.scss";
import Sidebar from "../Sidebar";
import Header from "../Header";
import MobileMenu from "../Sidebar/MobileMenu";

type Props = {
  children: React.ReactNode;
};

const PanelLayout = ({ children }: Props) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const userName = "Welcome, Amanda";
  const date = "Tue, 07 June 2022";
  return (
    <div className="container">
      <Sidebar />
      <div className="panel">
        <MobileMenu
          mobileSidebarOpen={mobileSidebarOpen}
          setMobileSidebarOpen={setMobileSidebarOpen}
        />
        <div className="header">
          <Header name={userName} date={date} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default PanelLayout;
