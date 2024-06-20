"use client"

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/store';
// import '../../styles/profile.scss';

const ProfilePage: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Render nothing while redirecting
  }

  return (
    <div className="profile-container">
      <h1>Welcome to your profile!</h1>
    </div>
  );
};

export default ProfilePage;