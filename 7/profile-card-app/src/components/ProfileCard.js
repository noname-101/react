import React, { useState } from 'react';

const ProfileCard = ({ name, bio, profilePicture }) => {
  // State for dynamic background color (Lab Requirement)
  const [bgColor, setBgColor] = useState('#f0f0f0');

  return (
    <div 
      className="profile-card" 
      style={{ backgroundColor: bgColor }} 
      onMouseEnter={() => setBgColor('#d1c4e9')} 
      onMouseLeave={() => setBgColor('#f0f0f0')}
    >
      <img 
        src={profilePicture} 
        alt="Profile" 
        className="profile-picture" 
      />
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-bio">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;