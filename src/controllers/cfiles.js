const Cfile = require("../models/cfile");

exports.createCfile = (req, res, next) => {
    const cfile = new Cfile({
      _id: parseInt(req.body.idNumber),
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
      income: req.body.income,
      notes: [ 
      //   {
      //   date: new Date(),
      //   diagnosis: req.body.notes,
      //   medication: "Mub"
      // } 
    ]
    });
    console.log('cfile-->', cfile);
    
    cfile.save().then(createdCfile => {
      res.status(201).json({
        message: "File added successfully",
        cfileId: createdCfile._id
      });
    }).catch(error => {
      res.status(500).json({
        message: 'Technical error occured while adding file!',
        error: error
      });
    });
  }

  exports.createConsultation = (req, res, next) => {
    
    console.log('ID-->', req.params.id);
    console.log('Diagnosis-->', req.body.diagnosis);
    console.log('prescr-->', req.body.prescription);
    
    Cfile.updateOne(
      { 
        // _id: req.params.id
        idNumber: req.params.id
      },
        { 
          $push: 
          { 
            notes: 
            {
          date: new Date(),
          diagnosis: req.body.diagnosis,
          prescription: req.body.prescription,
        }
      }
    }).then(result => {
      if(result.n > 0) {
        res.status(200).json({ message: "File Updated successfully!" });
      } else {
        res.status(304).json({ message: 'File Not updated'})
      }
    }).catch(error => {
      res.status(500).json({
        message: 'Techncical error occured while updating file!'
      });
    })
  }

  exports.updateCfile = (req, res, next) => {
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
      income: req.body.income,
      // notes: req.body.notes
    });
    Cfile.updateOne({ _id: req.params.id }, cfile).then(result => {
      if(result.n > 0) {
        res.status(200).json({ message: "File Updated successfully!" });
      } else {
        res.status(401).json({ message: 'Update not Authorized!'})
      }
    }).catch(error => {
      res.status(500).json({
        message: 'Techncical error occured while updating file!'
      });
    });
  }

  
  exports.updateConsultation = (req, res, next) => {
    
    const cfile = new Cfile({
      notes: req.body.notes
    });
    
    Cfile.updateOne(
      { 
        diagnosis: cfile
      },
        { 
          $set: 
          { 
            notes: 
            { 
          diagnosis: cfile
        }
      }
    }).then(result => {
      if(result.n > 0) {
        res.status(200).json({ message: "File Updated successfully!" });
      } else {
        res.status(304).json({ message: 'File Not updated'})
      }
    }).catch(error => {
      res.status(500).json({
        message: 'Techncical error occured while updating file!'
      });
    })
  }

  exports.getCfiles = (req, res, next) => {
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
  }

  exports.getPatientConsultations = (req, res, next) => {

    Cfile.find({idNumber: req.params.id}, { idNumber: 1, notes: 1 }).then(cfile => {
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
  }

  exports.getConsultation = (req, res, next) => {
    console.log("TO DEV");
    // Cfile.findById(req.params.id).then(consultation => {
    //   if (consultation) {
    //     res.status(200).json(consultation);
    //   } else {
    //     res.status(404).json({ message: "File not found!" });
    //   }
    // })
    // .catch(error => {
    //   res.status(500).json({
    //     message: 'Technical error occured retrieving file!'
    //   });
    // });
  }

  exports.searchPatient = (req, res, next) => {
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
  }

  exports.getCfile = (req, res, next) => {
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
  }

  exports.deleteCfile = (req, res, next) => {
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
  }

  