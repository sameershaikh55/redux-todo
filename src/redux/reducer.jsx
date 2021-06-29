import { All_List } from "./types.jsx";

const initialState = {
	allList: [],
};

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case All_List:
			return {
				...state,
				allList: [...state.allList, action.payload],
			};
		default:
			return state;
	}
};
