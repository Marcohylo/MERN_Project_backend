const express = require("express");
const router = express.Router();
const sendMail = require("../controllers/nodeMailer");
const { index } = require("../controllers/seeds-controller");
const processPayment = require("../controllers/payment-controller");

router.use("/listings", require("./listing-routes"));

router.use("/orders", require("./order-routes"));

// this call sendMail function in the nodeMailer file in controllers.
router.post("/api/form", sendMail);

router.post("/seed", index);

router.post("/charge", processPayment);

module.exports = router;
