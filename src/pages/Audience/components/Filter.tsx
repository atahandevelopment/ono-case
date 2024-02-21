import React, { useEffect } from "react";
import Input from "../../../../components/elements/Input";
import { AudienceTypes, FilterData } from "../types";

type Props = {
  setFilterData: React.Dispatch<React.SetStateAction<FilterData>>;
  setFilteredList: React.Dispatch<React.SetStateAction<AudienceTypes[]>>;
  filterData: FilterData;
  initialAudienceList: AudienceTypes[];
};

const tags = [
  { name: "Design" },
  { name: "Development" },
  { name: "Marketing" },
];

const status = [
  {
    name: "active",
  },
  {
    name: "passive",
  },
];

const Filter = (props: Props) => {
  const { filterData, setFilterData, initialAudienceList, setFilteredList } =
    props;

  useEffect(() => {
    let filteredAudienceList = initialAudienceList;

    // Arama terimiyle filtreleme
    if (filterData.searchText) {
      filteredAudienceList = filteredAudienceList.filter(
        (f: { name: string }) =>
          f.name.toLowerCase().includes(filterData.searchText.toLowerCase())
      );
    }

    // Status'e göre filtreleme
    if (filterData.status !== "all") {
      filteredAudienceList = filteredAudienceList.filter(
        (f: { status: string }) => f.status === filterData.status
      );
    }

    // Tag'a göre filtreleme
    if (filterData.tag !== "all") {
      filteredAudienceList = filteredAudienceList.filter(
        (f: { tags: (string | string[])[] }) =>
          f.tags[0].includes(filterData.tag)
      );
    }

    setFilteredList(filteredAudienceList);
  }, [filterData, initialAudienceList]);

  return (
    <>
      <div>
        <p>Audience List</p>
      </div>
      <div>
        <span className="search-box">
          <Input
            placeholder="Search"
            type="text"
            onChange={(e) =>
              setFilterData({ ...filterData, searchText: e.target.value })
            }
            className="search-audience"
          />
        </span>
        <select
          onChange={(e) =>
            setFilterData({ ...filterData, tag: e.target.value })
          }
          className="selectbox-1"
        >
          <option value="all">Select Tags</option>
          {tags.map((tag, index) => (
            <option value={tag.name} key={index}>
              {tag.name}
            </option>
          ))}
        </select>
        <select
          onChange={(e) =>
            setFilterData({ ...filterData, status: e.target.value })
          }
          className="selectbox-2"
        >
          <option value="all">All Status</option>
          {status.map((status, index) => (
            <option value={status.name} key={index}>
              {status.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Filter;
