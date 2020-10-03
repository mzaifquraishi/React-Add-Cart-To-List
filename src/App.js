import React, { Component } from "react";

import Navbar from "./components/navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";

class App extends Component {
  state = {
    imageUrl: "https://picsum.photos/500?grayscale",
    counters: [{ id: 1, value: 1, itemName: "Test" }],
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value === 0) return;
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleAdd = () => {
    let counters = this.state.counters;
    counters = counters.concat({
      id: this.state.counters.length + 1,
      value: 1,
      itemName: this.state.itemName,
    });
    this.setState({ counters,itemName: "" });
  };
  styles = {
    backgroundImage: "url('https://picsum.photos/500?grayscale')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "600px",
  };
  handleupdateItemName = (e) => {
    this.setState({ itemName: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <header>
            <Navbar
              totalCounters={
                this.state.counters.filter((c) => c.value > 0).length
              }
            ></Navbar>
          </header>
          <main className="container" style={this.styles}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Home
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onReset={this.handleReset}
                    onAdd={this.handleAdd}
                    counters={this.state.counters}
                    updateItemName={this.handleupdateItemName}
                    itemName={this.state.itemName}
                  />
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </main>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
