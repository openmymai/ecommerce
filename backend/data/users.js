import bcrypt from 'bcrypt';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('admin123', 10),
    isAdmin: true,
  },
  {
    name: 'Mai Chan',
    email: 'mai@email.com',
    password: bcrypt.hashSync('mai123', 10),
    isAdmin: false,
  },
];

export default users;
