import { ADD_TODO, DELETE_TODO } from "./types.jsx";

const initialState = {
  allList: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        allList: [...state.allList, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        allList: state.allList.filter((arrayElement, index) => {
          return index !== action.payload;
        }),
      };
    default:
      return state;
  }
};
