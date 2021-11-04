import React from "react";

import ProtectedRoute from "../components/ProtectedRoute";
import NewItem from "../secure/Purchase/add";
import Index from "../secure/Purchase/index";
import Invoice from "../secure/Purchase/invoice";
import Edit from "../secure/Purchase/edit";

const Purchase = [
  <ProtectedRoute path="/purchase/add" component={NewItem} key="new" />,
  <ProtectedRoute
    path="/purchase/invoice/:invoice"
    component={Invoice}
    key="invoice"
  />,
  <ProtectedRoute path="/purchase/edit/:id" component={Edit} key="edit" />,
  <ProtectedRoute path="/purchase" component={Index} key="index" />,
];

export default Purchase;
