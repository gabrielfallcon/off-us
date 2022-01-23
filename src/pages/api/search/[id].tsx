import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../server/data/dataProduct';

const hotelID = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const id  = req.query.id;
    
    if (!id) {
      res.status(400).json({ error: 'Error in request' });
      return
    }

    const response = db.find((current) => {
      if (current.id === id) {
        return current;
      } 
    });

    return res.status(200).json(response);
  }
}

export default hotelID;