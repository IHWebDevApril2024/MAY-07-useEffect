import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = { userName: "Mike" };
  }
  render() {
    return <h2>This is the class component, hello {this.state.userName}</h2>;
  }
}

export default ClassComponent;
