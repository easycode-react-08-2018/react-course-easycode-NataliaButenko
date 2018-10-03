export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export const removeIngredientFromRecept = (receptId) => {
  return {
    type: REMOVE_INGREDIENT,
    payload: {
      receptId
    }
  };
};
