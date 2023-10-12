import { Router } from 'express';

const authRouter = Router();

authRouter.get('/login', async (req, res) => {
  // res.json({ message: 'Отображение страницы входа в систему' });
  res.render('Layout', { });
});

authRouter.get('/signup', async (req, res) => {
  // res.json({ message: 'Отображение страницы регистрации в системе' });
  res.render('Layout', { });
});

// authRouter.get('/logout', async (req, res) => {
//   // res.json({ message: 'Выход из системы осуществлён успешно' });
//   res.render('Layout');
// });

export default authRouter;
