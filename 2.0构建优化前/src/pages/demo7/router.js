import React from "react";
import { Route } from 'react-router-dom'
import SplitComponent from "../../utils/splitComponent";

const router = <Route
                  key="demo7"
                  path="/demo7"
                  component={SplitComponent(() => import(/* webpackChunkName: "demo7" */'./index'))} 
                />

export default router