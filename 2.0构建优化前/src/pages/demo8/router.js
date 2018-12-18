import React from "react";
import { Route } from 'react-router-dom'
import SplitComponent from "../../utils/splitComponent";

const router = <Route
                  key="demo8"
                  path="/demo8"
                  component={SplitComponent(() => import(/* webpackChunkName: "demo8" */'./index'))} 
                />

export default router