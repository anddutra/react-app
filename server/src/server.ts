import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

/*
    json - Por padrão o express não entende json
           Desta forma falamos pra ele utilizar o plugin json
           para converter o request body para json
           e assim temos acesso a ele através do request.body

    cors - Permite que aplicações rodando em endereços diferentes acessem a API
           Por padrão é permitido apenas que aplicações rodando no mesmo endereço acessem a API.
*/

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);