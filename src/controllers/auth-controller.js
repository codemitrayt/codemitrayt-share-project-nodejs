import Joi from "joi";
import CustomErrorHandler from "../services/custom-error-handler";

class AuthController {
  constructor(authService, tokenService) {
    this.authService = authService;
    this.tokenService = tokenService;
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

    const token = await this.tokenService.signAccessToken({
      payload: { email, fullName },
      expiresIn: "5m",
    });

    return res.json({
      message: "Verification email sent successfully",
      user: {
        email,
        fullName,
      },
    });
  }

  login(req, res) {
    return res.json({ message: "Login successful" });
  }
}

export default AuthController;
