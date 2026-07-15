import { z } from "zod";

export const loginSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2)
    .max(50),

  email: z
    .string()
    .trim()
    .email(),

  password: z
    .string()
    .min(6)
    .max(50),
});