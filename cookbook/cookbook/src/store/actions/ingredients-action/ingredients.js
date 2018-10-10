export const INGREDIENTS_TRIGGER = 'INGREDIENTS_TRIGGER';
export const TRIGGER_INGRIDIENT_STATE = 'TRIGGER_INGRIDIENT_STATE';

export const ingredientsTrigger = (ingredientId) => {
  return {
    type: INGREDIENTS_TRIGGER,
    payload: function (state) {
      let newIngredients = state.map(ingredient => {
        if(ingredient.id === ingredientId) {
          return {...ingredient, checked: !ingredient.checked};
        }
        return ingredient;
      });
      return newIngredients;
    }
  }
};

export const triggerIngridientState = (receptId, ingredientId) => {
  return {
    type: TRIGGER_INGRIDIENT_STATE,
    payload: function (state) {
      return state.map(recept => {
        if(recept.id === receptId) {
          const newIngridients = recept.ingredients.map(ingredient => {
            if(ingredient.id === ingredientId) {
              return {...ingredient, checked: !ingredient.checked};
            }
            return ingredient;
          });
          recept.ingredients = newIngridients;
          return recept
        }
        return recept;
      });
    }
  };
};
