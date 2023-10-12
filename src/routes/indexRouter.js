import express from 'express';
import { Route } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const allRoutes = await Route.findAll();
  res.render('Layout', { allRoutes });
});

export default router;
