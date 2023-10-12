export const apiProtectMiddleWare = (req, res, next) => {
  if (!req.session.user) {
    res.sendStatus(401);
    return;
  }
  next();
};

export const signInUserMiddleWare = (req, res, next) => {
  if (req.session.user) {
    res.redirect('/');
    return;
  }
  next();
};
