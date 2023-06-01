const express = require("express");
const router = express.Router();
const barberShopRoutes = require('./barber-shops');
const test = require('./test');

const appRoutes = [
  {
    path: '/barbershops',
    route: barberShopRoutes,
  },
  {
    path: '/test',
    route: test,
  }
]

appRoutes.forEach((each) => router.use(each.path, each.route))

module.exports = router;