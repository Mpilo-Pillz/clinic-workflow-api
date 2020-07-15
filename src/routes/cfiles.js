const express = require("express");

const CfileController = require('../controllers/cfiles');

const router = express.Router();

router.post("", CfileController.createCfile);
router.patch("/new/consultation/:id", CfileController.createConsultation);
router.patch("/:id", CfileController.updateCfile);
router.patch("/update/consultation/:id", CfileController.updateConsultation);
router.get("", CfileController.getCfiles);
router.get("/patient", CfileController.searchPatient);
router.get("/:id", CfileController.getCfile);
router.delete("/:id", CfileController.deleteCfile);

router.get("/:id/consultations", CfileController.getPatientConsultations);

module.exports = router;
