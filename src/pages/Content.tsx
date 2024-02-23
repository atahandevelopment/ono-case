import { useEffect } from "react";
import PanelLayout from "../../components/Layout";

// type Props = {}

const Content = () => {
  useEffect(() => {
    document.title = "Content";
  }, []);
  return <PanelLayout>Content Page</PanelLayout>;
};

export default Content;
