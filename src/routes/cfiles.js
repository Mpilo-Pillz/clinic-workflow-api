const express = require("express");

const CfileController = require('../controllers/cfiles');

const router = express.Router();


const multer = require("multer");


const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype]; //if the mime type is not valid, it returns null
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "uploads/images")
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLocaleLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, `${name}-${Date.now()}.${ext}`);
  }
});

router.post("", CfileController.createCfile);
router.patch("/new/consultation/:id", multer(storage).single("image"), CfileController.createConsultation);
router.patch("/:id", CfileController.updateCfile);
router.patch("/update/consultation/:id", CfileController.updateConsultation);
router.get("", CfileController.getCfiles);
router.get("/patient", CfileController.searchPatient);
router.get("/:id", CfileController.getCfile);
router.delete("/:id", CfileController.deleteCfile);

router.get("/:id/consultations", CfileController.getPatientConsultations);
router.get("/:id/consultation", CfileController.getConsultation);

module.exports = router;
