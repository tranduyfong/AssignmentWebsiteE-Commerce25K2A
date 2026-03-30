const express = require('express');
const { createReceipt, getReceipt, getMyReceipt } = require('../controllers/receipt.controller');
const { middlewareController } = require('../middleware/jwt.middleware');
const router = express.Router();

router.post("/", middlewareController.checkValidJWT, createReceipt);
router.get("/", middlewareController.checkValidJWT, middlewareController.roleAdmin, getReceipt);
router.get("/my", middlewareController.checkValidJWT, getMyReceipt);

module.exports = router;