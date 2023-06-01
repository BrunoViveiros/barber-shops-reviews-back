const prisma = require("./prima-client");

const getBarberShops = async () => {
  const data = await prisma.baberShop.findMany();

  return { data };
};

module.exports = {
  getBarberShops,
};
