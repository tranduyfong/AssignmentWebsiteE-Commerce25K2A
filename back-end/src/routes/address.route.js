const express = require('express');
const { getVillages, getDistricts, getProvince } = require('../controllers/address.controller');

const router = express.Router();

router.get("/provinces", getProvince);
router.get("/districts/:province_id", getDistricts);
router.get("/villages/:district_id", getVillages);

module.exports = router;