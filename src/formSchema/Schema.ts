import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().min(1).email({ message: "Invalid email" }),
  password: z.string().min(6),
});


export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Name is Required" }).max(30),
  email: z.string().min(1).email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Password is Required" }),
  confirmPassword: z.string().min(6, { message: "Password is Required" }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

