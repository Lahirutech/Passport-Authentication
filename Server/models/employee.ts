const { mongoose } = require("mongoose");

var schema = new mongoose.Schema({
  first_name: {
    type: String,
    require: true,
  },

  last_name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true, 
    unique: true,
  },
  gender: { type: String },
});

// const Employeedb: Employee = mongoose.model("employeedb", schema);

module.exports = mongoose.model("employeedb", schema);;
