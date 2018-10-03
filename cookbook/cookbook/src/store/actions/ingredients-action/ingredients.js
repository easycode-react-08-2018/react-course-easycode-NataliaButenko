export const INGREDIENTS_TRIGGER = 'INGREDIENTS_TRIGGER';
export const TRIGGER_INGRIDIENT_STATE = 'TRIGGER_INGRIDIENT_STATE';

export const ingredientsTrigger = (ingredientId) => {
  return {
    type: INGREDIENTS_TRIGGER,
    payload: {
      ingredientId
    }
  }
};

export const triggerIngridientState = (receptId, ingredientId) => {
  return {
    type: TRIGGER_INGRIDIENT_STATE,
    payload: {
      receptId,
      ingredientId
    }
  };
};
