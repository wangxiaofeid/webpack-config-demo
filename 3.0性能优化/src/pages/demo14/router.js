import React from "react";
import { Route } from 'react-router-dom'
import SplitComponent from "../../utils/splitComponent";

const router = <Route
                  key="demo14"
                  path="/demo14"
                  component={SplitComponent(() => import(/* webpackChunkName: "demo14" */'./index'))} 
                />

export default router