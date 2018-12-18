import React from "react";
import { Route } from 'react-router-dom'
import SplitComponent from "../../utils/splitComponent";

const router = <Route
                  key="demo11"
                  path="/demo11"
                  component={SplitComponent(() => import(/* webpackChunkName: "demo11" */'./index'))} 
                />

export default router