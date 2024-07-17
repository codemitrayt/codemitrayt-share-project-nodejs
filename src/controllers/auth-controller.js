const Joi = require("joi");
const CustomErrorHandler = require("../services/custom-error-handler");

class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  async signUp(req, res, next) {
    const { fullName, email, password, confirmPassword } = req.body;

    const signUpSchema = Joi.object({
      fullName: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      confirmPassword: Joi.ref("password"),
    });

    const { error } = signUpSchema.validate(req.body);
    if (error) return next(error);

    const userExist = await this.authService.getUserByEmail(email);
    if (!!userExist) return next(CustomErrorHandler.userExists());

    return res.json({ message: "User register successfully" });
  }

  login(req, res) {
    return res.json({ message: "Login successful" });
  }
}

module.exports = AuthController;
