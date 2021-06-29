import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  INCOMPLETE_TODO,
} from "./types.jsx";

const initialState = {
  allList: [],
  completeList: [],
  incompleteList: [],
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
    case COMPLETE_TODO:
      return {
        ...state,
        incompleteList: (state.incompleteList[action.payload.id] = ""),
        completeList: action.payload,
      };
    case INCOMPLETE_TODO:
      return {
        ...state,
        completeList: (state.completeList[action.payload.id] = ""),
        incompleteList: [...state.incompleteList, action.payload],
      };
    default:
      return state;
  }
};
