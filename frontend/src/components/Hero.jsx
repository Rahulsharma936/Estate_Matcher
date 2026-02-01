import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>

            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content animate-fade-up">
                        <span className="badge">AI-Powered Real Estate</span>
                        <h1>Find Your <span className="gradient-text">Dream Home</span> <br /> In Seconds, Not Days</h1>
                        <p>Our advanced neural matching engine analyzes thousands of listings and your personal preferences to find the perfect property match instantly.</p>
                        <div className="hero-btns">
                            <Link to="/ai-matcher" className="btn-primary">Start AI Matcher</Link>
                            <Link to="/properties" className="btn-outline">Browse Listings</Link>
                        </div>
                    </div>

                    <div className="hero-visual animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        <div className="visual-card glass-card">
                            <div className="property-preview">
                                <div className="listing-tag">Top Match: 98%</div>
                                <div className="listing-img-placeholder" style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                    <div className="img-overlay"></div>
                                </div>
                                <div className="listing-info">
                                    <div className="price">₹8,50,00,000</div>
                                    <div className="address">Modern Villa, Alibaug</div>
                                    <div className="details">
                                        <span>🛏️ 4 Beds</span>
                                        <span>🚿 3 Baths</span>
                                        <span>📏 2,400 sqft</span>
                                    </div>
                                    <div className="ai-analysis">
                                        <div className="analysis-title">AI Why-Match Analysis</div>
                                        <div className="analysis-progress">
                                            <div className="progress-bar" style={{ width: '98%' }}></div>
                                        </div>
                                        <p>Perfect for your preference for "Minimalist Architecture" and "South-facing light".</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
                .hero-section {
                    position: relative;
                    padding: 180px 0 100px;
                    overflow: hidden;
                }

                .hero-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }

                .blob-1 {
                    top: -10%;
                    left: -10%;
                    background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
                }

                .blob-2 {
                    bottom: 0%;
                    right: -10%;
                    background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%);
                }

                .badge {
                    display: inline-block;
                    padding: 6px 16px;
                    background: var(--glass);
                    border: 1px solid var(--glass-border);
                    border-radius: 100px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--accent);
                    margin-bottom: 2rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                h1 {
                    font-size: 4rem;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    text-align: left;
                }

                p {
                    font-size: 1.25rem;
                    color: var(--text-muted);
                    margin-bottom: 2.5rem;
                    max-width: 600px;
                    text-align: left;
                }

                .hero-btns {
                    display: flex;
                    gap: 1.5rem;
                    margin-bottom: 4rem;
                }

                .visual-card {
                    padding: 1.5rem;
                    position: relative;
                    box-shadow: 0 40px 80px -20px rgba(0,0,0,0.5);
                    border-radius: 24px;
                }

                .property-preview {
                    position: relative;
                }

                .listing-tag {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: var(--primary);
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    z-index: 2;
                }

                .listing-img-placeholder {
                    width: 100%;
                    height: 200px;
                    background: linear-gradient(135deg, #1e293b, #334155);
                    border-radius: 12px;
                    margin-bottom: 1.5rem;
                    position: relative;
                    overflow: hidden;
                }

                .img-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.5));
                }

                .listing-info .price {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--accent);
                    margin-bottom: 0.2rem;
                }

                .listing-info .address {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                .details {
                    display: flex;
                    gap: 1.5rem;
                    font-size: 0.9rem;
                    color: var(--text-muted);
                    margin-bottom: 1.5rem;
                    padding-bottom: 1.5rem;
                    border-bottom: 1px solid var(--glass-border);
                }

                .ai-analysis .analysis-title {
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: var(--primary);
                    margin-bottom: 0.5rem;
                }

                .analysis-progress {
                    height: 6px;
                    background: var(--glass);
                    border-radius: 10px;
                    margin-bottom: 1rem;
                    overflow: hidden;
                }

                .progress-bar {
                    height: 100%;
                    background: linear-gradient(90deg, var(--primary), var(--accent));
                }

                .ai-analysis p {
                    font-size: 0.85rem;
                    line-height: 1.4;
                    margin: 0;
                }

                @media (max-width: 992px) {
                    .hero-grid { grid-template-columns: 1fr; text-align: center; }
                    h1, p { text-align: center; margin-left: auto; margin-right: auto; }
                    .hero-btns { justify-content: center; }
                }

                @media (max-width: 768px) {
                    h1 { font-size: 3rem; }
                    .hero-section { padding-top: 140px; }
                }
            `}</style>
        </section>
    );
};

export default Hero;

