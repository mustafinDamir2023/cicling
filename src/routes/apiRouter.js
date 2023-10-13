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

router.post('/add', async (req, res) => {
  const {
    start, end, img, distance, location, name,
  } = req.body;
  console.log(req.body)
  const data = await Route.create({
    start,
    end,
    img,
    distance,
    location,
    name,
    user_id: req.session.user.id,
  });
  res.json(data);
});

router.put("/edit/:id", async (req, res) => {
  const data = req.body;
  await Route.update(data, { where: { id: req.params.id } });
  res.send(data)
})

export default router;
