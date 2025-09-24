const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/companyDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ Error:", err));

const employeeSchema = new mongoose.Schema({
  emp_no: Number,
  name: String,
  dob: Date,
  anniversary_date: Date,
  email: String,
  phone: String
});

module.exports = mongoose.model("Employee", employeeSchema);
