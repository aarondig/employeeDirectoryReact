import React, {useReducer} from "react";
import Wrapper from "./components/wrapper";
import Banner from "./components/banner";
import List from "./components/employeesList"
import Employees from "./components/employees.json"
import './App.css';



function App() {

  const [employees, dispatch] = useReducer((state, action) => {
    if (action === "sort") {
      return state + 1;
    } else if (action === "subtract") {
      return state - 1;
    } else {
      return state;
    }
  }, 0);

  function search(){
    const searchResults = [];


  }



  return (
    <div className="App">
      <Wrapper>
        <Banner />
        <List data={Employees} sort={dispatch("sort")}/>
      </Wrapper>
    </div>
  );
}

export default App;
