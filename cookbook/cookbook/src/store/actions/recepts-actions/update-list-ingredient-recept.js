export const UPDATE_LIST_INGREDIENTS = 'UPDATE_LIST_INGREDIENTS';

export const updateListIngredientsRecept = (receptId, newListIngredients) => {
  return {
    type: UPDATE_LIST_INGREDIENTS,
    payload: {
      receptId,
      newListIngredients
    }
  }
};
