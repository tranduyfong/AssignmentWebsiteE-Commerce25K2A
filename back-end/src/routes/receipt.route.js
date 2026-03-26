const express = require('express');
const { createReceipt, getReceipt } = require('../controllers/receipt.controller');
const { middlewareController } = require('../middleware/jwt.middleware');
const router = express.Router();

router.post("/", middlewareController.checkValidJWT, createReceipt);
router.get("/", middlewareController.checkValidJWT, middlewareController.roleAdmin, getReceipt)

module.exports = router;