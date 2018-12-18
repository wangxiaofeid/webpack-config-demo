import React from "react";
import { Route } from 'react-router-dom'
import SplitComponent from "../../utils/splitComponent";

const router = <Route
                  key="demo12"
                  path="/demo12"
                  component={SplitComponent(() => import(/* webpackChunkName: "demo12" */'./index'))} 
                />

export default router