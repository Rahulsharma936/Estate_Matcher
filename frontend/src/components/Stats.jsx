import React from 'react';

const stats = [
    { label: 'Properties Listed', value: '12,500+' },
    { label: 'AI Matches Found', value: '85k+' },
    { label: 'Happy Homeowners', value: '4,200+' },
    { label: 'Cities Covered', value: '45' }
];

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid glass-card">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="stat-value gradient-text">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx="true">{`
                .stats-section {
                    padding-bottom: 50px;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    padding: 4rem 2rem;
                    text-align: center;
                    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.3);
                }

                .stat-item {
                   position: relative;
                }

                .stat-item:not(:last-child)::after {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 20%;
                    height: 60%;
                    width: 1px;
                    background: var(--glass-border);
                }

                .stat-value {
                    font-size: 3rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }

                .stat-label {
                    color: var(--text-muted);
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                @media (max-width: 768px) {
                    .stats-grid {
                       grid-template-columns: repeat(2, 1fr);
                       gap: 2rem;
                    }
                    .stat-item::after { display: none; }
                }
            `}</style>
        </section>
    );
};

export default Stats;
