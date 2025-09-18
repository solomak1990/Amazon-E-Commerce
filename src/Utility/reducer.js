import { Type } from "./action.type";

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );

      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        const updatedBasket = state.basket.map((item) =>
          item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );

        return {
          ...state,
          basket: updatedBasket,
        };
      }

      case Type.REMOVE_FROM_BASKET:
        const updatedBasket = state.basket
          .map((item) => {
            if (item.id === action.id) {
              return {
                ...item,
                amount: item.amount - 1,
              };
            }
            return item;
          })
          .filter((item) => item.amount > 0);
      
        return {
          ...state,
          basket: updatedBasket,
        };

  
    default:
      return state;
  }
};
