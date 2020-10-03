import React, { Component } from "react";
import {
  HorizontalRuleIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@primer/octicons-react";
class Counter extends Component {
  styles = {
    color: "#fff",
    backgroundColor: "#28a745bd",
    borderColor: "#28a745",
  };
  render() {
    return (
      <div className="row">
        <span className="col-md-6" style={this.styles}>
          <p className="lead">{this.props.counter.itemName}</p>
        </span>
        <span className="col-md-2">
          <span
            style={{ fontSize: 20, fontWeight: "bold" }}
            className={this.getBadgeClasses()}
          >
            {this.formatCount()}
          </span>
        </span>
        <span className="col-md-4">
          <span
            className="badge badge-primary m-2"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            <TriangleUpIcon size={24}></TriangleUpIcon>
          </span>
          <span
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="badge badge-warning m-2"
          >
            <TriangleDownIcon size={24}></TriangleDownIcon>
          </span>
          <span
            className="badge badge-danger m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            <HorizontalRuleIcon size={24}></HorizontalRuleIcon>
          </span>
        </span>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? <span>Zero</span> : count;
  }
}

export default Counter;
