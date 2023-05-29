import { IncomingMessage, ServerResponse } from "http"

export const runtime = 'edge';

export default function handler(_: IncomingMessage, res: ServerResponse) {
  const forums = [
    { id: 1, name: 'TEST-1' },
    { id: 2, name: 'TEST-2' },
    { id: 3, name: 'TEST-3' },
    { id: 4, name: 'TEST-4' },
    { id: 5, name: 'TEST-5' },
  ]

  return new Response(
    JSON.stringify(forums),
    {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  )
}
