import { Dispatch } from 'redux';

export const SET_BASEPATH = 'SET_BASEPATH';

export type basePathAction = {
  type :string;
  payload: BasePath;
}

export type BasePath = string;

export const setBasePath = (basePath :BasePath) => ({type: SET_BASEPATH, payload: basePath});


const basePath = (state :BasePath = "", action :basePathAction) => {
  switch (action.type) {
    case SET_BASEPATH:
      return action.payload;
    default:
      return state;
  };
};
export default basePath;
