import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <ProfileCard 
        name="VTU Circle" 
        bio="Providing all required VTU notes, syllabus, and papers for BE students." 
        profilePicture="https://picsum.photos/400" 
      />
    </div>
  );
}