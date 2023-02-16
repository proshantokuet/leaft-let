import React, { useEffect, useState } from "react";
import type { Rootsate } from "../store/Store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment } from "../store/Slice";
import { Button, Grid, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
const Counter = () => {
  const count = useSelector((state: Rootsate) => state.counter.value);
  console.log(count);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    document.title = `you have cliked ${counter} times`;
    console.log("okkkkk");
    // setTimeout(() => {
    //   setCounter(count + 1);
    // }, 1000);
  }, [counter]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));
    //   console.log(res);
    // };
    // fetchData().catch((e) => {
    //   console.log(e);
    // });
    axios.get("http://localhost:4000/hero").then((res) => {
      setData(res.data);
      console.log(res.data);
      setLoading(false);
    });

    document.title = `you have cliked ${counter} times`;
    console.log("okkkkk default");
  }, []);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const handleSnack = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const action = (
    <>
      <Button onClick={handleClose}>Close</Button>
      <IconButton onClick={handleClose} size="small" aria-label="Close">
        <CloseIcon fontSize="small"></CloseIcon>
      </IconButton>
    </>
  );
  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          Increment:{count}
          <button onClick={() => dispatch(increment())}> Increment</button>
        </Grid>
        <Grid item xs={4}>
          <button onClick={() => handleClick()}>Clicked {counter} times</button>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handleSnack}>Open Snack Bar</Button>

          <Snackbar
            open={open}
            autoHideDuration={1000}
            message="Not archived..."
            action={action}
          ></Snackbar>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {data.map((d, k) => (
            <h1> {d.name} </h1>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

Counter.propTypes = {};

export default Counter;
