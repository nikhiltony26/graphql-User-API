const User = require('../models/user');

const users = [];

const resolvers = {
  users: () => users,
  createUser: ({ name, age, email }) => {
    const newUser = new User(name, age, email);
    users.push(newUser);
    return newUser;
  },
  deleteUser: ({ id }) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      return `User with ID ${id} deleted successfully.`;
    }
    throw new Error(`User with ID ${id} not found.`);
  }
};

module.exports = resolvers;
