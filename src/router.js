import { Router } from "express";

import asyncWrapper from "./utils/async-wrapper";
import TokenService from "./services/token-service";
import AuthController from "./controllers/auth-controller";
import AuthService from "./services/auth-service";
import UserModel from "./model/user-model";

const router = Router();
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

export default router;
