const express = require("express");
const router = express.Router();
const barberShopRoutes = require('./barber-shops');

const appRoutes = [
  {
    path: '/barbershops',
    route: barberShopRoutes,
  }
]

appRoutes.forEach((each) => router.use(each.path, each.route))

module.exports = router;