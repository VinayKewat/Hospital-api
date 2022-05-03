// import mangoose and built schema for doctor
const mongoose = require("mongoose");

// schema 
const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// store mangoose model and doctor schema in doctor var 
const Doctor = mongoose.model("Doctor", doctorSchema);

// export for call from index
module.exports = Doctor;
