const Joi = require("joi");
const User = require("../model/user-model");
class AuthController {
  async signUp(req, res) {
    const { fullName, email, password, confirmPassword } = req.body;

    const signUpSchema = Joi.object({
      fullName: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      confirmPassword: Joi.ref("password"),
    });

    const { error } = signUpSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: "All fields required",
        error: error.details[0].message,
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "All fields required",
        error: "Password does not match",
      });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        message: "Email already registered",
        error: "Email already registered",
      });
    }

    const user = await User.create({ email, fullName, password });

    /*
        1. front data (data modeling)
        2. validate front data 
        3. check email already registered
        4. Otp send to user email (logic)
        5. return response
    */

    return res.json({ message: "User register successfully", user });
  }

  login(req, res) {
    return res.json({ message: "Login successful" });
  }
}

module.exports = AuthController;
