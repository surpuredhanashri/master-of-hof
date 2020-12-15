import React, { Component } from "react";
import "./HOF.css";
import HOFonUserType from "./HOFonUserType";
import Table from "./Table";
import HOFonAge from "./HOFonAge";

export default class HOF extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }
  render() {
    let { userData } = this.state;
    console.log(userData);
    return (
      <React.Fragment>
        <h2>Display All items</h2>
        <Table userData={userData}></Table>
        <HOFonUserType data={this.state.userData}></HOFonUserType>
        <HOFonAge data={this.state.userData}></HOFonAge>
        <div>
          <h2>Total Years of the Designers</h2>
          <h3>
            {this.state.userData
              .filter((obj) => {
                if (obj.user_type === "Designer") return true;
              })
              .reduce((acc, obj) => acc.years + obj.years)}
          </h3>
        </div>
      </React.Fragment>
    );
  }
}
