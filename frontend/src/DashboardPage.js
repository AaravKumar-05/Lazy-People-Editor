import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css';

function DashboardPage() {
  const navigate = useNavigate();
  return (
    <div className="dashboard active">
      <div className="dashboard-header">
        <div className="dashboard-nav">
          <div className="dashboard-title">your video analyses</div>
          <button className="new-analysis-btn" onClick={() => navigate('/analysis')}>+ new analysis</button>
          <button className="login-btn" style={{ marginLeft: 'auto' }} onClick={() => navigate('/')}>logout</button>
        </div>
      </div>
      <div className="dashboard-content">
        <div className="submissions-grid">
          <div className="submission-card" onClick={() => navigate('/analysis/1')} style={{ cursor: 'pointer' }}>
            <div className="submission-thumbnail">🎮</div>
            <div className="submission-info">
              <h3>minecraft_inventory_meme.mp4</h3>
              <p>analyzed 2 days ago</p>
              <p>silent / text-only meme</p>
              <span className="viral-score">3/10 viral score</span>
            </div>
          </div>
          <div className="submission-card" onClick={() => navigate('/analysis/2')} style={{ cursor: 'pointer' }}>
            <div className="submission-thumbnail">🎬</div>
            <div className="submission-info">
              <h3>cooking_tutorial_short.mp4</h3>
              <p>analyzed 1 week ago</p>
              <p>educational content</p>
              <span className="viral-score">7/10 viral score</span>
            </div>
          </div>
          <div className="submission-card" onClick={() => navigate('/analysis/3')} style={{ cursor: 'pointer' }}>
            <div className="submission-thumbnail">😂</div>
            <div className="submission-info">
              <h3>cat_reaction_video.mp4</h3>
              <p>analyzed 2 weeks ago</p>
              <p>comedy / reaction</p>
              <span className="viral-score">6/10 viral score</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage; 