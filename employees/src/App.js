import Wrapper from "./components/wrapper";
import Banner from "./components/banner";
import List from "./components/employeesList"
import Employees from "./components/employees.json"
import './App.css';



function App() {
  return (
    <div className="App">
      <Wrapper>
        <Banner />
        <List data={Employees}/>
      </Wrapper>
    </div>
  );
}

export default App;
