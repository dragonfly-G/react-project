import * as addminus from './action-type';

export const add = () => {
  return {
    type: addminus.ADD,
  }
};

export const minus = () => {
  return {
    type: addminus.MINUS,
  }
};