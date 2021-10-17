import { Request, Response } from 'express';

import { Pet } from '../models/PetModel';
import { createMenuObject  } from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {
  let lista = Pet.listarTodos();

  res.render("pages/page", {
    menu: createMenuObject('Home'),
    banner: {
      titulo: "Todos os animais",
      background: "allanimals.jpg",
    },
    lista
  });
};

export const dogs = (req: Request, res: Response) => {
  let lista = Pet.listarPorEspecie('dog');

  res.render("pages/page", {
    menu: createMenuObject('Dog'),
    banner: {
      titulo: "Cães",
      background: "banner_dog.jpg",
    },
    lista
  });
};

export const cats = (req: Request, res: Response) => {
  let lista = Pet.listarPorEspecie('cat');

  res.render("pages/page", {
    menu: createMenuObject('Cat'),
    banner: {
      titulo: "Gatos",
      background: "banner_cat.jpg",
    },
    lista
  });
};

export const fishes = (req: Request, res: Response) => {
  let lista = Pet.listarPorEspecie("fish");

  res.render("pages/page", {
    menu: createMenuObject("Fish"),
    banner: {
      titulo: "Peixes",
      background: "banner_fish.jpg",
    },
    lista
  });
};
