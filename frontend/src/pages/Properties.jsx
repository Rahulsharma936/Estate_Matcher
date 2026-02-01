import React, { useState, useEffect } from 'react';
import config from '../config/config';

const Properties = () => {
    const [filter, setFilter] = useState('All');
    const [properties, setProperties] = useState([]);
    const [filteredProps, setFilteredProps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const res = await fetch(`${config.BASE_URL}/properties`);
                const data = await res.json();
                setProperties(data);
                setFilteredProps(data);
            } catch (err) {
                console.error("Error fetching properties:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProperties();
    }, []);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredProps(properties);
        } else {
            setFilteredProps(properties.filter(p => p.type === filter));
        }
    }, [filter, properties]);

    if (loading) return (
        <div className="container section-padding" style={{ textAlign: 'center', paddingTop: '200px' }}>
            <div className="scanner" style={{ width: '60px', height: '60px', margin: '0 auto' }}></div>
            <p style={{ marginTop: '2rem' }}>Loading exclusive listings...</p>
        </div>
    );

    return (
        <div className="properties-page container section-padding">
            <div className="page-header animate-fade-up">
                <span className="badge">Curated Selection</span>
                <h1>Explore <span className="gradient-text">Premium Properties</span></h1>
                <p>Browse our exclusive collection of AI-vetted luxury homes and unique spaces.</p>
            </div>

            <div className="filter-tabs animate-fade-up">
                {['All', 'Modern', 'Industrial', 'Rustic', 'Futuristic', 'Traditional'].map(t => (
                    <button
                        key={t}
                        className={`filter-btn ${filter === t ? 'active' : ''}`}
                        onClick={() => setFilter(t)}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className="properties-grid">
                {filteredProps.map((prop, index) => (
                    <div key={prop.id} className="prop-card glass-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="prop-img" style={{ backgroundImage: `url(${prop.image})` }}>
                            <div className="prop-tag">{prop.type}</div>
                        </div>
                        <div className="prop-content">
                            <div className="prop-price">₹{prop.price}</div>
                            <h3>{prop.title}</h3>
                            <p className="prop-location">📍 {prop.location}</p>
                            <div className="prop-details">
                                <span>🛏️ {prop.beds} Beds</span>
                                <span>🚿 {prop.baths} Baths</span>
                                <span>📏 {prop.sqft} sqft</span>
                            </div>
                            <div className="prop-footer">
                                <button className="btn-outline-sm">View Details</button>
                                <button className="btn-primary-sm">Book Match Tour</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx="true">{`
                .properties-page {
                    padding-top: 150px;
                }

                .page-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .page-header h1 {
                    font-size: 3.5rem;
                    margin-bottom: 1rem;
                }

                .filter-tabs {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 3rem;
                    flex-wrap: wrap;
                }

                .filter-btn {
                    padding: 8px 20px;
                    background: var(--glass);
                    border: 1px solid var(--glass-border);
                    color: var(--text-muted);
                    font-weight: 500;
                    border-radius: 50px;
                    transition: var(--transition);
                }

                .filter-btn:hover, .filter-btn.active {
                    border-color: var(--primary);
                    color: white;
                    background: var(--primary-glow);
                }

                .properties-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 2.5rem;
                }

                .prop-card {
                    overflow: hidden;
                    transition: var(--transition);
                }

                .prop-card:hover {
                    transform: translateY(-10px);
                    border-color: var(--primary);
                }

                .prop-img {
                    height: 240px;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                }

                .prop-tag {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: var(--primary);
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 700;
                }

                .prop-content {
                    padding: 1.5rem;
                }

                .prop-price {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--accent);
                    margin-bottom: 0.5rem;
                }

                .prop-content h3 {
                    font-size: 1.25rem;
                    margin-bottom: 0.5rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .prop-location {
                    color: var(--text-muted);
                    font-size: 0.9rem;
                    margin-bottom: 1.25rem;
                }

                .prop-details {
                    display: flex;
                    justify-content: space-between;
                    padding: 1rem 0;
                    border-top: 1px solid var(--glass-border);
                    border-bottom: 1px solid var(--glass-border);
                    margin-bottom: 1.5rem;
                    font-size: 0.85rem;
                    color: var(--text-muted);
                }

                .prop-footer {
                    display: flex;
                    gap: 1rem;
                }

                .btn-outline-sm {
                    flex: 1;
                    background: transparent;
                    border: 1px solid var(--glass-border);
                    color: var(--text-main);
                    padding: 8px;
                    font-size: 0.85rem;
                    border-radius: 8px;
                    transition: var(--transition);
                }

                .btn-outline-sm:hover {
                    background: var(--glass);
                    border-color: var(--primary);
                }

                .btn-primary-sm {
                   flex: 1.5;
                   padding: 8px;
                   font-size: 0.85rem;
                   background: linear-gradient(135deg, var(--primary), var(--secondary));
                   color: white;
                }

                @media (max-width: 768px) {
                    .page-header h1 { font-size: 2.5rem; }
                    .properties-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default Properties;
