
import React, { useState, useEffect } from "react";

// Utility functions for localStorage
const loadUsersFromStorage = () => {
  const savedUsers = localStorage.getItem("users");
  return savedUsers ? JSON.parse(savedUsers) : [];
};

const saveUsersToStorage = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

const UserManagement = () => {
  const [users, setUsers] = useState(loadUsersFromStorage());
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "", status: "Active" });
  const [editingUser, setEditingUser] = useState(null);

  const validRoles = ["Admin", "Editor", "Viewer"];
  const statusOptions = ["Active", "Inactive"];

  // Persist users in localStorage whenever they change
  useEffect(() => {
    saveUsersToStorage(users);
  }, [users]);

  const handleAddUser = () => {
    const { name, email, role, status } = newUser;

    if (!name.trim() || !email.trim() || !role.trim()) {
      alert("Name, email, and role fields cannot be empty.");
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      alert("Email must end with '@gmail.com'.");
      return;
    }

    if (!validRoles.includes(role)) {
      alert("Invalid role. Valid roles are Admin, Editor, and Viewer.");
      return;
    }

    const id = users.length > 0 ? users[users.length - 1].id + 1 : 1; // Generate unique ID
    const updatedUsers = [...users, { ...newUser, id }];
    setUsers(updatedUsers);
    setNewUser({ name: "", email: "", role: "", status: "Active" });
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleSaveUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === editingUser.id ? editingUser : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setNewUser({ ...newUser, role: e.target.value });
  };

  const handleStatusChange = (e) => {
    setNewUser({ ...newUser, status: e.target.value });
  };

  const handleEditStatusChange = (e) => {
    setEditingUser({ ...editingUser, status: e.target.value });
  };

  const getActionsByRole = (role, user) => {
    switch (role) {
      case "Admin":
        return (
          <>
            <button onClick={() => handleEditUser(user)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </>
        );
      case "Editor":
        return <button onClick={() => handleEditUser(user)}>Edit</button>;
      default:
        return <span>No actions available</span>;
    }
  };

  return (
    <div>
      <h2>User Management</h2>

      {/* User Form for Adding New Users */}
      <div className="user-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleChange}
        />
        <select value={newUser.role} onChange={handleRoleChange}>
          <option value="" disabled>
            Select Role
          </option>
          {validRoles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        <select value={newUser.status} onChange={handleStatusChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button onClick={handleAddUser}>Add User</button>
      </div>

      {/* Edit User Form */}
      {editingUser && (
        <div className="edit-user-form">
          <h3>Edit User</h3>
          <input
            type="text"
            value={editingUser.name}
            onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
            placeholder="Name"
          />
          <input
            type="email"
            value={editingUser.email}
            onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
            placeholder="Email"
          />
          <select
            value={editingUser.role}
            onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
          >
            {validRoles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          <select
            value={editingUser.status}
            onChange={handleEditStatusChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button onClick={handleSaveUser}>Save Changes</button>
          <button onClick={() => setEditingUser(null)}>Cancel</button>
        </div>
      )}

      {/* User Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>{getActionsByRole(user.role, user)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
