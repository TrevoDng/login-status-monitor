const User = require('./user');

exports.register =((req, res)=> {
    // Create
User.create({ name: 'John Doe', email: 'john@example.com' })
.then((user) => {
  console.log('User created:', user);
})
.catch((err) => {
  console.error('Error creating user:', err);
});
})