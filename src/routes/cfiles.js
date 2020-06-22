const express = require("express");

const CfileController = require('../controllers/cfiles');

const router = express.Router();

router.post("", CfileController.createCfile);
router.patch("/:id", CfileController.updateCfile);
router.get("", CfileController.getCfiles);
router.get("/patient", CfileController.searchPatient);
router.get("/:id", CfileController.getCfile);
router.delete("/:id", CfileController.deleteCfile);

module.exports = router;
