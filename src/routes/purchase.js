import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import NewItem from "../secure/Purchase/add";
import Index from "../secure/Purchase/index";

const Purchase = [
  <ProtectedRoute path="/purchase/add" component={NewItem} key="new" />,
  <ProtectedRoute path="/purchase" component={Index} key="index" />,
];

export default Purchase;
