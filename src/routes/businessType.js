import React from "react";

import ProtectedRoute from "../components/ProtectedRoute";
import Index from "../secure/BusinessType/index";

const BusinessType = [
  <ProtectedRoute path="/business_type" component={Index} key="index" />,
];

export default BusinessType;
