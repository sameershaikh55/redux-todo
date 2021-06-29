import { All_List } from "./types";

// ADD NEW TO-DO
export const add = (data) => {
	return {
		type: All_List,
		payload: data,
	};
};
