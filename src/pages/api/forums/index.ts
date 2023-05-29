import { NextApiRequest, NextApiResponse } from "next"

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  const forums = [
    { id: 1, name: 'TEST-1' },
    { id: 2, name: 'TEST-2' },
    { id: 3, name: 'TEST-3' },
    { id: 4, name: 'TEST-4' },
    { id: 5, name: 'TEST-5' },
  ]
  res.status(200).json(forums)
}
