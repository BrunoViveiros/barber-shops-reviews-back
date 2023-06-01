const express = require("express");
const router = express.Router();

const { getBarberShops } = require("../infra/get-barber-shops");
const { createBarberShops } = require("../infra/create-barber-shop");

router.get("/", async (_, res) => {
  const response = await getBarberShops();

  res.send(response);
});

router.post("/", async (req, res) => {
  const response = await createBarberShops(req.body);

  res.send({ data: response });
});

module.exports = router;
