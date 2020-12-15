import React, { Component } from "react";
import Table from "./Table";

export default class HOFonUserType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: "",
    };
  }
  changeHandler = (event) => {
    this.setState(
      {
        userType: event.target.value,
      },
      () => {
        console.log(this.state.userType);
      }
    );
  };
  render() {
    const { data } = this.props;
    let filteredData = data.filter((userObj) => {
      console.log(userObj.user_type, this.state.userType);
      if (userObj.user_type === this.state.userType) return true;
    });
    console.log(filteredData);
    return (
      <div>
        <h1>Display based on user type</h1>
        <select value={this.state.userType} onChange={this.changeHandler}>
          <option value="">Select userType</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Teacher">Teacher</option>
          <option value="Entreprenuer">Entreprenuer</option>
        </select>
        <Table userData={filteredData}></Table>
      </div>
    );
  }
}
