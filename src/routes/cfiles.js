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
  }).catch(error => {
    res.status(500).json({
      message: 'Technical error occured while adding file!'
    });
  });
});

router.patch("/:id", (req, res, next) => {
  const cfile = new Cfile({
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
    religion: req.body.religion,
  });
  Cfile.updateOne({ _id: req.params.id }, cfile).then(result => {
    if(result.nModified > 0) {
      res.status(200).json({ message: "File Updated successfully!" });
    } else {
      res.status(401).json({ message: 'Update not Authorized!'})
    }
  }).catch(error => {
    res.status(500).json({
      message: 'Techncical error occured while updating file!'
    });
  });
});

router.get("", (req, res, next) => {
  Cfile.find().then(documents => {
    res.status(200).json({
      message: "Files fetched successfully!",
      cfiles: documents
    });
  }).catch(error => {
    res.status(500).json({
      message: 'Technical error occured fetching files!'
    })
  });
});

router.get("/patient", (req, res, next) => {
  console.log(req.query.search)

  Cfile.findOne({idNumber: req.query.search}).then(cfile => {
    if (cfile) {
      res.status(200).json(cfile);
    } else {
      res.status(404).json({ message: "File not found!" });
    }
  }).catch(error => {
    res.status(500).json({
      message: 'Technical error Occured while searching for file!'
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
  })
  .catch(error => {
    res.status(500).json({
      message: 'Technical error occured retrieving file!'
    });
  });
});

router.delete("/:id", (req, res, next) => {
  Cfile.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    if (result.n > 0) {
      res.status(200).json({ message: "File deleted!" });
    } else {
      res.status(401).json({ message: 'Deletion not Authorized!'});
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Technical error occured while deleting file!'
    });
  });
});

module.exports = router;
