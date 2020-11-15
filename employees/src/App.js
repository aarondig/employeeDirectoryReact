import React, {useReducer, useState} from "react";
import Wrapper from "./components/wrapper";
import Banner from "./components/banner";
import List from "./components/employeesList"
import Employees from "./components/employees.json"
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case "search":
      return {employees: [...Employees, { text: action.text}]};
    case "sort":
      return [...state].sort((a,b)=>(a.name>b.name) ? 1: -1);
    // case "prioritize":
    //   return state.map((item, index) => {
    //     if (index === action.index) {
    //       return Object.assign({}, item, {
    //         priority: !item.priority
    //       });
    //     }
    //     return item;
    //   });
    default:
      return state;
    }

}



function App() {
const [employees, dispatch] = useReducer(reducer, Employees);
const [text, setText] = useState();

// setEmployees({
//   type: "search",
//   input: null
// });

  return (
    <div className="App">
      <Wrapper>
        <Banner />
        <form onSubmit={enter => {
          enter.preventDefault()
          dispatch({ type: "search", text })
          }}>
          <input value={text} onChange={enter => enter.target.value}></input>
        </form>
        <List employees={employees} setEmployees={employees, dispatch}/>
      </Wrapper>
    </div>
  );
}

export default App;
