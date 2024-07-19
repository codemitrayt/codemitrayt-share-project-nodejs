const jwt = require("jsonwebtoken");
const credentials = require("../config/credentials");

class TokenService {
  async signAccessToken({ payload, expiresIn }) {
    return await jwt.sign(payload, credentials.PRIVATE_KEY, {
      expiresIn,
      algorithm: "RS256",
      issuer: "share-project-auth-service",
    });
  }
}

module.exports = TokenService;
