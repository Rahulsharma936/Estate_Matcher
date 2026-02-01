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
                {filteredProps.length > 0 ? (
                    filteredProps.map((prop, index) => (
                        <div key={prop._id} className="prop-card glass-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
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
                                    <button className="btn-outline-sm" onClick={() => alert(`Details for ${prop.title} are loading...`)}>View Details</button>
                                    <button className="btn-primary-sm" onClick={() => alert(`Booking a Match Tour for ${prop.title}...`)}>Book Match Tour</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                        <h3>No luxury properties found matching this criteria.</h3>
                        <p>Try exploring our "All" collection.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Properties;

