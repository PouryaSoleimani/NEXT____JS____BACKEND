
const users = [
  { id: 1, firstName: 'POURYA', lastName: "SOLEIMANI" },
  { id: 2, firstName: 'ALI', lastName: "MOHAMMADI" },
  { id: 3, firstName: 'REZA', lastName: "JAFARI" },
  { id: 4, firstName: 'MAMAD', lastName: "YOUSEFI" },
  { id: 5, firstName: 'MAHDI', lastName: "JAFARI" },
]

export function GET(req: Request) {
  return Response.json({ ok: true, message: 'USERS GET', data: users, reqMethod: req.method })
}

export async function POST(req: Request) {
  const reqBody = await req.json()
  return Response.json({ body: reqBody })
}