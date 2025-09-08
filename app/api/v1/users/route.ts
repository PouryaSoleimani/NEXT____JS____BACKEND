import connectToDB from "@/__BACKEND__/__db__/mongoose";
import UserModel from "@/__BACKEND__/models/UserModel";

// FAKE DATAS
const users = [
  { id: 1, firstName: "POURYA", lastName: "SOLEIMANI" },
  { id: 2, firstName: "ALI", lastName: "MOHAMMADI" },
  { id: 3, firstName: "REZA", lastName: "JAFARI" },
  { id: 4, firstName: "MAMAD", lastName: "YOUSEFI" },
  { id: 5, firstName: "MAHDI", lastName: "JAFARI" }
];

export async function GET(req: Request) {
  try {
    await connectToDB();
    const users = await UserModel.find({}).select("firstName lastName");
    return Response.json({
      ok: true,
      message: "USERS GET",
      data: users,
      count: users.length,
      reqMethod: req.method
    });
  } catch (error) {
    return Response.json({ ok: false, message: "Database connection failed" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDB();
    const reqBody = await req.json();
    const { firstName, lastName } = reqBody;
    if (!firstName?.trim() || !lastName?.trim()) {
      return Response.json({ ok: false, message: "First name and last name are required" }, { status: 400 });
    }
    const newUser = await UserModel.create({ firstName: firstName.trim(), lastName: lastName.trim() });
    return Response.json({ ok: true, data: { id: newUser._id, firstName: newUser.firstName, lastName: newUser.lastName }, message: "User created successfully" }, { status: 201 });
  } catch (error: any) {
    console.error("POST ERROR:", error);
    if (error.code === 11000) {
      return Response.json({ ok: false, message: "User already exists" }, { status: 409 });
    }
    return Response.json({ ok: false, message: "Internal server error" }, { status: 500 });
  }
}
