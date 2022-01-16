import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../server/data/dataProduct';

const search = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { city, priceNight, capacity } = req.body;

    if (!city) {
      res.status(400).json({ error: 'Error in id' });
    }

    const response = db.filter((content) => {
      if (content.city === city && content.priceNight <= priceNight && content.capacity <= capacity)  {
        return content;
      } 
    })

    return res.status(200).json(response);
  } 
}

export default search;
