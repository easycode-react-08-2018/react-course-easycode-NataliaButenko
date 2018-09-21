export const INGREDIENTS = 'ingredients';

export const ingredients = (ingredient) => {
  return {
    type: INGREDIENTS,
    payload: {
      ingredient
    }
  }
};
