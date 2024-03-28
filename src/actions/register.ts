"use server";

import * as z from "zod";
import bcrypt from "bcrypt";

import { RegisterSchema } from "@/schemas";
import userModel from "@/DB/models/User.Model";
import { connectToDatabase } from "@/DB/connection";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  try {
    const validationFields = RegisterSchema.safeParse(values);

    if (!validationFields.success) {
      throw new Error("Validation Error");
    }

    const { email, password, name } = validationFields.data;

    //Check if email exist before or not
    await connectToDatabase()
    const isEmailExist = await userModel.findOne({ email });
    if (isEmailExist) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    //ToDo send verifi  cation email

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
