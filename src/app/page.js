"use client"
import "./globals.css"
import "./components/dashboardCSS.css"
import "./components/loginCSS.css"


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Dashboard from "./components/dashboard"
import Login from "./components/login";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        exact
                        path={"/"}
                        element={<Dashboard />}
                    />
                    <Route
                        path={"login"}
                        element={<Login />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;