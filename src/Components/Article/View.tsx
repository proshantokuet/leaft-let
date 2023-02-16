import React from "react";
import {
  Grid,
  TextField,
  Box,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface FormType {
  email: string;
}
const validationSchema = Yup.object().shape({
  email: Yup.string().email("invalid").required("Required"),
});
const View = (props: any) => {
  const dispatch = useDispatch();

  const { cake } = useSelector((state: RootState) => state);
  const initialValue: FormType = {
    email: "",
  };
  console.log("OKKK", cake);

  const changeNumber = (e: any) => {
    console.log(e.target.value);
    dispatch({
      type: "CAKE_NUMBER",
      payload: e.target.value,
    });
  };
  const handleSubmit = (number: number) => {
    console.log(number);
    dispatch({
      type: "BUY_CAKE",
      payload: number,
    });
  };

  return (
    <>
      <div> View</div>
      <Grid
        container
        alignItems="center"
        spacing={2}
        sx={{ m: 0.25, mb: 10, width: "90%" }}
      >
        <Grid item xs={4}>
          <Typography></Typography>
          <h2>Number of cakes:{cake.numberOfCake}</h2>
          <input
            type="number"
            value={cake.cakeNo}
            onChange={changeNumber}
          ></input>
          <button onClick={() => handleSubmit(cake.cakeNo)}>
            Buy {cake.cakeNo} Cake
          </button>
        </Grid>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values, actions);
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <label>Email</label>
              <Field id="email" name="email" placeholder="First Name" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </Grid>
    </>
  );
};

export default View;
