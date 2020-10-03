import React, { Component } from "react";
import Counters from "./counters";
class Home extends Component {
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
      <React.Fragment>
        <Counters
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onReset={onReset}
          onAdd={onAdd}
          updateItemName={updateItemName}
          counters={counters}
          itemName={itemName}
        />
      </React.Fragment>
    );
  }
}

export default Home;
