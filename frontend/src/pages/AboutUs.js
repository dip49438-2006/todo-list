import React from "react";
import { useNavigate } from "react-router-dom";
import './AboutUs.css';


const members = [
    {
        name: "Dip Pal",
        phone: "+91 9339355429",
        mail: "dip49438@gmail.com",
        linkedin: "https://www.linkedin.com/posts/amit-sharma-67b03a138_react-js-activity-7375748210352586753-4zWe?utm_source=share&utm_medium=member_android&rcm=ACoAAEXfMSABxk-i9w6Axg_6tYRS3chGpP1fmxo",
        github: "https://github.com/dip49438-2006",
        picture: "/dip1.jpeg"
    },
    {
        name: "Pritam Barman",
        phone: "+91 9093224209",
        mail: "pritambarman941@gmail.com",
        linkedin: "https://www.linkedin.com/in/pritam-barman-3090a2288",
        github: "https://github.com/pritambarman941-wq",
        picture: "pritam.jpeg"
    },
    {
        name: "Ashish Kumar",
        phone: "+91 9508903783",
        mail: "ashishkumar03783@gmail.com",
        linkedin: "https://www.linkedin.com/in/ashish-khushwaha-812660361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/ashishkumar03783",
        picture: "ashish.jpeg"
    },
    {
        name: "Akash Kumar Singh",
        phone: "+91 9142395977",
        mail: "aakashsingh91423@gmail.com",
        linkedin: "https://www.linkedin.com/in/aakash-singh-20a827287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/akashsingh54",
        picture: "akash.jpeg"
    },
    {
        name: "Debopom Ghosh",
        phone: "+91 7432908942",
        mail: "debopomghosh259@gmail.com",
        linkedin: "https://www.linkedin.com/in/debopom-ghosh-12a379290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/debopomghosh259-sketch",
        picture: "dabopom.jpeg"
    },
    {
        name: "Soumojit Ghosh",
        phone: "+91 8172006663",
        mail: "ghoshsoumojit250@gmail.com",
        linkedin: "https://www.linkedin.com/in/soumojit-ghosh-806019254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Iamsoumojit-ai",
        picture: "soumojit.jpeg"
    }
];

function AboutUs() {
    const navigate = useNavigate();
    return (
        <div className="aboutus-container">
            <button
                style={{
                    marginBottom: "18px",
                    padding: "8px 18px",
                    borderRadius: "8px",
                    background: "linear-gradient(90deg, #43c6ac 0%, #764ba2 100%)",
                    color: "#fff",
                    fontWeight: "bold",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1rem",
                    boxShadow: "0 2px 8px rgba(44,62,80,0.10)",
                }}
                onClick={() => navigate("/")}
            >
                ← Back
            </button>
            <h2>About Us</h2>
            <div className="members-grid">
                {members.map((m, idx) => (
                    <div className="member-card" key={idx}>
                        <img src={m.picture} alt={m.name} className="member-pic" />
                        <h3>{m.name}</h3>
                        <p><strong>Phone:</strong> {m.phone}</p>
                        <p><strong>Email:</strong> <a href={`mailto:${m.mail}`}>{m.mail}</a></p>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', margin: '10px 0' }}>
                            <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" title="LinkedIn">
                                <svg height="24" width="24" viewBox="0 0 24 24" fill="#0077b5" style={{ verticalAlign: 'middle' }}>
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
                                </svg>
                            </a>
                            <a href={m.github.startsWith('http') ? m.github : `https://github.com/${m.github}`} target="_blank" rel="noopener noreferrer" className="icon-btn" title="GitHub">
                                <svg height="24" width="24" viewBox="0 0 24 24" fill="#333" style={{ verticalAlign: 'middle' }}>
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.585 8.199-6.082 8.199-11.385 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default AboutUs;
