export const UPDATE_LIST_RECEPTS = 'UPDATE_LIST_RECEPTS';

export const updateListRecepts = (newRecept) => {
  return {
    type: UPDATE_LIST_RECEPTS,
    payload: {
      newRecept
    }
  }
};
