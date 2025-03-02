import * as z from "zod";

export const signUpSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(4, "Password must be at least 4 characters")
    .max(32, "Password must be at most 32 characters"),
});

export const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email"),
  password: z.string({ required_error: "Password is required" }),
});
