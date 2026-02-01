import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="logo">
                    <span className="logo-icon">🏠</span>
                    <span className="logo-text">Estate<span className="gradient-text">Matcher</span></span>
                </Link>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/properties">Properties</Link></li>
                    <li><Link to="/ai-matcher">AI Matcher</Link></li>
                    <li>{isHome ? <a href="#contact" className="btn-primary-sm">Register</a> : <Link to="/#contact" className="btn-primary-sm">Register</Link>}</li>
                </ul>
            </div>

            <style jsx="true">{`
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    padding: 1.5rem 0;
                    z-index: 1000;
                    transition: var(--transition);
                }

                .navbar-scrolled {
                    padding: 1rem 0;
                    background: rgba(15, 23, 42, 0.8);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid var(--glass-border);
                }

                .nav-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 1.5rem;
                    font-weight: 700;
                    font-family: 'Outfit', sans-serif;
                }

                .logo-icon {
                    color: var(--primary);
                    font-size: 1.8rem;
                }

                .nav-links {
                    display: flex;
                    align-items: center;
                    gap: 2.5rem;
                }

                .nav-links a {
                    font-size: 0.95rem;
                    font-weight: 500;
                    color: var(--text-muted);
                    transition: var(--transition);
                }

                .nav-links a:hover {
                    color: var(--primary);
                }

                .btn-primary-sm {
                   background: linear-gradient(135deg, var(--primary), var(--secondary));
                   padding: 8px 20px;
                   border-radius: 8px;
                   color: white !important;
                   box-shadow: 0 4px 10px var(--primary-glow);
                }

                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;

