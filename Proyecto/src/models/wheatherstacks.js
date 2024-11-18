const API_KEY = "3a7e16419ac16fcfe25d306394b5b2bf";
const link = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=`;

const consultarClima = async function (ciudad) {
  const url = link + ciudad;
  const data = await fetch(url);
  const dataJSON = await data.json();
  return dataJSON;
};

module.exports = { consultarClima };
