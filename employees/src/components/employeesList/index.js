import React, {useReducer} from "react";
import "./style.css";

function List( {employees, toggle, setToggle, handleToggle, text}) {
  return <article className="container d-flex justify-content-center">
  <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Profile</th>
      <th scope="col"><a onClick ={handleToggle, () => setToggle(!toggle)}>Name</a>
      </th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Date of Birth</th>
    </tr>
  </thead>
  <tbody>
  {employees.filter(employee => employee.name.includes(text)).map(filteredEmployee => (
          <tr>
          <th key={filteredEmployee.id} scope="row">
          <img src={filteredEmployee.image} alt={filteredEmployee.name} />
          </th>
          <td className={filteredEmployee.name}>{filteredEmployee.name}</td>
          <td>{filteredEmployee.phone}</td>
          <td>{filteredEmployee.email}</td>
          <td>{filteredEmployee.dob}</td>
        </tr>
        ))}
  </tbody>
</table>
</article>;
}

export default List;