import Wrapper from "./components/wrapper";
import Banner from "./components/banner";
import List from "./components/employeesList"
import './App.css';



function App() {
  return (
    <div className="App">
      <Wrapper>
        <Banner />
        <List />
      </Wrapper>
    </div>
  );
}

export default App;
