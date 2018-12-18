import React from "react";
import { Route } from 'react-router-dom'
import SplitComponent from "../../utils/splitComponent";

const router = <Route
                  key="demo10"
                  path="/demo10"
                  component={SplitComponent(() => import(/* webpackChunkName: "demo10" */'./index'))} 
                />

export default router