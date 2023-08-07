const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
	// firstName field
	firstName: {
		type: String,
		required: [true, "Please enter your first name."],
		unique: false
	},
	// lastName field
	lastName: {
		type: String,
		required: [true, "Please enter your last name."],
		unique: false
	},
  // email field
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  // password field
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
});

// export UserSchema
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
