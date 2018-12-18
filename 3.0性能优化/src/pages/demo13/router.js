import React from "react";
import { Route } from 'react-router-dom'
import SplitComponent from "../../utils/splitComponent";

const router = <Route
                  key="demo13"
                  path="/demo13"
                  component={SplitComponent(() => import(/* webpackChunkName: "demo13" */'./index'))} 
                />

export default router