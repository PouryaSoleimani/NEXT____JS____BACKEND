import MONGOOSE from "mongoose";
import DatePattern from "./patterns/DatePattern";

const EmployeeSchema = new MONGOOSE.Schema({
  fullName: { type: String, required: true, minLength: 6 },
  job: { type: String, required: true },
  startWorkDate: { type: String, pattern: DatePattern }
});

const EmployeeModel = MONGOOSE.model("Employee", EmployeeSchema);
