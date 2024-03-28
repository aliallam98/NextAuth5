import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

const userModel = models.User || model("User", userSchema);

export default userModel;
