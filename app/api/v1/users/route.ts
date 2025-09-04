
const users = [
  { id: 1, firstname: 'POURYA', lastname: "SOLEIMANI" },
  { id: 2, firstname: 'ALI', lastname: "MOHAMMADI" },
  { id: 3, firstname: 'REZA', lastname: "JAFARI" },
  { id: 4, firstname: 'MAMAD', lastname: "YOUSEFI" },
  { id: 5, firstname: 'MAHDI', lastname: "JAFARI" },
]

export function GET() {
  return Response.json({ ok: true, message: 'USERS GET', data: users })
}