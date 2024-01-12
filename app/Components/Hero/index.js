"use client";

import { getBanners } from "@/api/api";
import { useAuth } from "@/context/authContext";
import { Avatar, Box, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { boolean } from "yup";

const Hero = () => {
  const [rows, setRows] = useState([]);
  const [bannerLoading, setBannerLoading] = useState(false);

  // const { token } = useAuth();
  // const token =
  // if (token) {
  //   const BannersList = getBanners(token);
  //   setRows(BannersList);
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2NzYzNjYyLCJpYXQiOjE3MDUwMzU2NjIsImp0aSI6ImNlYmI2ZTZmNDQ1ZTQwOTk4NmQzM2E0NmQxOTg0Y2Y3IiwidXNlcl9pZCI6ImFkbWluIiwibmFtZSI6bnVsbH0.9CoSlrwsMA52tBHY6rfTD-EQD22MRrJCIK58eBZvPcw"; // Replace with your actual token retrieval logic
        if (token) {
          const BannersList = await getBanners({ token, setBannerLoading });
          setRows(BannersList?.data?.results);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 130,
      renderCell: (params) => <Avatar src={params?.row?.image} />,
      sortable: false,
      filterable: false,
    },
    { field: "title", headerName: "Title", width: 250 },
    {
      field: "is_active",
      headerName: "Active",
      width: 100,
      type: "boolean",
      editable: true,
    },
    {
      field: "created_at",
      headerName: "Created At",
      width: 130,
      renderCell: (params) => (
        <span>{moment(params?.row?.created_at).format("YYYY-MM-DD")}</span>
      ),
    },
  ];

  return (
    <>
      {bannerLoading ? (
        <div className="flex items-center justify-center h-full h-screen">
          <Box
            sx={{
              display: "flex",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              width: "100%", // Ensure the loader takes the full width
            }}
          >
            <CircularProgress />
          </Box>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full h-screen px-4 py-8 text-white rounded-lg shadow-md sm:flex md:my-8 bg-gradient-to-r from-blue-500 to-blue-200">
          <div className="container w-full px-4 mx-auto my-20 sm:w-auto">
            <p className="mb-4 text-lg">Admin Panel</p>
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
      )}
    </>
  );
};

export default Hero;
