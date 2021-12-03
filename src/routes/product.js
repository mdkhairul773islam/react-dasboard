import React from "react";

import ProtectedRoute from "../components/ProtectedRoute";

import Unit from "../secure/Product/unit";
import Brand from "../secure/Product/brand";
import Category from "../secure/Product/category";
import Subcategory from "../secure/Product/subCategory";
import AddProduct from "../secure/Product/add";
import Editproduct from "../secure/Product/edit";
import AllProduct from "../secure/Product/index";

const Product = [
    <ProtectedRoute path="/product/all" component={AllProduct} key="all" />,
    <ProtectedRoute path="/product/add" component={AddProduct} key="add" />,
    <ProtectedRoute path="/product/edit:id" component={Editproduct} key="edit" />,
    <ProtectedRoute path="/product/category" component={Category} key="category" />,
    <ProtectedRoute path="/product/subcategory" component={Subcategory} key="subcategory" />,
    <ProtectedRoute path="/product/brand" component={Brand} key="brand" />,
    <ProtectedRoute path="/product/unit" component={Unit} key="unit" />,
    <ProtectedRoute path="/product/unit/edit:id" component={Unit} key="unitEdit" />
];

export default Product;