export const UPDATE_LIST_INGREDIENTS = 'UPDATE_LIST_INGREDIENTS';

export const updateListIngredientsRecept = (receptId, newListIngredients) => {
  return {
    type: UPDATE_LIST_INGREDIENTS,
    payload: function (state) {
      return state.map(recept => {
        if (recept.id === receptId) {
          let newRecept = {...recept};
          newListIngredients.forEach(ingr => {
            const ingrIndex = newRecept.ingredients.findIndex(i => i.id === ingr.id);

            if(ingrIndex !== -1) {
              newRecept.ingredients[ingrIndex].quantity += 1;
            } else {
              newRecept.ingredients.push({...ingr, quantity: 1, checked: false});
            }
          });
          return newRecept;
        }
        return recept;
      });
    }
  }
};
