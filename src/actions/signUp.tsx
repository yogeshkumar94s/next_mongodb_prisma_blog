"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { signUpFormSchema } from "@/lib/schema";
import { db } from "@/lib/database";
import { getUserByEmail } from "@/lib/data/user";

export const signUp = async (values: z.infer<typeof signUpFormSchema>) => {
  const validatedFields = signUpFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, name, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //TODO: Send verification token email!

  return { success: "User created successfully!" };
};
