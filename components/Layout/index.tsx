import React from "react";
import "./styles/index.scss";
import Sidebar from "../Sidebar";
import Header from "../Header";

type Props = {
  children: React.ReactNode;
};

const PanelLayout = ({ children }: Props) => {
  const userName = "Welcome, Amanda";
  const date = "Tue, 07 June 2022";
  return (
    <div className="container">
      <Sidebar />
      <div className="panel">
      <div className="header">
        <Header name={userName} date={date} />
      </div>
        {children}
        </div>
    </div>
  );
};

export default PanelLayout;
