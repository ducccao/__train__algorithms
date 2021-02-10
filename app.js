const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();

app.engine(
  "hbs",
  expressHandlebars({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");

app.use("/public", express.static("public"));

app.get("/", function (req, res) {
  res.render("vwTest/Button.hbs", {
    layout: false,
  });
});

app.get("/cal", (req, res) => {
  res.render("vwCalculator/cal.hbs", {
    layout: false,
  });
});

const PORT = 1212;
app.listen(PORT, () => {
  console.log(`Server is start at ${PORT}`);
});
