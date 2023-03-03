import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul style={{ display: 'flex' }}>
                <Link to={'/'}><li style={{ marginRight: "1rem", listStyle: "none", cursor: "pointer" }}><a href=''>Home</a></li></Link>
                <Link to={'/products'}><li style={{ marginRight: "1rem", listStyle: "none", cursor: "pointer" }}><a href=''>Products</a></li></Link>
                <Link to={'/about'}><li style={{ marginRight: "1rem", listStyle: "none", cursor: "pointer" }}><a href=''>About</a></li></Link>
                <Link to={'/contact'}><li style={{ marginRight: "1rem", listStyle: "none", cursor: "pointer" }}><a href=''>Contact</a></li></Link>
            </ul>
        </div>
    )
}

export default Navbar