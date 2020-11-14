import React from "react";
import "./style.css";

function List(props) {
  return <article className="container d-flex justify-content-center">
  <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  {props.data.map((card) => (
          // <div key={card.id} className="card" onClick={props.handleClick}>
          //   <img id={card.id} src={card.image} className="card-img-top" />
          // </div>
          <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        ))}
  </tbody>
</table>
</article>;
}

export default List;