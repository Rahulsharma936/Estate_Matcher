import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="logo">
                            <span className="logo-icon">🏠</span>
                            <span className="logo-text">Estate<span className="gradient-text">GPT</span></span>
                        </div>
                        <p>The world's first neural property matching engine, dedicated to finding you a home that matches your soul, not just your budget.</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Platform</h4>
                            <a href="#">AI Matcher</a>
                            <a href="#">Properties</a>
                            <a href="#">Neighborhoods</a>
                        </div>
                        <div className="link-group">
                            <h4>Solutions</h4>
                            <a href="#">For Buyers</a>
                            <a href="#">For Sellers</a>
                            <a href="#">For Investors</a>
                        </div>
                        <div className="link-group">
                            <h4>Company</h4>
                            <a href="#">Our Story</a>
                            <a href="#">Science</a>
                            <a href="#">Privacy</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} EstateGPT Tech. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">TikTok</a>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
                .footer {
                    padding: 80px 0 40px;
                    border-top: 1px solid var(--glass-border);
                    background: var(--bg-darker);
                }

                .footer-top {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 4rem;
                    margin-bottom: 4rem;
                }

                .footer-brand p {
                    margin-top: 1.5rem;
                    color: var(--text-muted);
                    max-width: 320px;
                }

                .footer-links {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }

                .link-group h4 {
                    font-size: 1.1rem;
                    margin-bottom: 1.5rem;
                }

                .link-group a {
                    display: block;
                    color: var(--text-muted);
                    margin-bottom: 0.75rem;
                    font-size: 0.95rem;
                }

                .link-group a:hover {
                    color: var(--primary);
                }

                .footer-bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 2rem;
                    border-top: 1px solid var(--glass-border);
                    color: var(--text-muted);
                    font-size: 0.9rem;
                }

                .social-links {
                    display: flex;
                    gap: 1.5rem;
                }

                .social-links a:hover {
                    color: var(--text-main);
                }

                @media (max-width: 900px) {
                    .footer-top { grid-template-columns: 1fr; }
                    .footer-links { grid-template-columns: repeat(2, 1fr); }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
