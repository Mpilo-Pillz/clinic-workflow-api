const express = require("express");

const Cfile = require("../models/cfile");

const router = express.Router();

router.post("", (req, res, next) => {
  const cfile = new Cfile({
    title: req.body.title,
    initials: req.body.initials,
    fullNames: req.body.fullNames,
    lastName: req.body.lastName,
    idNumber: req.body.idNumber,
    citizenship: req.body.citizenship,
    gender: req.body.gender,
    ethnicity: req.body.ethnicity,
    maritalStatus: req.body.maritalStatus,
    language: req.body.language,
    religion: req.body.religion
  });
  cfile.save().then(createdCfile => {
    res.status(201).json({
      message: "File added successfully",
      cfileId: createdCfile._id
    });
  });
});

router.put("/:id", (req, res, next) => {
  const cfile = new CFile({
    _id: req.body.id,
    title: req.body.title,
    initials: req.body.initials,
    fullNames: req.body.fullNames,
    lastName: req.body.lastName,
    idNumber: req.body.idNumber,
    citizenship: req.body.citizenship,
    gender: req.body.gender,
    ethnicity: req.body.ethnicity,
    maritalStatus: req.body.maritalStatus,
    language: req.body.language,
    religion: req.body.language,
  });
  CFile.updateOne({ _id: req.params.id }, cfile).then(result => {
    res.status(200).json({ message: "File Updated successfully!" });
  });
});

router.get("", (req, res, next) => {
  Cfile.find().then(documents => {
    res.status(200).json({
      message: "Files fetched successfully!",
      cfiles: documents
    });
  });
});

router.get("/:id", (req, res, next) => {
  Cfile.findById(req.params.id).then(cfile => {
    if (cfile) {
      res.status(200).json(cfile);
    } else {
      res.status(404).json({ message: "File not found!" });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Cfile.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "File deleted!" });
  });
});

module.exports = router;
