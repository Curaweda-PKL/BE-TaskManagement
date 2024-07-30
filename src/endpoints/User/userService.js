const bcrypt = require('bcrypt');
const userRepo = require('./userRepo');

async function registerUser(email, password) {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  return await userRepo.createUser({ email, password: hashedPassword });
}

async function changePassword(email, newPassword) {
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const user = await userRepo.getUserByEmail(email);
  if (!user) throw new Error('User not found');
  return await userRepo.updateUser(user.id, { password: hashedPassword });
}

module.exports = {
  registerUser,
  changePassword,
};
