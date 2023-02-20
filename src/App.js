import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment / Decrement Counter</h1>
        <h2>using React and Redux</h2>
        <div className="quantity">
          <a className="quantity_minus" title="Decrement">
            <span onClick={() => dispatch(decNumber())}>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myState}
          />
          <a className="quantity_plus" title="Increment">
            <span onClick={() => dispatch(incNumber(5))}>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
