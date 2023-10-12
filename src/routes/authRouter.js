import { Router } from 'express';

const authRouter = Router();

authRouter.get('/login', async (req, res) => {
  res.json({ message: 'Отображение страницы входа в систему' });
});

authRouter.get('/signup', async (req, res) => {
  res.json({ message: 'Отображение страницы регистрации в системе' });
});

authRouter.get('/logout', async (req, res) => {
  res.json({ message: 'Выход из системы осуществлён успешно' });
});


export default authRouter;

