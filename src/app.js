import React, { useState } from "react";
import "./App.css";

// IMPORTING LIST
import { List } from "./components/List";

// importing material ui add-button
import AddIcon from "@material-ui/icons/Add";

// IMPORTING REDUX
import { connect } from "react-redux";
import { add } from "./redux/actions";

function App(add) {
	let [item, setItem] = useState("");
	// let [listItem, setListItem] = useState([]);

	const changeInput = (event) => {
		setItem(event.target.value);
	};

	const updateList = (event) => {
		event.preventDefault();
		console.log(add);
		add(item);
		// setListItem((listval) => {
		// 	return [...listval, item];
		// });
		// setItem("");
	};

	// const deleteItem = (id) => {
	// 	setListItem((arritem) => {
	// 		return arritem.filter((arrayElement, index) => {
	// 			return index !== id;
	// 		});
	// 	});
	// };

	return (
		<div className="fullPage">
			<div className="box">
				<form onSubmit={updateList}>
					<h1>ToDo List</h1>
					<div className="inputfield">
						<input
							required
							type="text"
							placeholder="Add an Item"
							value={item}
							onChange={changeInput}
						/>
						<button className="addbutton">
							<AddIcon className="icon" />
						</button>
					</div>
					<br />
					<br />
					<div className="ListContainer">
						{/* {listItem.map((listExtend, index) => {
							return (
								<List
									list={listExtend}
									key={index}
									id={index}
									onSelect={deleteItem}
								/>
							);
						})} */}
					</div>
				</form>
			</div>
		</div>
	);
}

const mapStatetoProps = (state) => {
	return {
		allList: state.Reducer.allList,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		add: function (data) {
			dispatch(add(data));
		},
	};
};
export default connect(mapStatetoProps, mapDispatchtoProps)(App);
