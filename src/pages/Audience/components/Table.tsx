/* eslint-disable @typescript-eslint/ban-ts-comment */
import DotsThree from "../../../assets/DotsThree.svg";
import { Gallery } from 'iconsax-react';
import { AudienceTypes } from '../types';
import DataTable from '../../../../components/elements/DataTable';


type Props = {
    filteredList: AudienceTypes;
}

const Table = (props: Props) => {
    const { filteredList } = props;

    const columns = [
        {
          accessor: "checkbox",
          headerName: <input type="button" className="form-checkbox" />,
          render: () => <input type="button" className="form-checkbox" />,
        },
        {
          accessor: "name",
          headerName: "Audience Name",
          render: (rowData: { name: string }) => {
            return (
              <div className="audience-name-container">
                <span className="user-image-rect">
                  <Gallery className="gallery" variant="Bold" />
                </span>
                <span className="audience-name">{rowData?.name}</span>
              </div>
            );
          },
        },
        {
          accessor: "tags",
          headerName: "Tags",
          render: (rowData: { tags: string[] }) => {
            return (
              <select className="audience-tag">
                {rowData?.tags.map((tag: string, index: number) => (
                  <option key={index}>{tag}</option>
                ))}
              </select>
            );
          },
        },
        {
          accessor: "status",
          headerName: "Status",
          render: (rowData: { status: string }) => {
            return <span className="audience-status">{rowData?.status}</span>;
          },
        },
        {
          accessor: "actions",
          headerName: "Actions",
          render: () => {
            return (
              <>
                <img src={DotsThree} />
              </>
            );
          },
        },
      ];
  return (
    <>
    {/* @ts-expect-error */}
     <DataTable columns={columns} rows={filteredList} />
    </>
  )
}

export default Table