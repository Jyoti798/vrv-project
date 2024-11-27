import React from "react";

const PermissionDescription = () => {
  const roles = [
    {
      role: "Admin",
      permissions: ["Edit", "Delete", "View"],
      description: "Admins can edit, delete, and view all content.",
    },
    {
      role: "Editor",
      permissions: ["Edit", "View"],
      description: "Editors can edit and view content but cannot delete.",
    },
    {
      role: "Viewer",
      permissions: ["View"],
      description: "Viewers can only view content.",
    },
  ];

  return (
    <div style={{ margin: "20px" }}>
      <h2>Permission Description</h2>
      <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px" }}>Role</th>
            <th style={{ padding: "10px" }}>Permissions Allowed</th>
            <th style={{ padding: "10px" }}>Action Description</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={index}>
              <td style={{ padding: "10px" }}>{role.role}</td>
              <td style={{ padding: "10px" }}>{role.permissions.join(", ")}</td>
              <td style={{ padding: "10px" }}>{role.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionDescription;

