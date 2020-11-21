import React, { useEffect, useReducer, useRef, useState } from "react";
import Wrapper from "./components/wrapper";
import Banner from "./components/banner";
import List from "./components/employeesList";
import employeesArray from "./components/employees.json";
import "./App.css";

// function reducer(state, action) {
//   switch (action.type) {
//     case "sort":
//       return [...state].sort((a, b) => (a.name > b.name ? 1 : -1));
//     default:
//       return state;
//   }
// }
// function handleToggle(toggle, action){
//   console.log("click")

// }

function App() {
  const [employees, setEmployees] = useState(employeesArray);
  const [text, setText] = useState("");

  const [toggle, setToggle] = useState(false);
  useEffect(function () {
    if (toggle === "ascending") {
      console.log(true)
      setEmployees([...employees].sort((a, b) => (a.name > b.name ? 1 : -1)));
      console.log(toggle);
    } else if (toggle === "descending") {
      console.log(false)
      setEmployees([...employees].sort((a, b) => (a.name > b.name ? -1 : 1)));
    } else {
      setEmployees(employeesArray);
    }
  }, [toggle]);

  return (
    <div className="App">
      <Wrapper>
        <Banner />
        <input
          className="input col-sm-6"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search Employees"
        />
        <List
          employees={employees}
          toggle={toggle}
          setToggle={setToggle}
          text={text}
        />
      </Wrapper>
    </div>
  );
}

export default App;
