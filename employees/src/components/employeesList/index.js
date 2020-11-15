import React, {useReducer} from "react";
import "./style.css";

function List({employees, setEmployees}) {
  return <article className="container d-flex justify-content-center">
  <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Profile</th>
      <th scope="col"><a onClick ={ () => setEmployees({ type: "sort" })}>Name</a>
      </th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Date of Birth</th>
    </tr>
  </thead>
  <tbody>
  {employees.map((card) => (
          <tr>
          <th key={card.id} scope="row">
          <img src={card.image} alt={card.name} />
          </th>
          <td className={card.name}>{card.name}</td>
          <td>{card.phone}</td>
          <td>{card.email}</td>
          <td>{card.dob}</td>
        </tr>
        ))}
  </tbody>
</table>
</article>;
}

export default List;