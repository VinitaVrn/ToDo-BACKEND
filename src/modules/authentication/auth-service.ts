import bcrypt from "bcrypt";
import { AuthRepository } from "./auth-repository.js";
import { generateToken } from "./jwt.js";

export class AuthService {

  private authRepository = new AuthRepository();

  async login(data: {
    name: string;
    email: string;
    password: string;
  }) {

    let user = await this.authRepository.findByEmail(data.email);

    if (!user) {

      const hashedPassword = await bcrypt.hash(data.password, 10);

      user = await this.authRepository.create({
        name: data.name,
        email: data.email,
        password: hashedPassword,
      });

    } else {

      const validPassword = await bcrypt.compare(
        data.password,
        user.password
      );

      if (!validPassword) {
        throw new Error("Invalid credentials");
      }
    }

    const token = generateToken({
      userId: user.id,
      email: user.email,
    });

    return {
      user,
      token,
    };
  }
}