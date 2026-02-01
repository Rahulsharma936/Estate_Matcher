import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import AIMatcher from './pages/AIMatcher';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/ai-matcher" element={<AIMatcher />} />
          </Routes>
        </main>
        <Footer />

        {/* Floating Chat Demo Button */}
        <div className="chat-demo-btn glass-card" onClick={() => window.location.href = '/ai-matcher'}>
          <span className="pulse"></span>
          <span className="icon">🤖</span>
          <span className="text">Match Me</span>
        </div>

        <style jsx="true">{`
        .chat-demo-btn {
           position: fixed;
           bottom: 30px;
           right: 30px;
           padding: 12px 24px;
           border-radius: 50px;
           display: flex;
           align-items: center;
           gap: 10px;
           cursor: pointer;
           z-index: 999;
           transition: var(--transition);
        }

        .chat-demo-btn:hover {
           transform: scale(1.05);
           border-color: var(--primary);
        }

        .pulse {
           width: 10px;
           height: 10px;
           background: #22c55e;
           border-radius: 50%;
           box-shadow: 0 0 0 rgba(34, 197, 94, 0.4);
           animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }

        .chat-demo-btn .text {
           font-weight: 600;
           font-size: 0.9rem;
        }

        @media (max-width: 600px) {
           .chat-demo-btn .text { display: none; }
           .chat-demo-btn { padding: 15px; border-radius: 50%; }
        }
      `}</style>
      </div>
    </Router>
  );
}

export default App;
