export const getUsers = () => {
    return new Promise((resolve) => {
      resolve([
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Inactive' },
      ]);
    });
  };
  
  export const getRoles = () => {
    return new Promise((resolve) => {
      resolve([
        { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
        { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
      ]);
    });
  };
  
  export const getPermissions = () => {
    return new Promise((resolve) => {
      resolve([
        { id: 1, name: 'Read', description: 'Can view content' },
        { id: 2, name: 'Write', description: 'Can edit content' },
        { id: 3, name: 'Delete', description: 'Can remove content' },
      ]);
    });
  };
  