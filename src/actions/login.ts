"use server";

import { LoginSchema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  try {
    const validationFields = LoginSchema.safeParse(values);

    if (!validationFields.success) {
      throw new Error("something is wrong");
    }

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
