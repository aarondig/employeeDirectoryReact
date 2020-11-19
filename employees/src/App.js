import React, {useReducer, useState} from "react";
import Wrapper from "./components/wrapper";
import Banner from "./components/banner";
import List from "./components/employeesList"
import Employees from "./components/employees.json"
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case "search":
     if (action.text = this.value){

     }
    case "sort":
      return [...state].sort((a,b)=>(a.name>b.name) ? 1: -1);
    default:
      return state;
    }

}



function App() {
const [employees, dispatch] = useReducer(reducer, Employees);
const [text, setText] = useState({value: ""});



  return (
    <div className="App">
      <Wrapper>
        <Banner />
        <input className="input col-sm-6" value={text} onChange={e => setText(e.target.value)} placeholder="Search Employees"/>
        <List employees={employees} setEmployees={employees, dispatch} text={text}/>
      </Wrapper>
    </div>
  );
}

export default App;
