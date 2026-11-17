const express = require("express");
const Patient = require("../models/Patient");

const router = express.Router();

//Get :Fetch all patients
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Add a new patient
router.post("/", async (req, res) => {
  try {
    const patient = await Patient.create(req.body);

    res.status(201).json({
      message: "Patient added successfully",
      patient,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
