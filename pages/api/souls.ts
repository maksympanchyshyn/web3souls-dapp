import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/db';
import { Soul } from '@prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Soul[]>) {
  const souls = await prisma.soul.findMany({});
  res.status(200).json(souls);
}
