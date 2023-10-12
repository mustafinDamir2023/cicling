import express from 'express';
import { Route } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

router.delete('/del/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.sendStatus(402);
    return;
  }
  await Route.destroy({
    where: {
      id,
    },
  });

  res.sendStatus(200);
});

export default router;
