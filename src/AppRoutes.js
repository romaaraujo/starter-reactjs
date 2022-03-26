import { React, Component } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import NoMatchPage from "./pages/NoMatchPage";
import TestePage from "./pages/TestPage";

class AppRoutes extends Component {

    constructor() {
        super()
        this.routes = [
            { path: '/', element: <HomePage />, active: true, index: true },
            { path: '/teste', element: <TestePage />, active: true }
        ]
    }

    render() {
        return (
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage />} />
                    {this.routes.map((v, i) => {
                        return v.active && !v.index ?
                            <Route path={v.path} key={i} element={v.element} /> :
                            false
                    })}
                    <Route path="*" element={<NoMatchPage />} />
                </Route>
            </Routes>
        )
    }
}

export default AppRoutes;