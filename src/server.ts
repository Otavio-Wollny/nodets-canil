import express, { Request, Response } from "express";
import path from "path";
import mustache from "mustache-express";
import dotenv from "dotenv";

import Home from './routes/index';

dotenv.config();

const server = express();

// Template engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(Home);

// antes das rotas
// habilitando para pegar dados via POST:
server.use(express.urlencoded({ extended: true }));

// Rotas


//// Erro 404 - página não encontrada
server.use((req: Request, res: Response) => {
    res.render('pages/404');
});

server.listen(process.env.PORT);