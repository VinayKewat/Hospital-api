// import mangosse
const mongoose = require("mongoose");

// report schema for patients
const reportSchema = mongoose.Schema(
  {
    doctor: {
      type: String,
    },
    patient: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// initialize all thing in report var 
const Report = mongoose.model("Report", reportSchema);

// then export this for call from index
module.exports = Report;