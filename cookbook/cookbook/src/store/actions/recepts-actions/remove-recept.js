export const REMOVE_RECEPT = 'remove_recept';

export const removeRecept = (recept) => {
  return {
    type: REMOVE_RECEPT,
    payload: {
      recept
    }
  }
};
