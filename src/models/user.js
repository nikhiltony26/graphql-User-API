const { v4: uuidv4 } = require('uuid');

class User {
  constructor(name, age, email) {
    this.id = uuidv4();
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

module.exports = User;
