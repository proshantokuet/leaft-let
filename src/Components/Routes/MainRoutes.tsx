import React from "react";
import PropTypes from "prop-types";
import Form from "../Form";
import View from "../Article/View";
import Add from "../Article/add";
import Counter from "../Article/Counter";
import QueryCounter from "../Article/QueryCounter";
const MainRoutes = {
  path: "/",
  element: <Add />,
  children: [
    {
      path: "/view",
      element: <Counter />,
    },
    { path: "/add", element: <Add /> },
  ],
};

export default MainRoutes;
