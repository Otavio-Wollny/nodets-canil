import { Request, Response } from "express";

import { Pet } from '../models/PetModel';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;

  if (!query) {
    res.redirect('/');
    return;
  }
  
  let lista = Pet.listarPorNome(query);

  res.render('pages/page', {
    menu: createMenuObject(''),
    lista,
    query
  });
};
