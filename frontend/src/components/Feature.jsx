import React from 'react';

const Feature = () => {
    return (
        <section id="ai-matcher" className="section-padding feature-bg">
            <div className="container feature-container">
                <div className="feature-visual">
                    <div className="circle-wrap glass-card">
                        <div className="inner-circle">
                            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" alt="Modern Architecture" />
                        </div>
                    </div>
                </div>

                <div className="feature-content">
                    <span className="badge">AI Match Engine</span>
                    <h2>More than just <span className="gradient-text">Filters</span>. Real Understanding.</h2>
                    <p>Standard real estate sites just show you what matches your numbers. EstateGPT learns what you actually love. Our AI analyzes your reaction to styles, layouts, and neighborhoods to build your "Perfect Home Profile".</p>

                    <div className="feature-list">
                        <div className="feature-item">
                            <div className="check">✓</div>
                            <div>
                                <h4>Style Recognition</h4>
                                <p>We identify your aesthetic preferences across 50+ architectural styles.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="check">✓</div>
                            <div>
                                <h4>Lifestyle Analysis</h4>
                                <p>We factor in your daily habits, commute, and hobbies for location scoring.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="check">✓</div>
                            <div>
                                <h4>Predictive Value</h4>
                                <p>Know the resale value before you buy with 92% accuracy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
                .feature-bg {
                    background: radial-gradient(circle at 100% 50%, rgba(34, 211, 238, 0.05) 0%, transparent 50%);
                }

                .feature-container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
                    align-items: center;
                }

                .feature-visual {
                    position: relative;
                }

                .circle-wrap {
                    width: 100%;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    padding: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .inner-circle {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 2px solid var(--primary);
                }

                .inner-circle img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .feature-content h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1.5rem;
                }

                .feature-content p {
                    color: var(--text-muted);
                    margin-bottom: 2rem;
                }

                .feature-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .feature-item {
                    display: flex;
                    gap: 1.25rem;
                }

                .check {
                    width: 24px;
                    height: 24px;
                    background: var(--primary);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    margin-top: 4px;
                }

                .feature-item h4 {
                    font-size: 1.1rem;
                    margin-bottom: 0.25rem;
                }

                .feature-item p {
                    font-size: 0.9rem;
                    margin: 0;
                }

                @media (max-width: 900px) {
                    .feature-container { grid-template-columns: 1fr; }
                    .feature-visual { order: 2; max-width: 400px; margin: 0 auto; }
                }
            `}</style>
        </section>
    );
};

export default Feature;
