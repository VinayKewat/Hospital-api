// import mangoose  for schema buildation 
const mongoose = require("mongoose");

// patient schema making 
const patientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      unique: true,
    },
    reports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Report",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// initialize all thing in patients var 
const Patient = mongoose.model("Patient", patientSchema);

// exports this is patient  for call from index
module.exports = Patient;