import React from "react";
import { Route } from 'react-router-dom'
import SplitComponent from "../../utils/splitComponent";

const router = <Route
                  key="demo9"
                  path="/demo9"
                  component={SplitComponent(() => import(/* webpackChunkName: "demo9" */'./index'))} 
                />

export default router