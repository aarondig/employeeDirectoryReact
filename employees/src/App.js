import React, {useReducer} from "react";
import Wrapper from "./components/wrapper";
import Banner from "./components/banner";
import List from "./components/employeesList"
import Employees from "./components/employees.json"
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case "search":
      return [
        ...state,
        {
          id: state.length * Math.random(),
          name: action.name
        }
      ];
    case "sort":
      return state.filter((_, index) => {
        return index !== action.index;
      });
    case "prioritize":
      return state.map((item, index) => {
        if (index === action.index) {
          return Object.assign({}, item, {
            priority: !item.priority
          });
        }
        return item;
      });
    default:
      return state;
    }

}

function App() {
const [employees, setEmployees] = useReducer(reducer, 0);


  return (
    <div className="App">
      <Wrapper>
        <Banner />
        <List data={Employees} edit={setEmployees}/>
      </Wrapper>
    </div>
  );
}

export default App;
