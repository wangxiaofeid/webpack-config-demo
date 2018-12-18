import React from "react";
import { Route } from 'react-router-dom'
import SplitComponent from "../../utils/splitComponent";

const router = <Route
                  key="demo5"
                  path="/demo5"
                  component={SplitComponent(() => import(/* webpackChunkName: "demo5" */'./index'))} 
                />

export default router