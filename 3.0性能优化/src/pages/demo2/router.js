import React from "react";
import { Route } from 'react-router-dom'
import SplitComponent from "../../utils/splitComponent";

const router = <Route
                  key="demo2"
                  path="/demo2"
                  component={SplitComponent(() => import(/* webpackChunkName: "demo2" */'./index'))} 
                />

export default router