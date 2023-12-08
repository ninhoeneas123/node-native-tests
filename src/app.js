import express from 'express';
import usersRouters  from './users/users.routes.js';


const app = express();
const port = 3001;


app.use(
  express.json(),
  usersRouters
);

app.listen(port, () => {
  console.log(`Servidor rodando na porta 3000`);
});