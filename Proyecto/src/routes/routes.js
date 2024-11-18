const express = require("express");
const router = express.Router();
const { showMainPage, climaCiudad } = require("../controllers/controller.js");

/* This code snippet is configuring the Express router to use the `express.urlencoded` middleware with
specific options. */
router.use(
  express.urlencoded({
    extended: false,
    limit: 10000,
    parameterLimit: 4,
  })
);

router.get("/", showMainPage);

router.post("/", climaCiudad);

module.exports = router;
