import express from 'express';
import { Route } from '../../db/models';

const router = express.Router();

router.get('/route/:id', async (req, res) => {
  const oneRout = await Route.findByPk(req.params.id);
  res.render('Layout', { oneRout });
});

router.get('/routs/add', (req, res) => {
  res.render('Layout');
});

router.get('/routs/all', async (req, res) => {
  const allUserRoutes = await Route.findAll({ where: { userId: req.session.user.id } });
  res.render('Layout', { allUserRoutes });
});

export default router;
