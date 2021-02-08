import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="Navigation">
            <ul className="navlist">
                <li><NavLink exact to="/" className="navitem" activeClassName="activenav">Home</NavLink></li>
                <li><NavLink to="/about" className="navitem" activeClassName="activenav">About</NavLink></li>
                <li><NavLink to="/projects" className="navitem" activeClassName="activenav">Projects</NavLink></li>
            </ul>
        </nav>
    )
}

export {Navigation}


