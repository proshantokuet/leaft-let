import { connect } from "react-redux";
import {
  Grid,
  TextField,
  Box,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import PrimarySearchAppBar from "./Appbar";
import SimpleDialog from "./Dialog/Index";
const emails: string[] = ["username@gmail.com", "user02@gmail.com"];

const BUY_CAKE = "BUY_CAKE";
const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};

const Form = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const [numbers, SetNumer] = useState<number>(1);
  const handleClickOpen = () => {
    setOpen(true);
  };
  console.log("P:", props);
  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <PrimarySearchAppBar />
      <Box
        sx={{
          mt: 0.25,
          width: "auto",
          height: 50,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        {" "}
        Add new Article
      </Box>
      <Divider variant="middle" sx={{ height: 20 }} />
      <Box
        alignItems="center"
        sx={{ width: "95%", m: 5, backgroundColor: "#ffff" }}
      >
        <Typography>Basic Information</Typography>
        <Divider />
        <Grid
          container
          alignItems="center"
          spacing={2}
          sx={{ m: 0.25, mb: 1, width: "90%" }}
        >
          <Grid item xs={6}>
            <TextField
              id="outlined-basic1"
              fullWidth
              label="Enter Product Name*"
              defaultValue="Iphone 11 Pro Max"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic1"
              fullWidth
              label="Enter Product Name*"
              defaultValue="Iphone 11 Pro Max"
            />
          </Grid>
        </Grid>
        <Typography>Address Information</Typography>
        <Grid
          container
          alignItems="center"
          spacing={2}
          sx={{ m: 0.25, mb: 10, width: "90%" }}
        >
          <Grid item xs={4}>
            <TextField
              id="outlined-basic1"
              fullWidth
              label="Enter Product Name*"
              defaultValue="Iphone 11 Pro Max"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="outlined-basic1"
              fullWidth
              label="Enter Product Name*"
              defaultValue="Iphone 11 Pro Max"
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>{selectedValue}</Typography>
            <Button variant="outlined" onClick={handleClickOpen}>
              Open simple dialog
            </Button>
            <SimpleDialog
              selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
              emails={emails}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>{selectedValue}</Typography>
            <h2>Number of cakes:{props.numberOfCake}</h2>
            <input
              type="number"
              value={numbers}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                SetNumer(parseInt(e.currentTarget.value))
              }
            ></input>
            <button onClick={() => props.buyCake(numbers)}>
              Buy {numbers} Cake
            </button>
          </Grid>
        </Grid>

        <Grid container justifyContent="flex-end" sx={{ mb: 2 }}>
          <Button
            sx={{ textAlign: "right", mr: 5, mt: 3 }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Grid>
      </Box>

      <Divider variant="middle" sx={{ height: 20 }} />
    </>
  );
};

const cakeMapSateProps = (state: any) => {
  console.log("st:", state);
  return {
    numberOfCake: state.cake.numberOfCake,
  };
};

const cakeMapDispatchProps = (dispatch: any) => {
  console.log("di:", dispatch);
  return {
    buyCake: (number: any) => dispatch(buyCake(number)),
  };
};

export default connect(cakeMapSateProps, cakeMapDispatchProps)(Form);
