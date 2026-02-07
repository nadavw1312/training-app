import React, { useState } from 'react';

interface UserProfile {
  name: string;
  email: string;
  bio: string;
  avatar: string;
  joinDate: string;
  level: string;
  points: number;
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Passionate learner focused on web development and modern JavaScript frameworks.',
    avatar: 'https://via.placeholder.com/150',
    joinDate: 'January 2024',
    level: 'Intermediate',
    points: 1250,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const handleChange = (field: keyof UserProfile, value: string) => {
    setEditedProfile(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <h1>My Profile</h1>
        <div className="profile-actions">
          {isEditing ? (
            <>
              <button className="btn" onClick={handleSave}>Save Changes</button>
              <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <button className="btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
          )}
        </div>
      </div>

      <div className="profile-content">
        <div className="card profile-card">
          <div className="profile-avatar-section">
            <img 
              src={profile.avatar} 
              alt={profile.name} 
              className="profile-avatar"
            />
            <div className="profile-stats">
              <div className="stat">
                <h3>Level</h3>
                <p className="stat-value">{profile.level}</p>
              </div>
              <div className="stat">
                <h3>Points</h3>
                <p className="stat-value">{profile.points}</p>
              </div>
              <div className="stat">
                <h3>Member Since</h3>
                <p className="stat-value">{profile.joinDate}</p>
              </div>
            </div>
          </div>

          <div className="profile-details">
            {isEditing ? (
              <>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={editedProfile.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={editedProfile.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    id="bio"
                    value={editedProfile.bio}
                    onChange={(e) => handleChange('bio', e.target.value)}
                    rows={4}
                  />
                </div>
              </>
            ) : (
              <>
                <h2>{profile.name}</h2>
                <p className="profile-email">{profile.email}</p>
                <div className="profile-bio">
                  <h3>About Me</h3>
                  <p>{profile.bio}</p>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="card achievements-card">
          <h2>Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement">
              <div className="achievement-icon">🏆</div>
              <h3>Quick Learner</h3>
              <p>Complete 5 courses in one month</p>
            </div>
            <div className="achievement">
              <div className="achievement-icon">⭐</div>
              <h3>Consistent Student</h3>
              <p>Maintain a 7-day learning streak</p>
            </div>
            <div className="achievement">
              <div className="achievement-icon">🎯</div>
              <h3>Quiz Master</h3>
              <p>Score 100% on 10 quizzes</p>
            </div>
            <div className="achievement">
              <div className="achievement-icon">💬</div>
              <h3>Community Helper</h3>
              <p>Answer 50 forum questions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;