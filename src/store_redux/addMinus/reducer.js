import * as addminus from './action-type';

let defaultState = {
  v: 100
};

const addReducer = (state = defaultState,action)=>{
  switch (action.type) {
    case addminus.ADD:
      return {
        v:state.v + 14
      };
    case addminus.MINUS:
      return {
        v:state.v - 17
      };
    default:
      return state;
  }
};

export default addReducer;