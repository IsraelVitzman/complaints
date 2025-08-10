import express from 'express';
import routerLogin from './routers/rourerLogin.js';
import routerComplaints from './routers/routerComplaints.js';

const PORT = 3000;
const server = express();
console.log('בקשה חדשה נכנסה');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('front'));

server.use('/entry', routerLogin);
server.use('/complaints', routerComplaints);

server.listen(PORT, () => {
  console.log('listening...');
});
