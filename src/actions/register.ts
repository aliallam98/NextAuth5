"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  try {
    const validationFields = RegisterSchema.safeParse(values);

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
