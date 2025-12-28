import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="home">
            <h1>Welcome to Notes App 📝</h1>
            <p style={{ fontSize: "1.2rem", marginBottom: "24px" }}>
                Organize your thoughts, tasks, and ideas in one beautiful place.<br />
                Fast, secure, and easy to use.
            </p>
            <div className="features-list" style={{ marginBottom: "32px" }}>
                <div className="feature-item">✅ Create, edit, and delete notes</div>
                <div className="feature-item">🔒 Secure login and user management</div>
                <div className="feature-item">📱 Responsive design for all devices</div>
                <div className="feature-item">🎨 Modern, attractive UI</div>
            </div>
            <button
                style={{
                    padding: "14px 32px",
                    borderRadius: "10px",
                    background: "linear-gradient(90deg, #43c6ac 0%, #764ba2 100%)",
                    color: "#fff",
                    fontWeight: "bold",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    boxShadow: "0 2px 8px rgba(44,62,80,0.10)",
                    marginTop: "10px"
                }}
                onClick={() => navigate("/signup")}
            >
                Get Started
            </button>
        </div>
    );
};

export default Home;
