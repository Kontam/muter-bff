export const SET_BASEPATH = 'SET_BASEPATH';

export type SetBasePathAction = {
  type :typeof SET_BASEPATH;
  payload: BasePath;
}

export type BasePath = string;

export const setBasePath = (basePath :BasePath): SetBasePathAction => ({type: SET_BASEPATH, payload: basePath});


const basePath = (state :BasePath = "", action :SetBasePathAction) => {
  switch (action.type) {
    case SET_BASEPATH:
      return action.payload;
    default:
      return state;
  };
};
export default basePath;
