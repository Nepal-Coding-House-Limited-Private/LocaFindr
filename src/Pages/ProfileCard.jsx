// src/Pages/ProfilePage.jsx
import React from 'react';
import ProfileCard from './ProfileCard';

const ProfilePage = () => {
  return (
    <ProfileCard
      name="Abhaya Bikram Shahi"
      username="abhaya_dev"
      title="Full Stack Developer"
      bio="Helping people discover local gems with smart tech."
      skills={['React', 'JavaScript', 'CSS']}
      website="https://abhayasolution.com"
      email="abhaya@example.com"
      profileImage="https://avatars.githubusercontent.com/u/000000?v=4" // replace with your real image URL
    />
  );
};

export default ProfilePage;
