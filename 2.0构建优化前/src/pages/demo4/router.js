import React from "react";
import { Route } from 'react-router-dom'
import SplitComponent from "../../utils/splitComponent";

const router = <Route
                  key="demo4"
                  path="/demo4"
                  component={SplitComponent(() => import(/* webpackChunkName: "demo4" */'./index'))} 
                />

export default router