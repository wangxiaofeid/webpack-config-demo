import React from "react";
import { Route } from 'react-router-dom'
import SplitComponent from "../../utils/splitComponent";

const router = <Route
                  key="demo6"
                  path="/demo6"
                  component={SplitComponent(() => import(/* webpackChunkName: "demo6" */'./index'))} 
                />

export default router