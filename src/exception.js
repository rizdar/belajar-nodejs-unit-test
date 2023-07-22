export class MyExeption extends Error {}

export const callMe = (name) => {
  if (name === 'Rizki') {
    throw new MyExeption('Ups my exeptions happens');
  } else {
    return 'OK';
  }
};
