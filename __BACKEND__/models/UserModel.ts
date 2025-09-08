import MONGOOSE from "mongoose";

const UserSchema = new MONGOOSE.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

const UserModel = MONGOOSE.model("User", UserSchema);

export default UserModel;
