import { data } from '../data/data';

type PetType = "dog" | "cat" | "fish";

type Pet = {
  type: PetType;
  image: string;
  name: string;
  color: string;
  sex: "Masculino" | "Feminino";
};

export const Pet = {

  // Listar todos os Pets
  listarTodos: (): Pet[] => {
    return data;
  },

  // Filtrar por espécie
  listarPorEspecie: (type: PetType): Pet[] => {
    return data.filter((item) => item.type === type);
  },

  // Filtrar por nome
  listarPorNome: (name: string): Pet[] => {
      return data.filter((item) =>
          item.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
  },
};
