const prisma = require("../../../prismaClient");

async function createUser(data) {
  if (!data) return { message: "Data not found" };

  const user = await getUserByEmail(data.email);

  if (user) return { message: "Email already registered" };

  try {
    const userRegistration = await prisma.user.create({ data });

    if (userRegistration) {
      return { message: "Registration successfully" };
    }
  } catch (err) {
    return { message: "Failed registration call developer" };
  }
}

async function getUserByEmail(email) {
  return await prisma.user.findUnique({ where: { email } });
}

async function updateUser(id, data) {
  return await prisma.user.update({
    where: { id },
    data,
  });
}

async function deleteUser(id) {
  return await prisma.user.delete({
    where: { id },
  });
}

module.exports = {
  createUser,
  getUserByEmail,
  updateUser,
  deleteUser,
};
