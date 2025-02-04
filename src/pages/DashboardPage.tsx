import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DashboardPage: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData') || '{}');
    if (data && data.name) {
      setUserData(data);
    } else {
      setUserData(null);
    }
  }, []);

  const profileData = [
    { name: 'Profile Completion', value: 75 },
    { name: 'Engagement', value: 60 },
    { name: 'Activity Level', value: 85 }
  ];

  return (
    <div className="container dashboard-container">
      <h2>User Dashboard</h2>
      {userData ? (
        <div className="profile-section">
          <div className="profile-card">
            <h3>User Profile</h3>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
          </div>
        </div>
      ) : (
        <p>No user data available</p>
      )}
      
      <div className="chart-section">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={profileData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3498db" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardPage;
