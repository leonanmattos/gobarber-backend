import User from './app/models/User';

const { Router } = require('express');

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Leonan Mattos',
    email: 'leonanmattos@gmail.com',
    password_hash: '123456789',
  });

  return res.json(user);
});

export default routes;
