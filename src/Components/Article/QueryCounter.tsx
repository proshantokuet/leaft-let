import React from "react";
import { Button, Grid, IconButton, Snackbar } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";
const QueryCounter = () => {
  const { isLoading, data } = useQuery<any, any>("hero", () => {
    return axios.get("http://localhost:4000/hero").then((res) => {
      return res.data;
    });
  });

  if (isLoading) {
    return <>Loading...</>;
  }
  console.log("OKkkkk", data, isLoading);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {data?.map((d: any, k: any) => (
            <h1 key={k}> {d.name} </h1>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default QueryCounter;
