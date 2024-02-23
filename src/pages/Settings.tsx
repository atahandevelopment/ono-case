import { useEffect } from "react";
import PanelLayout from "../../components/Layout";

// type Props = {}

const Settings = () => {
  useEffect(() => {
    document.title = "Settings";
  }, []);

  return <PanelLayout>Settings Page</PanelLayout>;
};

export default Settings;
