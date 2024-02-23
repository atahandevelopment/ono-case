import { useEffect } from "react";
import PanelLayout from "../../components/Layout";

// type Props = {}

const DashBoard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  return <PanelLayout>Dashboard</PanelLayout>;
};

export default DashBoard;
