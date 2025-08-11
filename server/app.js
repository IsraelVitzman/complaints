import express from 'express';
import routerLogin from './routers/rourerLogin.js';
import routerComplaints from './routers/routerComplaints.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3000;
const server = express();
console.log('בקשה חדשה נכנסה');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.use('/front', express.static(path.join(__dirname, '..', 'front')));

server.use('/entry', routerLogin);
server.use('/complaints', routerComplaints);

server.listen(PORT, () => {
  console.log('listening...');
});
