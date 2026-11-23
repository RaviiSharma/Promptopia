import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: { type: String },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    unique: true,
    required: [true, "Username is required!"],
    match: [
      /^[a-zA-Z0-9]{8,20}$/,
      "Username is invalid, it should contain 8-20 alphanumeric letters!",
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
