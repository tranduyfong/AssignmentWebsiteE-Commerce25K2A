const express = require("express");
const router = express.Router();

router.use("/products", require("./product.route"));
router.use("/users", require("./user.route"));
router.use("/mail", require("./mail.route"));
router.use("/address", require("./address.route"));
router.use("/receipt", require("./receipt.route"));

module.exports = router;