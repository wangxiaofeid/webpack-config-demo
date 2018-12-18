import React from "react";
import { Route } from 'react-router-dom'
import SplitComponent from "../../utils/splitComponent";

const router = <Route
                  key="demo15"
                  path="/demo15"
                  component={SplitComponent(() => import(/* webpackChunkName: "demo15" */'./index'))} 
                />

export default router