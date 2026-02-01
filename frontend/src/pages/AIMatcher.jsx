import React, { useState } from 'react';

const steps = [
    {
        id: 1,
        title: "The Vibe",
        question: "What architectural style speaks to your soul?",
        options: ["Modern Minimalist", "Classic Traditional", "Industrial Loft", "Rustic Retreat", "Futuristic Sci-Fi"]
    },
    {
        id: 2,
        title: "The Lifestyle",
        question: "What is your primary focus for this home?",
        options: ["Remote Work Sanctuary", "Entertainment Hub", "Growing Family Space", "Solitude & Peace", "City Center Lifestyle"]
    },
    {
        id: 3,
        title: "The Environment",
        question: "Where do you belong?",
        options: ["Oceanfront / Coastal", "Mountain High", "Urban Jungle", "Quiet Suburbia", "Digital Nomad Hub"]
    },
    {
        id: 4,
        title: "The Budget",
        question: "What's the investment range?",
        options: ["₹1Cr - ₹3Cr", "₹3Cr - ₹10Cr", "₹10Cr - ₹30Cr", "₹30Cr+", "Ultimate High-End"]
    }
];

const AIMatcher = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isMatching, setIsMatching] = useState(false);
    const [matchResult, setMatchResult] = useState(null);

    const handleAnswer = (answer) => {
        const nextAnswers = { ...answers, [steps[currentStep].id]: answer };
        setAnswers(nextAnswers);

        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            startMatching(nextAnswers);
        }
    };

    const startMatching = async (finalAnswers) => {
        setIsMatching(true);
        try {
            const res = await fetch('http://localhost:5000/api/properties/match', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    style: finalAnswers[1],
                    focus: finalAnswers[2],
                    location: finalAnswers[3],
                    budget: finalAnswers[4]
                })
            });
            const data = await res.json();

            // Artificial delay for effect
            setTimeout(() => {
                setIsMatching(false);
                if (data.length > 0) {
                    const match = data[0];
                    setMatchResult({
                        propertyName: match.title,
                        matchScore: 95 + Math.floor(Math.random() * 5),
                        image: match.image,
                        description: `Based on your love for ${finalAnswers[1]} design and your focus on ${finalAnswers[2]}, this property in ${match.location} is your top neural match.`,
                        features: match.tags || ["Smart Home", "Neural Network Integration", "Biometric Security"]
                    });
                } else {
                    // Fallback if no specific match found
                    setMatchResult({
                        propertyName: "The Future Oasis",
                        matchScore: 92,
                        image: "https://images.unsplash.com/photo-1628744876350-df93605658e8?auto=format&fit=crop&q=80&w=800",
                        description: "We couldn't find a direct match for your hyper-specific criteria, but this Oasis best aligns with your general aesthetic.",
                        features: ["Private Garden", "Floor-to-Ceiling Glass", "AI Climate Control"]
                    });
                }
            }, 2500);
        } catch (err) {
            console.error(err);
            setIsMatching(false);
        }
    };

    return (
        <div className="matcher-page container section-padding">
            <div className="matcher-container glass-card animate-fade-up">
                {!isMatching && !matchResult ? (
                    <div className="quiz-section">
                        <div className="progress-bar-container">
                            <div className="progress-fill" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}></div>
                        </div>
                        <span className="step-count">Step {currentStep + 1} of {steps.length}</span>
                        <h2>{steps[currentStep].question}</h2>

                        <div className="options-grid">
                            {steps[currentStep].options.map(option => (
                                <button
                                    key={option}
                                    className="option-card glass-card"
                                    onClick={() => handleAnswer(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>

                        {currentStep > 0 && (
                            <button className="back-btn" onClick={() => setCurrentStep(currentStep - 1)}>← Go Back</button>
                        )}
                    </div>
                ) : isMatching ? (
                    <div className="loading-section">
                        <div className="scanner"></div>
                        <div className="ai-status">
                            <div className="pulse-dot"></div>
                            <span>Analyzing your neural preferences...</span>
                        </div>
                        <p className="loading-text">Matching your profile with 12,500+ premium listings...</p>
                    </div>
                ) : (
                    <div className="result-section animate-fade-up">
                        <div className="result-header">
                            <span className="match-badge">98% Match Identified</span>
                            <h2>Your Perfect <span className="gradient-text">Neural Match</span></h2>
                        </div>

                        <div className="result-body">
                            <div className="result-img" style={{ backgroundImage: `url(${matchResult.image})` }}></div>
                            <div className="result-content">
                                <h3>{matchResult.propertyName}</h3>
                                <p>{matchResult.description}</p>

                                <div className="features-list">
                                    {matchResult.features.map(f => (
                                        <div key={f} className="feature-pill">✓ {f}</div>
                                    ))}
                                </div>

                                <div className="result-actions">
                                    <button className="btn-primary">Claim Exclusive Viewing</button>
                                    <button className="btn-outline" onClick={() => { setMatchResult(null); setCurrentStep(0); setAnswers({}); }}>Restart Matcher</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style jsx="true">{`
                .matcher-page {
                    padding-top: 150px;
                    max-width: 900px !important;
                }

                .matcher-container {
                    padding: 4rem;
                    min-height: 500px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .progress-bar-container {
                    height: 4px;
                    background: var(--glass);
                    border-radius: 10px;
                    margin-bottom: 2rem;
                    overflow: hidden;
                }

                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, var(--primary), var(--accent));
                    transition: width 0.5s ease;
                }

                .step-count {
                    color: var(--primary);
                    font-weight: 700;
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    letter-spacing: 1px;
                    display: block;
                    margin-bottom: 1rem;
                }

                h2 {
                    font-size: 2.2rem;
                    margin-bottom: 3rem;
                }

                .options-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .option-card {
                    padding: 1.5rem;
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: var(--text-main);
                    text-align: center;
                    cursor: pointer;
                    transition: var(--transition);
                }

                .option-card:hover {
                    border-color: var(--primary);
                    background: var(--primary-glow);
                    transform: scale(1.02);
                }

                .back-btn {
                    margin-top: 2rem;
                    background: transparent;
                    color: var(--text-muted);
                    font-size: 0.9rem;
                    font-weight: 600;
                    cursor: pointer;
                }

                /* Loading State */
                .loading-section {
                    text-align: center;
                }

                .scanner {
                    width: 100px;
                    height: 100px;
                    border: 4px solid var(--primary);
                    border-radius: 50%;
                    margin: 0 auto 3rem;
                    position: relative;
                    border-top-color: transparent;
                    animation: spin 1.5s linear infinite;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                .ai-status {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    margin-bottom: 1rem;
                }

                .pulse-dot {
                    width: 8px;
                    height: 8px;
                    background: #22c55e;
                    border-radius: 50%;
                    animation: glow 1s infinite alternate;
                }

                @keyframes glow {
                    from { transform: scale(1); opacity: 0.5; }
                    to { transform: scale(1.5); opacity: 1; }
                }

                .loading-text {
                    color: var(--text-muted);
                }

                /* Result Page */
                .match-badge {
                    background: rgba(34, 197, 94, 0.1);
                    color: #4ade80;
                    padding: 6px 16px;
                    border-radius: 100px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    display: inline-block;
                    margin-bottom: 1rem;
                }

                .result-body {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 3rem;
                    margin-top: 2rem;
                    align-items: start;
                }

                .result-img {
                    height: 350px;
                    background-size: cover;
                    background-position: center;
                    border-radius: 20px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
                }

                .result-content h3 {
                    font-size: 1.8rem;
                    margin-bottom: 1rem;
                }

                .features-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem;
                    margin: 2rem 0;
                }

                .feature-pill {
                    background: var(--glass);
                    padding: 6px 12px;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    border: 1px solid var(--glass-border);
                }

                .result-actions {
                    display: flex;
                    gap: 1rem;
                }

                @media (max-width: 768px) {
                    .options-grid { grid-template-columns: 1fr; }
                    .result-body { grid-template-columns: 1fr; }
                    .matcher-container { padding: 2rem; }
                }
            `}</style>
        </div>
    );
};

export default AIMatcher;
