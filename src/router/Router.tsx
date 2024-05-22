import {createBrowserRouter} from "react-router-dom";
import React from "react";
import MainLayout from "../layots/MainLayout";


export const routerCon = createBrowserRouter([
    {path:'/',element: <MainLayout/> }
])