import React from "react";
import { Route } from 'react-router-dom'
import SplitComponent from "../../utils/splitComponent";

const router = <Route
                  key="demo3"
                  path="/demo3"
                  component={SplitComponent(() => import(/* webpackChunkName: "demo3" */'./index'))} 
                />

export default router