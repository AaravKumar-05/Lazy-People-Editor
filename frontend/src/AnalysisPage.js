import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AnalysisPage.css';

function AnalysisPage() {
  const [showResults, setShowResults] = useState(false);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  function handleUpload(e) {
    e.preventDefault();
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setShowResults(true);
    }, 3000);
  }

  return (
    <div className="analysis-page active">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/dashboard')}>← back to dashboard</button>
      </div>
      <div className="upload-section">
        <h2>analyze your content</h2>
        <p className="subtitle">upload your video and discover its viral potential</p>
        <div className="upload-zone">
          <div className="upload-icon">📹</div>
          <h3>drop your video here</h3>
          <p>or click to browse files • supports mp4, mov, avi</p>
          <button className="upload-btn" onClick={handleUpload} disabled={uploading}>{uploading ? 'analyzing your video...' : 'choose file'}</button>
          <input type="file" accept="video/*" style={{ display: 'none' }} />
        </div>
        <div className="upload-features">
          <div className="upload-feature">
            <span className="upload-feature-icon">⚡</span>
            <h4>instant analysis</h4>
            <p>get results in under 30 seconds</p>
          </div>
          <div className="upload-feature">
            <span className="upload-feature-icon">🎯</span>
            <h4>precise scoring</h4>
            <p>ai-powered viral prediction</p>
          </div>
          <div className="upload-feature">
            <span className="upload-feature-icon">💡</span>
            <h4>actionable insights</h4>
            <p>specific improvements for your content</p>
          </div>
        </div>
      </div>
      {showResults && (
        <div className="analysis-results active">
          <div className="results-header">
            <div className="score-display">
              <div className="score-label">viral potential score</div>
              <div className="score-number">3/10</div>
            </div>
            <div className="category-info">
              <h4>chosen category: silent / text-only meme</h4>
              <p>No voice track is present, and every frame shows raw Minecraft gameplay with a bold yellow text overlay at the top. The content relies entirely on the visuals plus whatever that on-screen caption says.</p>
            </div>
          </div>
          <div className="analysis-section">
            <h3><span className="section-icon">🎣</span>hook evaluation (0-5s)</h3>
            <div className="metric-grid">
              <div className="metric-item">
                <div className="metric-value">weak</div>
                <div className="metric-label">attention grab</div>
              </div>
              <div className="metric-item">
                <div className="metric-value">0.3s</div>
                <div className="metric-label">optimal hook time</div>
              </div>
            </div>
            <p><strong>Current Issue:</strong> A dim close-up of a Minecraft face appears for almost a second before anything happens. No motion, no bold headline that fills the screen.</p>
            <p><strong>Recommendation:</strong> Flash the full joke or stakes in the first 0.3s (e.g., giant text "WHEN YOUR FRIEND SAYS HE 'SORTED' THE CHESTS"), followed by a quick, high-contrast cut to the corridor for visual payoff.</p>
          </div>
          <div className="analysis-section">
            <h3><span className="section-icon">🎬</span>visuals / pacing / editing</h3>
            <p><strong>Pacing Analysis:</strong> Slow - many shots under 1 second, but they're static inventory screens or walking.</p>
            <p><strong>Stand-out Moment:</strong> 8.9s skeleton-spawner inventory could be comedic if the text references spawning chaos, but there's no zoom-in, highlight, or emoji to push the joke.</p>
            <p><strong>Overall Style:</strong> Raw screen recording. No jump zooms, no arrows, no on-screen sound-effect text, so it feels more like a Let's-Play clip than a meme.</p>
          </div>
          <div className="analysis-section">
            <h3><span className="section-icon">📊</span>engagement potential</h3>
            <div className="metric-grid">
              <div className="metric-item">
                <div className="metric-value">2/10</div>
                <div className="metric-label">save potential</div>
              </div>
              <div className="metric-item">
                <div className="metric-value">4/10</div>
                <div className="metric-label">share potential</div>
              </div>
              <div className="metric-item">
                <div className="metric-value">2/10</div>
                <div className="metric-label">comment potential</div>
              </div>
            </div>
            <p><strong>Save:</strong> Low—no tutorial or tip value.</p>
            <p><strong>Share:</strong> Low-moderate only if the unseen caption is extremely funny/relatable to Minecraft fans.</p>
            <p><strong>Comment:</strong> Low—little controversy or prompt for conversation.</p>
          </div>
          <div className="analysis-section">
            <h3><span className="section-icon">💡</span>three actionable improvements</h3>
            <ul className="improvements-list">
              <li><strong>Front-load the joke:</strong> Freeze-frame the very first frame with a full-screen caption and big emoji for 0.4s, then smash-cut into the action.</li>
              <li><strong>Add visual comedy beats:</strong> Add rapid punch-in zooms, red circles, or shaky-cam effects on every "important" inventory item (think TikTok "slam zooms").</li>
              <li><strong>Layer sonic cues:</strong> Add simple but loud text-to-speech VO or meme SFX ("Bruh", "Explosion") to give sonic cues that amplify the punchline and keep retention high.</li>
            </ul>
          </div>
          <div className="analysis-section">
            <h3><span className="section-icon">🎯</span>audience appeal analysis</h3>
            <div className="metric-grid">
              <div className="metric-item">
                <div className="metric-value">4/10</div>
                <div className="metric-label">discovery potential</div>
              </div>
              <div className="metric-item">
                <div className="metric-value">5/10</div>
                <div className="metric-label">retention value</div>
              </div>
            </div>
            <p><strong>Discovery Potential:</strong> Generic Minecraft footage without context won't hook people who don't already know the creator or the inside joke.</p>
            <p><strong>Follower Retention Value:</strong> Existing fans who like any upload might watch, but nothing here deepens community.</p>
            <p><strong>Recommended Strategy:</strong> Needs Optimization – Low discovery and only moderate follower value; requires stronger hook, clearer premise, or higher entertainment value.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnalysisPage; 