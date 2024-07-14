const Joi = require("joi");

class AuthController {
  signUp(req, res) {
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

    /*
        1. front data (data modeling)
        2. validate front data 
        3. check email already registered
        4. Otp send to user email (logic)
        5. return response
    */

    return res.json({ message: "Otp sent successfully" });
  }

  login(req, res) {
    return res.json({ message: "Login successful" });
  }
}

module.exports = AuthController;
