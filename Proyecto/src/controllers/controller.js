const { consultarClima } = require("../models/wheatherstacks.js");

const showMainPage = (req, res) => {
  res.render("index");
};

const climaCiudad = async (req, res) => {
  const { city } = req.body;
  const data = await consultarClima(city);
  res.render("climaCiudad", { data });
};

module.exports = {
  showMainPage,
  climaCiudad,
};
