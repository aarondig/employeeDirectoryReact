import React, {useReducer, useState} from "react";
import Wrapper from "./components/wrapper";
import Banner from "./components/banner";
import List from "./components/employeesList"
import Employees from "./components/employees.json"
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case "search":
      return action.input;
    case "sort":
      return state.filter((_, index) => {
        return index !== action.index;
      });
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
const [employeesState, setEmployees] = useReducer(reducer, Employees);
const [text, setText] = useState();

// setEmployees({
//   type: "search",
//   input: null
// });

  return (
    <div className="App">
      <Wrapper>
        <Banner />
        {/* <form onSubmit={enter => {
          enter.preventDefault()
          setEmployees({ type: "search", text })
          }}>
          <input value={text} onChange={enter => enter.target.value}></input>
        </form> */}
        <List data={employeesState} setEmployees={setEmployees}/>
      </Wrapper>
    </div>
  );
}

export default App;
