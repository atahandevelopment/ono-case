import { useEffect } from "react";
import PanelLayout from "../../components/Layout";

// type Props = {}

const Flows = () => {
  useEffect(() => {
    document.title = "Flows";
  }, []);
  return <PanelLayout>Flows Page</PanelLayout>;
};

export default Flows;
