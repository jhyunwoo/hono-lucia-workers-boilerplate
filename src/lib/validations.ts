import { z } from "zod";

export const userAuthValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(255),
});
