import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-grid">
        <div className="card">
          <h2>Welcome to Your Training Dashboard</h2>
          <p>Track your progress, view upcoming courses, and continue your learning journey.</p>
        </div>
        
        <div className="card">
          <h2>Progress Overview</h2>
          <div className="progress-stats">
            <div className="stat">
              <h3>Courses Enrolled</h3>
              <p className="stat-value">5</p>
            </div>
            <div className="stat">
              <h3>Lessons Completed</h3>
              <p className="stat-value">23</p>
            </div>
            <div className="stat">
              <h3>Current Streak</h3>
              <p className="stat-value">7 days</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h2>Recent Activity</h2>
          <ul className="activity-list">
            <li>Completed "React Fundamentals" lesson</li>
            <li>Started "Advanced TypeScript" course</li>
            <li>Earned "Quick Learner" badge</li>
            <li>Joined "Web Development" study group</li>
          </ul>
        </div>
        
        <div className="card">
          <h2>Continue Learning</h2>
          <div className="course-preview">
            <h3>React Hooks Deep Dive</h3>
            <p>Continue from Lesson 4: Custom Hooks</p>
            <button className="btn">Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;