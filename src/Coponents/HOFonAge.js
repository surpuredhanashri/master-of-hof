import React from "react";
import Table from "./Table";

export default function HOFonAge(props) {
  let filteredArr = props.data.filter((userObj) => {
    if (userObj.age > 28 && userObj.age <= 50) return true;
  });

  return (
    <div>
      <h1>
        Filter Data based on age greater than 28 and less than or equal to 50
      </h1>
      <Table userData={filteredArr}></Table>
    </div>
  );
}
