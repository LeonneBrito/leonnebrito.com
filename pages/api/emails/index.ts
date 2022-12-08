import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../../lib';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body;

  if (req.method === 'POST') {
    if (!name || !email || !message) {
      res.status(400).json({ message: 'Missing required fields' });
      return;
    }

    await prisma.email
      .create({
        data: {
          name,
          email,
          message
        }
      })
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(400).json({ message: error.message });
      });
  }
}
