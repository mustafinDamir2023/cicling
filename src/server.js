import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import apiAuthRouter from './routes/apiAuthRouter';
import resLocals from './middlewares/resLocals';
import authRouter from './routes/authRouter';
import renderRouter from './routes/renderRouter';
import { signInUserMiddleWare } from './middlewares/authMiddlewares';

const SessionFileStore = sessionFileStore(session);

const PORT = 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');

app.set('views', path.join(__dirname, 'components'));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(session({
  store: new SessionFileStore({}),
  secret: 'lalala',
  name: 'test',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
}));
app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});
app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});
app.use(resLocals);

app.use('/', indexRouter);
app.use('/', renderRouter);
app.use('/api',  apiRouter)
app.use('/api/auth', apiAuthRouter);
app.use('/auth', authRouter);


app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
