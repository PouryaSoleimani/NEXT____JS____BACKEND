export function GET() {
  return Response.json({ ok: true, status: 200, message: 'V1 ROUTE GET METHOD' })
}

export function POST() {
  return Response.json({ ok: true, status: 201, message: 'V1 ROUTE POST METHOD' })
}

export function DELTE() {
  return Response.json({ ok: true, status: 202, message: 'V1 ROUTE DELETE METHOD' })
}

export function PATCH() {
  return Response.json({ ok: true, status: 203, message: 'V1 ROUTE PATCH METHOD' })
}