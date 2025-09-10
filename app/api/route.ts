import axios from "axios";
export function GET() {
  axios.get('https')
  return Response.json({ ok: true, message: "BASE URL" });
}
console.log(response.data)


axios.get('https://example.com')
  .then(response => console.log(response.data)) 