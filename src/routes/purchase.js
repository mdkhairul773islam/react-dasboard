import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import Index from "../secure/Dashboard/Purchase";
import All from "../secure/Dashboard/PurchaseAll";

const Purchase = [
  <ProtectedRoute path="/purchase/add" component={Index} key="index" />,
  <ProtectedRoute path="/purchase" component={All} key="all" />,
];

export default Purchase;
