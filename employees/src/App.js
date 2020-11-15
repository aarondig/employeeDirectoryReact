import React, {useReducer, useState} from "react";
import Wrapper from "./components/wrapper";
import Banner from "./components/banner";
import List from "./components/employeesList"
import Employees from "./components/employees.json"
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case "search":
     
    case "sort":
      return [...state].sort((a,b)=>(a.name>b.name) ? 1: -1);
    default:
      return state;
    }

}



function App() {
const [employees, dispatch] = useReducer(reducer, Employees);
const [text, setText] = useState();

function search(value){


}




setEmployees({
  type: "search",
  input: null
});

  return (
    <div className="App">
      <Wrapper>
        <Banner />
        <form onSubmit={e => {
          e.preventDefault()
          dispatch({ type: "search", text })
          }}>
          <input type="text" value={text} onChange={e => e.target.value}></input>
        </form>
        <List employees={employees} setEmployees={employees, dispatch}/>
      </Wrapper>
    </div>
  );
}

export default App;
