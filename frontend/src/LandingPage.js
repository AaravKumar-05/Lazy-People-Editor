import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();
  const phoneRef = useRef();
  const confidenceGlowRef = useRef();
  const viralParticlesRef = useRef();

  useEffect(() => {
    // Floating buttons
    const container = document.getElementById('phoneFloatingButtons');
    if (container && container.childNodes.length === 0) {
      const buttons = [
        'confidence', 'viral score', 'predict', 'optimize', 'trends', 'insights',
        'engagement', 'growth', 'strategy', 'performance', 'analytics', 'algorithm',
        'audience', 'discover', 'monitor', 'track', 'boost', 'breakthrough'
      ];
      for (let i = 0; i < 12; i++) {
        const btn = document.createElement('div');
        btn.className = 'phone-floating-btn';
        btn.textContent = buttons[Math.floor(Math.random() * buttons.length)];
        btn.style.left = Math.random() * 600 + 'px';
        btn.style.top = Math.random() * 400 + 'px';
        btn.style.animationDelay = Math.random() * 6 + 's';
        btn.style.animationDuration = (4 + Math.random() * 3) + 's';
        container.appendChild(btn);
      }
    }
  }, []);

  const handlePhoneClick = () => {
    if (!phoneRef.current) return;
    phoneRef.current.classList.add('posting');
    setTimeout(() => confidenceGlowRef.current.classList.add('active'), 600);
    setTimeout(() => createParticleExplosion(), 800);
    setTimeout(() => {
      phoneRef.current.classList.remove('posting');
      confidenceGlowRef.current.classList.remove('active');
      clearParticles();
      setShowModal(true);
      setShowSignup(true);
    }, 3000);
  };

  function createParticleExplosion() {
    const container = viralParticlesRef.current;
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const angle = (i / 20) * Math.PI * 2;
      const distance = 100 + Math.random() * 100;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      particle.style.setProperty('--x', x + 'px');
      particle.style.setProperty('--y', y + 'px');
      particle.style.animation = 'particleExplosion 1.5s ease-out forwards';
      container.appendChild(particle);
      setTimeout(() => {
        if (particle.parentNode) particle.parentNode.removeChild(particle);
      }, 1500);
    }
  }
  function clearParticles() {
    viralParticlesRef.current.innerHTML = '';
  }

  function handleLogin(e) {
    e.preventDefault();
    setShowModal(false);
    setShowSignup(false);
    navigate('/dashboard');
  }
  function handleSignup(e) {
    e.preventDefault();
    setShowModal(false);
    setShowSignup(false);
    navigate('/dashboard');
  }

  return (
    <div>
      <div className="top-nav">
        <button className="login-btn" onClick={() => { setShowModal(true); setShowSignup(false); }}>log in</button>
        <button className="signup-btn" onClick={() => { setShowModal(true); setShowSignup(true); }}>sign up</button>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="modal active">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowModal(false)}>&times;</button>
            {!showSignup ? (
              <form id="loginForm" onSubmit={handleLogin}>
                <h2>welcome back</h2>
                <p>sign in to continue analyzing your videos</p>
                <div className="form-group">
                  <label>email</label>
                  <input type="email" required placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>password</label>
                  <input type="password" required placeholder="••••••••" />
                </div>
                <button className="auth-button" type="submit">sign in</button>
                <div className="toggle-auth">
                  <span>don't have an account? </span>
                  <button type="button" onClick={() => setShowSignup(true)}>sign up</button>
                </div>
              </form>
            ) : (
              <form id="signupForm" onSubmit={handleSignup}>
                <h2>get started</h2>
                <p>create your account to start analyzing</p>
                <div className="form-group">
                  <label>name</label>
                  <input type="text" required placeholder="your name" />
                </div>
                <div className="form-group">
                  <label>email</label>
                  <input type="email" required placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>password</label>
                  <input type="password" required placeholder="••••••••" />
                </div>
                <button className="auth-button" type="submit">create account</button>
                <div className="toggle-auth">
                  <span>already have an account? </span>
                  <button type="button" onClick={() => setShowSignup(false)}>sign in</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>it's just viralscope.</h1>
          <p className="subtitle">your smart, confident ai built to help you understand what makes content go viral and predict your next breakthrough.</p>
          <div className="phone-container" id="phoneContainer" onClick={handlePhoneClick}>
            <div className="phone-floating-buttons" id="phoneFloatingButtons"></div>
            <div className="phone" id="phone" ref={phoneRef}>
              <div className="phone-screen">
                <div className="app-header">
                  <div className="app-title">TikTok</div>
                  <div className="profile-pic"></div>
                </div>
                <div className="video-preview">📱</div>
                <button className="post-button" id="postButton">POST WITH CONFIDENCE</button>
              </div>
            </div>
            <div className="confidence-glow" id="confidenceGlow" ref={confidenceGlowRef}></div>
            <div className="viral-particles" id="viralParticles" ref={viralParticlesRef}></div>
          </div>
          <button className="cta-button" onClick={() => setShowModal(true)}>start analyzing — it's free</button>
        </div>
      </section>
      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <h2>everything you need to go viral</h2>
          <p className="subtitle">powerful tools designed for confident content creation</p>
          <div className="features-list">
            <div className="feature-item">
              <h3>deep analytics</h3>
              <p>comprehensive metrics that go beyond views and likes to reveal true engagement patterns and viral potential across all platforms.</p>
            </div>
            <div className="feature-item">
              <h3>viral prediction</h3>
              <p>ai-powered algorithms analyze your content before publishing to predict viral probability and suggest key optimizations.</p>
            </div>
            <div className="feature-item">
              <h3>trend tracking</h3>
              <p>stay ahead of emerging trends with real-time monitoring of viral content patterns and audience behavior shifts.</p>
            </div>
            <div className="feature-item">
              <h3>confidence scoring</h3>
              <p>get a confidence score for each piece of content before you post, so you know exactly when to hit publish.</p>
            </div>
            <div className="feature-item">
              <h3>content optimization</h3>
              <p>receive specific recommendations for thumbnails, titles, descriptions, and timing to maximize your viral potential.</p>
            </div>
            <div className="feature-item">
              <h3>competitor analysis</h3>
              <p>understand what makes your competitors' content viral and apply those proven insights to your own strategy.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>ready to post with confidence?</h2>
          <p>join creators who've transformed their content strategy with viralscope</p>
          <div className="cta-buttons">
            <button className="cta-button" onClick={() => setShowModal(true)}>start free trial</button>
            <button className="secondary-button">watch demo</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage; 