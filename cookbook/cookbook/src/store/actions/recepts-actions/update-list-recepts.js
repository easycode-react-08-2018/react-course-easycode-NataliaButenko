export const UPDATE_LIST_RECEPTS = 'UPDATE_LIST_RECEPTS';

export const updateListRecepts = (newRecept) => {
  return {
    type: UPDATE_LIST_RECEPTS,
    payload: function (state) {
      return state.map(recept => {
        if (recept.id === newRecept.id) {
          recept = newRecept;
          return recept;
        } else {
          return recept;
        }
      })
    }
  }
};
