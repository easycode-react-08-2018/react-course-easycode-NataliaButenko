export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export const removeIngredientFromRecept = (receptId) => {
  return {
    type: REMOVE_INGREDIENT,
    payload: function (state) {
      return state.map(recept => {
        if(recept.id === receptId) {
          const newIngredients = recept.ingredients.reduce((done, ingredient) => {
            if(!ingredient.checked) {
              done.push(ingredient)
            }
            return done;
          }, []);
          recept.ingredients = newIngredients;
        }
        return recept;
      })
    }
  };
};
