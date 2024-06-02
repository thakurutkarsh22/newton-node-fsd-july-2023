function getHome(req, res) {
  res.json({
    name: "utkasrh",
    class: "9th",
    age: 17,
  });
}

function getDetails(req, res) {
  res.json({
    detail: "its nice",
  });
}

module.exports = { getHome, getDetails };
