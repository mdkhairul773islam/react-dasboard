import React from "react";

import ProtectedRoute from "../components/ProtectedRoute";

import AddSupplier from "../secure/Supplier/add";
import AllSupplier from "../secure/Supplier/index";
import SupplierDetails from "../secure/Supplier/show";
import SupplierEdit from "../secure/Supplier/edit";
import AddTransaction from "../secure/Supplier/addTransaction";
import TransactionHistory from "../secure/Supplier/transactionHistory";

const Supplier = [
  <ProtectedRoute path="/supplier/all" component={AllSupplier} key="all" />,
  <ProtectedRoute path="/supplier/add" component={AddSupplier} key="add" />,
  <ProtectedRoute path="/supplier/add-transaction" component={AddTransaction} key="addTransaction" />,
  <ProtectedRoute path="/supplier/transaction-histrory" component={TransactionHistory} key="transactionHistory" />,

  <ProtectedRoute
    path="/supplier/view/:id"
    component={SupplierDetails}
    key="show"
  />,
  <ProtectedRoute
    path="/supplier/edit/:id"
    component={SupplierEdit}
    key="edit"
  />,
];

export default Supplier;



