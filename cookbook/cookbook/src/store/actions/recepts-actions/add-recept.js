export const ADD_RECEPT = 'add_recept';

export const addRecept = (recept) => {
  return{
    type: ADD_RECEPT,
    payload: {
      recept
    }
  };
};
