import React from "react";
import Project from "./features/portfolio/Project";
import Portfolio from "./features/portfolio/Portfolio";
import "./App.css";

export default function App() {
    return (
        <div className="App">
            <Project />
            <Portfolio />
        </div>
    );
}
