import React, { useState } from "react";
import "./App.css";

// IMPORTING LIST
import { List } from "./components/List";

// importing material ui add-button
import AddIcon from "@material-ui/icons/Add";

// IMPORTING REDUX
import { connect } from "react-redux";
import { add, deleteTodo, completeTodo, incompleteTodo } from "./redux/actions";

function App({
  add,
  allList,
  deleteTodo,
  completeTodo,
  incompleteTodo,
  completeList,
  incompleteList,
}) {
  let [item, setItem] = useState("");
  console.log(completeList, "completeList");
  console.log(incompleteList, "incompleteList");
  const changeInput = (event) => {
    setItem(event.target.value);
  };

  const updateList = (event) => {
    event.preventDefault();
    add(item);
    setItem("");
  };

  const deleteItem = (id) => {
    deleteTodo(id);
  };

  const checkedCompleted = (e, val, id) => {
    if (e.target.checked === true) {
      completeTodo({ val, id });
    } else {
      incompleteTodo({ val, id });
    }
  };

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
            {allList.map((listExtend, index) => {
              return (
                <List
                  list={listExtend}
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                  checkedCompleted={checkedCompleted}
                />
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    allList: state.Reducer.allList,
    completeList: state.Reducer.completeList,
    incompleteList: state.Reducer.incompleteList,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    add: function (data) {
      dispatch(add(data));
    },
    deleteTodo: function (id) {
      dispatch(deleteTodo(id));
    },
    completeTodo: function (id) {
      dispatch(completeTodo(id));
    },
    incompleteTodo: function (id) {
      dispatch(incompleteTodo(id));
    },
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(App);
