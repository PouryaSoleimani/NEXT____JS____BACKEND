import connectToDB from "@/__BACKEND__/__db__/mongoose";
import UserModel from "@/__BACKEND__/models/UserModel";
connectToDB();
// FAKE DATAS
const users = [
  { id: 1, firstName: "POURYA", lastName: "SOLEIMANI" },
  { id: 2, firstName: "ALI", lastName: "MOHAMMADI" },
  { id: 3, firstName: "REZA", lastName: "JAFARI" },
  { id: 4, firstName: "MAMAD", lastName: "YOUSEFI" },
  { id: 5, firstName: "MAHDI", lastName: "JAFARI" }
];

export function GET(req: Request) {
  return Response.json({ ok: true, message: "USERS GET", data: users, reqMethod: req.method });
}

export async function POST(req: Request) {
  const reqBody = await req.json();
  const { firstName, lastName } = reqBody;

  // users.push({ id, firstName, lastName });

  const newUser = await UserModel.create({ firstName, lastName });
  // console.log(newUser);
  // return Response.json({ newUser });
  if (newUser) {
    return Response.json({ ok: true, reqBody, message: "USER CREATED" }, { status: 201 });
  } else {
    return Response.json({ ok: false, message: "INVALID REQUEST" }, { status: 409 });
  }
}
