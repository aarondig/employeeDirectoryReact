import React, {useReducer, useState} from "react";
import Wrapper from "./components/wrapper";
import Banner from "./components/banner";
import List from "./components/employeesList"
import Employees from "./components/employees.json"
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case "sort":
      return [...state].sort((a, b)=>(a.name > b.name) ? 1: -1);
    default:
      return state;
    }

}



function App() {
const [employees, setEmployees] = useReducer(reducer, Employees);
const [text, setText] = useState("");

  const [toggle, setToggle] = useState(false);
  

  if (toggle === true){
    // setEmployees({ type: "sort" })
    console.log(toggle);
  }
 



  return (
    <div className="App">
      <Wrapper>
        <Banner />
        <input className="input col-sm-6" value={text} onChange={e => setText(e.target.value)} placeholder="Search Employees"/>
        <List employees={employees} toggle={toggle} setToggle={setToggle} text={text}/>
      </Wrapper>
    </div>
  );
}

export default App;
