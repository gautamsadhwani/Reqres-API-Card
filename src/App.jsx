import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import UserModal from './components/UserModal';

const App = () => {
  const [users, setUsers] = useState([]); // Holds the list of users
  const [modalOpen, setModalOpen] = useState(false); // Tracks if the modal is open
  const [selectedUser, setSelectedUser] = useState(null); // Tracks the user being edited

  // Fetch users from the Reqres API using fetch
  useEffect(() => {
    fetch('https://reqres.in/api/users') // Fetches user data
      .then(response => response.json()) // Converts response to JSON
      .then(data => setUsers(data.data)) // Sets user data in the state
      .catch(error => console.error('Error fetching users:', error)); // Handles errors
  }, []);

  // Function to add a new user to the state
  const addUser = (newUser) => {
    setUsers([...users, newUser]); // Adds the new user to the existing list of users
  };

  // Function to update a user in the state
  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user))); // Replaces the old user with the updated user
  };

  // Opens the modal and selects the user to be edited
  const handleUserClick = (user) => {
    setSelectedUser(user); // Set the user being clicked for editing
    setModalOpen(true); // Open the modal
  };

  // Opens the modal to add a new user
  const handleAddClick = () => {
    setSelectedUser(null); // Set selected user to null for adding a new user
    setModalOpen(true); // Open the modal
  };

  return (
    <div className="App">
      <button onClick={handleAddClick}>Add User</button> {/* Button to open the modal for adding a new user */}
      <Dashboard users={users} onUserClick={handleUserClick} /> {/* Displays the user cards */}
      {modalOpen && (
        <UserModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)} // Closes the modal
          user={selectedUser} // Passes the selected user for editing
          addUser={addUser} // Passes the addUser function to the modal
          updateUser={updateUser} // Passes the updateUser function to the modal
        />
      )}
    </div>
  );
};

export default App;
