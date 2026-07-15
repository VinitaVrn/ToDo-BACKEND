import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth-service.js";
import { loginSchema } from "./auth-validator.js";

export class AuthController {

  private authService = new AuthService();

  async login(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    try {

      const body = loginSchema.parse(req.body);

      const result = await this.authService.login(body);

      return res.status(200).json({
        success: true,
        message: "Login successful",
        data: result,
      });

    } catch (error) {
      next(error);
    }

  }

}