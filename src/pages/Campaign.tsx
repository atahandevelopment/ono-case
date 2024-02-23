import { useEffect } from "react";
import PanelLayout from "../../components/Layout";

// type Props = {}

const Campaign = () => {
  useEffect(() => {
    document.title = "Campaign";
  }, []);

  return <PanelLayout>Campaign Page</PanelLayout>;
};

export default Campaign;
