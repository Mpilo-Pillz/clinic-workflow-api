const express = require("express");

const ConsultationController = require('../controllers/consultation');

const router = express.Router();

router.post("", ConsultationController.createConsultation);
router.patch("/:id", ConsultationController.updateConsultation);
router.get("", ConsultationController.getCconsultation);
router.get("/:id", ConsultationController.getConsultation);
router.delete("/:id", ConsultationController.deleteConsultation);

module.exports = router;
