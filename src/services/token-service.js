import jwt from "jsonwebtoken";
import { PRIVATE_KEY } from "../config/credentials";

class TokenService {
  async signAccessToken({ payload, expiresIn }) {
    return await jwt.sign(payload, PRIVATE_KEY, {
      expiresIn,
      algorithm: "RS256",
      issuer: "share-project-auth-service",
    });
  }
}

export default TokenService;
