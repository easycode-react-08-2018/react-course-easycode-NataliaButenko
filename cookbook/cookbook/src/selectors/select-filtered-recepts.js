//import {createSelector} from 'reselect';

import {selectFilterText} from "./select-filter-text";

// export const selectFilteredRecepts = createSelector(
//   [selectFilterText, (state) => state.recepts],
//   (filteredText, recepts) => {
//     return recepts.filter(recept => recept.name.toLowerCase().includes(filteredText));
//   }
// );

export const selectFilteredRecepts = (state) => {
  const filteredText = selectFilterText(state);
  const recepts = state.recepts;
  const receptName = recepts.filter(recept => recept.name.toLowerCase().includes(filteredText));

  const ingridientName = recepts.reduce((done, recept) => {
    recept.ingredients.forEach(ingredient => {
      if(ingredient.name.toLowerCase().includes(filteredText)) {
        return done.push(recept);
      }
    });
    return done;
  }, []);

  if(receptName.length) {
    return receptName;
  }

  if(ingridientName.length) {
    return ingridientName;
  }
  return [];
};
