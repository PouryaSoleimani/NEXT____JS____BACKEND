import MONGOOSE from "mongoose";

const UserSchema = new MONGOOSE.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, minLength: 8 }
});

const UserModel = MONGOOSE.model("User", UserSchema);

export default UserModel;
