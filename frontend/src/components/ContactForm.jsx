import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        budget: '',
        location: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', msg: '' });

        try {
            // Updated to use the backend endpoint for inquiries
            const response = await fetch('http://localhost:5000/api/inquiries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ type: 'success', msg: 'Match Profile Created! We will send you tailored results soon.' });
                setFormData({
                    name: '',
                    email: '',
                    budget: '',
                    location: '',
                    message: ''
                });
            } else {
                setStatus({ type: 'error', msg: 'Something went wrong. Please try again.' });
            }
        } catch (err) {
            setStatus({ type: 'error', msg: 'Failed to connect to our neural servers.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="section-padding">
            <div className="container contact-container">
                <div className="contact-info">
                    <h2 className="animate-fade-up">Ready to find your <span className="gradient-text">Forever Home?</span></h2>
                    <p className="animate-fade-up">Register for early access to our AI Matching Engine. Our consultants will help you refine your profile for the best results.</p>

                    <div className="contact-details animate-fade-up">
                        <div className="detail-item">
                            <span className="icon">📍</span>
                            <div>
                                <h4>Visit Our Studio</h4>
                                <p>Skyline Plaza, Suite 402, New York, NY</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <span className="icon">📧</span>
                            <div>
                                <h4>Contact Support</h4>
                                <p>concierge@estategpt.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper glass-card animate-fade-up">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Projected Budget</label>
                            <input
                                type="text"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                placeholder="e.g. ₹5Cr - ₹10Cr"
                            />
                        </div>
                        <div className="form-group">
                            <label>Preferred Location</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="e.g. Miami, FL"
                            />
                        </div>
                        <div className="form-group">
                            <label>Additional Requirements</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="3"
                                placeholder="Tell us about your must-haves (e.g. pool, backyard, home office)..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-primary w-full" disabled={loading}>
                            {loading ? 'Processing...' : 'Create My Match Profile'}
                        </button>

                        {status.msg && (
                            <div className={`status-msg ${status.type}`}>
                                {status.msg}
                            </div>
                        )}
                    </form>
                </div>
            </div>

            <style jsx="true">{`
                .contact-container {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 4rem;
                    align-items: center;
                }

                .contact-info h2 {
                    font-size: 3rem;
                    margin-bottom: 1.5rem;
                }

                .contact-info p {
                    color: var(--text-muted);
                    font-size: 1.15rem;
                    margin-bottom: 3rem;
                }

                .contact-details {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .detail-item {
                    display: flex;
                    gap: 1.5rem;
                }

                .detail-item .icon {
                    width: 50px;
                    height: 50px;
                    background: var(--glass);
                    border: 1px solid var(--glass-border);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                }

                .detail-item h4 {
                    font-size: 1.1rem;
                    margin-bottom: 0.25rem;
                }

                .detail-item p {
                    font-size: 0.95rem;
                    margin: 0;
                }

                .contact-form-wrapper {
                    padding: 3rem;
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                label {
                    display: block;
                    font-size: 0.9rem;
                    font-weight: 500;
                    margin-bottom: 0.5rem;
                    color: var(--text-muted);
                }

                input, select, textarea {
                    width: 100%;
                    padding: 12px 16px;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid var(--glass-border);
                    border-radius: 8px;
                    color: var(--text-main);
                    font-family: inherit;
                    font-size: 1rem;
                    transition: var(--transition);
                }

                input:focus, select:focus, textarea:focus {
                    outline: none;
                    border-color: var(--primary);
                    background: rgba(255,255,255,0.08);
                }

                .w-full {
                    width: 100%;
                }

                .status-msg {
                    margin-top: 1.5rem;
                    padding: 1rem;
                    border-radius: 8px;
                    text-align: center;
                    font-weight: 500;
                }

                .status-msg.success {
                    background: rgba(34, 197, 94, 0.1);
                    color: #4ade80;
                    border: 1px solid rgba(34, 197, 94, 0.2);
                }

                .status-msg.error {
                    background: rgba(239, 68, 68, 0.1);
                    color: #f87171;
                    border: 1px solid rgba(239, 68, 68, 0.2);
                }

                @media (max-width: 900px) {
                    .contact-container {
                        grid-template-columns: 1fr;
                    }
                    .contact-info {
                        text-align: center;
                    }
                    .contact-details {
                        align-items: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default ContactForm;
