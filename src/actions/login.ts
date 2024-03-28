"use server";

import * as z from "zod";
import bcrypt from "bcrypt";


import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  try {
    const validationFields = LoginSchema.safeParse(values);

    if (!validationFields.success) {
      throw new Error("Validation Error");
    }

    const {email,password} = validationFields.data

    return {
      success: true,
      message: "Email Sent",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
