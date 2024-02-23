/* eslint-disable @typescript-eslint/ban-ts-comment */
import PanelLayout from "../../../components/Layout";
import "./styles/audience.scss";
import { useEffect, useState } from "react";
import { AudienceTypes } from "./types";
import Filter from "./components/Filter";
import Table from "./components/Table";
import { GetAudiences } from "./service";

const Audience = () => {
  const [initialAudienceList, setInitialAudienceList] = useState<
    AudienceTypes[]
  >([]);
  const [filteredList, setFilteredList] = useState<AudienceTypes[]>([]);
  const [filterData, setFilterData] = useState({
    searchText: "",
    tag: "all",
    status: "all",
  });

  useEffect(() => {
    document.title = "Audience";
  }, []);

  useEffect(() => {
    GetAudiences()
      .then((response) => {
        setInitialAudienceList(response?.data);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  }, []);

  return (
    <PanelLayout>
      <div className="filter-layout">
        <Filter
          filterData={filterData}
          setFilterData={setFilterData}
          initialAudienceList={initialAudienceList}
          setFilteredList={setFilteredList}
        />
      </div>
      <div className="audience-list">
        {/* @ts-expect-error */}
        <Table filteredList={filteredList} />
      </div>
    </PanelLayout>
  );
};

export default Audience;
