export const CHENGE_FILTER_RECEPT = 'filter_recept';

export const filterRecept = (filterText) => {
  return {
    type: CHENGE_FILTER_RECEPT,
    payload: filterText
  }
};
