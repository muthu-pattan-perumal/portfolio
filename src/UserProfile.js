import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const UserProfile = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newUserVisible, setNewUserVisible] = useState(false);

  // Fetch user data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5001/data');
      
      // Convert the object into an array of users
      const usersWithIds = response.data 
        ? Object.values(response.data).map((user) => ({
            ...user,
            id: user.id || uuidv4(),
          }))
        : []; // Default to an empty array if data is null

      setUsers(usersWithIds);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Use effect to fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Method to handle form submission for creating a new user
  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const newUser = { name, email, id: uuidv4() }; // Generate a new ID
      await axios.post('http://127.0.0.1:5001/data', newUser);
      setUsers([...users, newUser]); // Update local state
      setName('');
      setEmail('');
      alert('User Created Successfully');
      setNewUserVisible(false); // Hide form after adding
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  // Method to handle form submission for editing a user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:5001/data/${editingUser.id}`, { name, email });
      alert(`User Updated:\nName: ${name}\nEmail: ${email}`);
      setEditingUser(null); // Exit editing mode
      fetchData(); // Fetch updated data
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  // Function to set the user to be edited
  const startEditing = (user) => {
    setEditingUser(user);
    setName(user.name);
    setEmail(user.email);
  };

  return (
    <div>
      <h1>User Profiles</h1>
      <h2>Total Users: {users.length}</h2> {/* Display total users */}
      
      {/* Button to show/hide new user form */}
      <button onClick={() => setNewUserVisible(!newUserVisible)}>
        {newUserVisible ? 'Cancel' : 'Add User'}
      </button>

      {/* Form to create a new user */}
      {newUserVisible && (
        <form onSubmit={handleCreateUser}>
          <h2>Add New User</h2>
          <div>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Add User</button>
        </form>
      )}

      {/* Render user profiles if users exist */}
      {users.length > 0 && users.map((user) => (
        <div key={user.id}>
          {editingUser?.id === user.id ? (
            <form onSubmit={handleSubmit}>
              <div>
                <label>
                  Name:
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label>
                  Email:
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <button type="submit" onClick={() => setEditingUser(user)}>Save</button>
              <button type="button" onClick={() => setEditingUser(null)}>
                Cancel
              </button>
            </form>
          ) : (
            <div>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <button onClick={() => startEditing(user)}>Edit</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
