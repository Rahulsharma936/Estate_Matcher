import React, { useState } from 'react';
import config from '../config/config';

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
            const res = await fetch(`${config.BASE_URL}/properties/match`, {
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
        </div>
    );
};

export default AIMatcher;
