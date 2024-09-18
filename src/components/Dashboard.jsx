import React from 'react';
import UserCard from './UserCard';

const Dashboard = ({ users, onUserClick }) => {
  return (
    <div className="dashboard grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onClick={() => onUserClick(user)} />
      ))}
    </div>
  );
};

export default Dashboard;
