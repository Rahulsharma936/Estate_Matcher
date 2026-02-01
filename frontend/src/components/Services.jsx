import React from 'react';

const services = [
    {
        icon: '🎯',
        title: 'Neural Preference Match',
        desc: 'Our AI understands your lifestyle needs, from commute times to architectural styles, finding homes that truly fit.'
    },
    {
        icon: '📈',
        title: 'Market Predictor',
        desc: 'Advanced algorithms that forecast future property values and neighborhood growth trends for smarter investments.'
    },
    {
        icon: '📸',
        title: 'Virtual AI Tours',
        desc: 'Experience properties through AI-enhanced 3D walkthroughs that can even simulate your own furniture in the space.'
    },
    {
        icon: '📑',
        title: 'Smart Document Audit',
        desc: 'Automated analysis of legal papers, title deeds, and tax history to ensure a risk-free property acquisition.'
    },
    {
        icon: '🏢',
        title: 'Neighborhood Insights',
        desc: 'Deep data on local schools, safety, amenities, and future development projects powered by real-time AI analysis.'
    },
    {
        icon: '💡',
        title: 'Energy Efficiency AI',
        desc: 'Calculate potential utility costs and solar possibilities for any property before you even book a viewing.'
    }
];

const Services = () => {
    return (
        <section id="services" className="section-padding">
            <div className="container">
                <div className="section-header">
                    <h2>AI-Powered <span className="gradient-text">Property Tech</span></h2>
                    <p>Revolutionizing how you find, evaluate, and buy your next home.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card glass-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <a href="#" className="service-link">Learn More →</a>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx="true">{`
                .section-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                h2 {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }

                .section-header p {
                    color: var(--text-muted);
                    font-size: 1.1rem;
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }

                .service-card {
                    padding: 2.5rem;
                    transition: var(--transition);
                }

                .service-card:hover {
                    transform: translateY(-10px);
                    background: rgba(255,255,255,0.06);
                    border-color: var(--primary);
                }

                .service-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1.5rem;
                }

                h3 {
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                }

                .service-card p {
                    color: var(--text-muted);
                    font-size: 0.95rem;
                    margin-bottom: 1.5rem;
                    line-height: 1.7;
                }

                .service-link {
                    color: var(--accent);
                    font-weight: 600;
                    font-size: 0.9rem;
                }

                @media (max-width: 1024px) {
                    .services-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 640px) {
                    .services-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    );
};

export default Services;
