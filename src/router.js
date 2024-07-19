const router = require("express").Router();

const asyncWrapper = require("./utils/async-wrapper");
const TokenService = require("./services/token-service");
const AuthController = require("./controllers/auth-controller");
const AuthService = require("./services/auth-service");
const UserModel = require("./model/user-model");

const tokenService = new TokenService();
const authService = new AuthService(UserModel);
const authController = new AuthController(authService, tokenService);

router.post(
  "/auth/sign-up",
  asyncWrapper((req, res, next) => authController.signUp(req, res, next))
);
router.post("/auth/login", (req, res, next) =>
  authController.login(req, res, next)
);

module.exports = router;
