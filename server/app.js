import express from 'express';
import routerLogin from './routers/rourerLogin.js';

const PORT = 3000;
const server = express();
console.log('בקשה חדשה נכנסה');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/entry', routerLogin);

server.listen(PORT, () => {
  console.log('listening...');
});
