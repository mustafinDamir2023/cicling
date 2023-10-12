import { Router } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const apiAuthRouter = Router();

apiAuthRouter.post('/signup', async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.statusCode(400).json({ message: 'all field required' });
    return;
  }
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      name,
      password: await bcrypt.hash(password, 10),
    },
  });
  if (!created) {
    res.statusCode(400).json({ message: 'email exists' });
  }
  req.session.user = {
    name: user.name,
    email: user.email,
    id: user.id,
  };
  res.sendStatus(200);
});

apiAuthRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: 'all field required' });
    return;
  }

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user || !await bcrypt.compare(password, user.password)) {
    res.status(400).json({ message: 'user not found' });
    return;
  }

  req.session.user = {
    name: user.name,
    email: user.email,
    id: user.id,
  };

  res.sendStatus(200);
});

apiAuthRouter.post('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('test');
  res.sendStatus(200);
});

export default apiAuthRouter;
