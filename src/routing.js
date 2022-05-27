import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import PermanentDrawerLeft from "./screens/dash";
// import Profile from "./screens/profile";
import SignUp from "./screens/signup";

export default function RoutingFunc() {
    return (
        <Router>

            <Routes>
                <Route path="/" element={<SignUp />} />


                <Route path="/profile/:id/*"  element={<PermanentDrawerLeft />} />

            </Routes>
        </Router>
    );
}