var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");
const login = path.join(__dirname, "/public");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* Get login page */

// router.get("/login", (req, res) => {
//   app.use("/public", express.static(__dirname + "/public/login"));
//   res.sendFile(path.join(__dirname + "/login.html"));
//   return;
// });
module.exports = router;
