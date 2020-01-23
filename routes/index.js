const express = require("express");
const router = express.Router();
const sendMail = require("../controllers/nodeMailer");

app.get('/', function (req, res) {
    connection.query('select * from user', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
router.use("/listings", require("./listing-routes"));

router.use("/orders", require("./order-routes"));

// this call sendMail function in the nodeMailer file in controllers.
router.post("/api/form", sendMail);

module.exports = router;
