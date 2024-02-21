/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import './styles/index.scss';
import { AudienceTypes } from "../../../src/pages/Audience/types";
import 'react-perfect-scrollbar/dist/css/styles.css';




interface ColumnTypes {
    render?: (row: AudienceTypes) => React.ReactNode;
    accessor?: keyof AudienceTypes;
    headerName?: string | JSX.Element;
  }
  

  
  interface DataTableProps {
    columns: ColumnTypes[];
    rows: AudienceTypes[];
  }
  
  const DataTable = ({ columns, rows }: DataTableProps) => {
    return (
        <table className="table-container">
        <thead>
          {columns.length > 0 ? (
            columns.map((item, i) => {
              return (
                <th key={i}>
                  <tr>{item?.headerName}</tr>
                </th>
              );
            })
          ) : (
            <></>
          )}
        </thead>
        <tbody>
        { rows &&  rows.length > 0 ? rows.map((row, rowIndex) => { 
            return (
            <tr className="table-rows" key={rowIndex}>
              {columns.map((column, colIndex) => { 
                return(
                <td key={colIndex}>
                  {column.render ? column.render(row) : (column.accessor && row[column?.accessor])}
                </td>
              )})}
            </tr>
          )}) : <></>}
        </tbody>
      </table>
    );
  };
  
  export default DataTable;
  