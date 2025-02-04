import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import { useAuth } from '../contexts/AuthContext'

const DashboardPage: React.FC = () => {
  const { logout } = useAuth()
  const userData = JSON.parse(localStorage.getItem('userData') || '{}')

  const profileData = [
    { name: 'Profile Completion', value: 75 },
    { name: 'Engagement', value: 60 },
    { name: 'Activity Level', value: 85 }
  ]

  return (
    <div>
      <h2>User Dashboard</h2>
      <div>
        <h3>User Profile</h3>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
      <BarChart width={400} height={250} data={profileData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default DashboardPage