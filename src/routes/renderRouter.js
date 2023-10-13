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
  console.log(req.session.user.id)
  const allUserRoutes = await Route.findAll({ where: {user_id:req.session.user.id} });
  // const allRoutes = await Route.findAll();
  // console.log(JSON.parse(JSON.stringify(allRoutes)))
  console.log("------",allUserRoutes)
  res.render('Layout', { allUserRoutes });
});

export default router;
