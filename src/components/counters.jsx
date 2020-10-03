import Counter from "./counter";
import React, { Component } from "react";

class Counters extends Component {
  state = {
    input: "",
  };
  render() {
    const {
      onReset,
      onDecrement,
      onIncrement,
      onDelete,
      onAdd,
      counters,
      updateItemName,
      itemName
    } = this.props;
    return (
      <>
        <div className="container">
          <div className="form-row">
            <div className="col-md-8 ">
              <input
                type="text"
                className="form-control m-2"
                id="inlineFormInput"
                placeholder="Item Name"
                value={itemName}
                onChange={updateItemName}
              />
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary ml-2" onClick={onAdd}>
                Add
              </button>
              <button className="btn btn-danger m-2" onClick={onReset}>
                Reset
              </button>
            </div>
          </div>
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onAdd={onAdd}
              counter={counter}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Counters;
