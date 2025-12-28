import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="logo-icon">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="19" cy="19" r="19" fill="url(#paint0_radial)"/>
                        <text x="10" y="26" fontSize="18" fontWeight="bold" fill="#fff" fontFamily="Segoe UI, Arial">📝</text>
                        <defs>
                            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(19 19) scale(19)">
                                <stop stopColor="#43c6ac"/>
                                <stop offset="1" stopColor="#764ba2"/>
                            </radialGradient>
                        </defs>
                    </svg>
                </span>
                <span className="logo-text">NotesApp</span>
            </div>
            <div>
                <Link to="/about">About Us</Link>
                {!user ? (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                ) : (
                    <>
                        <Link to="/mynotes">My Notes</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
