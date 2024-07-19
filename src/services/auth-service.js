class AuthService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async getUserByEmail(email) {
    return await this.userModel.findOne({ email });
  }
}

export default AuthService;
