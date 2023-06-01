const prisma = require("./prima-client");

const createBarberShops = async (params) => {
  const newBarberShop = await prisma.baberShop.create({
    data: params,
  });

  return newBarberShop;
};

module.exports = { createBarberShops };
