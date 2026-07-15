import { Request, Response, NextFunction } from "express";
import { UserService } from "./user-service.js";

export class UserController {
  private userService = new UserService();

  async getAllUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const users = await this.userService.getAllUsers();

      return res.status(200).json({
        success: true,
        message: "Users fetched successfully",
        data: users,
      });
    } catch (error) {
      next(error);
    }
  }
}