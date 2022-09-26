import React from "react";
import '../Assets/css/style.css'
import { Link } from "react-router-dom";
const header = () => {
    return (
        <div className="container">
            <div className="appHeader bg-primary text-light">
                <h1 className="pageTitle">To Do List</h1>
            </div>
            <div className="extraHeader p-0">
                <nav className="nav nav-tabs lined">
                    <div className="nav-item col-6">
                        <Link to={'/'} className="nav-link">Add List</Link>
                    </div>
                    <div className="nav-item col-6">
                        <Link to={'/SecondPage'} className="nav-link">Your List</Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default header;