type OpcoesMenu = '' | 'Home' | 'Dog' | 'Cat' | 'Fish';
export const createMenuObject = (menuAtivo: OpcoesMenu) => {
  let returnObject = {
    Home: false,
    Dog: false,
    Cat: false,
    Fish: false,
  };

  if (menuAtivo !== "") {
    returnObject[menuAtivo] = true;
  }

  return returnObject;
};