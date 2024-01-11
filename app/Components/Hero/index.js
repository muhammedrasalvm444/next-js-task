"use client";

import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const Hero = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First Name", width: 130 },
    { field: "lastName", headerName: "Last Name", width: 130 },
    { field: "age", headerName: "Age", type: "number", width: 90 },
    // Add more columns as needed
  ];

  const rows = [
    { id: 1, firstName: "John", lastName: "Doe", age: 25 },
    { id: 2, firstName: "Jane", lastName: "Doe", age: 30 },
    // Add more rows as needed
  ];
  return (
    <div className="items-center justify-center h-screen px-4 py-8 my-24 text-white rounded-lg shadow-md sm:flex md:my-8 bg-gradient-to-r from-blue-500 to-blue-200">
      <div className="container px-4 mx-auto my-20">
        {/* <h1 className="mb-4 text-4xl font-bold"></h1> */}
        <p className="mb-4 text-lg">
          Showcase your data in an engaging and interactive way.
        </p>
        <div className="overflow-x-auto">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
            className="bg-white rounded-lg shadow-md hover:bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
