import { Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Users.css";
import api from "helpers/api";
import PaginatedTable from "components/Table/Table";

const columns = [
  { id: "name", label: "Name" },
  { id: "gender", label: "Gender" },
  { id: "email", label: "Email" },
];

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/?results=50");
        setData(response.data);
        setLoading(false);

        // Filter the data based on your criteria
        const keysToKeep = ["gender", "email", "name"];

        const filteredResults = response.data.results.map((result) => {
          const filteredResult = {};
          keysToKeep.forEach((key) => {
            if (key === "name") {
              filteredResult[
                key
              ] = `${result?.name?.first} ${result?.name?.last}`;
            } else if (key in result) {
              filteredResult[key] = result[key];
            }
          });
          return filteredResult;
        });

        setFilteredData({ results: filteredResults, info: response.data.info });
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedSearch(searchParam);
    }, 1000); // Set your debounce delay here (e.g., 300ms)

    return () => clearTimeout(debounceTimeout);
  }, [searchParam]);

  useEffect(() => {
    if (debouncedSearch !== "") {
      const filteredResults = data.results.filter((result) => {
        const fullName =
          `${result?.name?.first} ${result?.name?.last}`.toLowerCase();
        const email = result?.email?.toLowerCase();

        return (
          (typeof fullName === "string" &&
            fullName.includes(debouncedSearch.toLowerCase())) ||
          (typeof email === "string" &&
            email.includes(debouncedSearch.toLowerCase()))
        );
      });

      setFilteredData({
        results: filteredResults,
        info: data.info,
      });
    } else {
      // If searchParam is empty, reset to display all data
      setFilteredData({
        results: data.results,
        info: data.info,
      });
    }
  }, [debouncedSearch, data]);

  const handleSearchChange = (event) => {
    setSearchParam(event.target.value);
  };

  return (
    <Box className="container users-page-container">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="24px"
      >
        <Typography component="h1">Users List</Typography>
        <TextField
          label="Search"
          variant="standard"
          value={searchParam}
          onChange={handleSearchChange}
        />
      </Box>
      {!loading ? (
        <PaginatedTable data={filteredData?.results} columns={columns} />
      ) : (
        <>Loading</>
      )}
    </Box>
  );
};

export default Users;
