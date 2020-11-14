import React from "react";
import "./style.css";

function List(props) {
  return <article className="container d-flex justify-content-center">
  <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Profile</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Date of Birth</th>
    </tr>
  </thead>
  <tbody>
  {props.data.map((card) => (
          // <div key={card.id} className="card" onClick={props.handleClick}>
          //   <img id={card.id} src={card.image} className="card-img-top" />
          // </div>
          <tr>
          <th scope="row"></th>
          <td>{card.name}</td>
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