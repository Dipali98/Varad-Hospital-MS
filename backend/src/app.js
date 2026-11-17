const express = require("express");
const cors = require("cors");
const patientRoutes = require("./routes/patientRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hospital Management System API is running",
  });
});

//Patient APIs
app.use("/api/patients", patientRoutes);

module.exports = app;
