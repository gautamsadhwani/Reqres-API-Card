import React from 'react';

const UserCard = ({ user, onClick }) => {
  return (
    <div
      className="user-card bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105"
      onClick={onClick}
    >
      <img
        className="w-24 h-24 rounded-full mx-auto mb-4"
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
      />
      <h3 className="text-lg font-semibold text-center">{user.first_name} {user.last_name}</h3>
      <p className="text-sm text-gray-500 text-center">{user.email}</p>
    </div>
  );
};

export default UserCard;
