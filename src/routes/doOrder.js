import React from "react";

import ProtectedRoute from "../components/ProtectedRoute";

import Index from "../secure/DoOrder/index";
import NewItem from "../secure/DoOrder/add";
import Invoice from "../secure/DoOrder/invoice";
import Edit from "../secure/DoOrder/edit";

const DoOrder = [
  <ProtectedRoute path="/do-order/all" component={Index} key="index" />,
  <ProtectedRoute path="/do-order/add" component={NewItem} key="new" />,
  <ProtectedRoute path="/do-order/invoice/:doInvoice" component={Invoice} key="invoice" />,
  <ProtectedRoute path="/do-order/edit-order/:doInvoice" component={Edit} key="edit" />,
];

export default DoOrder;
