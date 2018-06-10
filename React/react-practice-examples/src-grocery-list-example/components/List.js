import React from "react";

const List = props => (
  <ul className="list-group">
    Using the map method, render one li element displaying the text property of
    each grocery object.
    {props.groceries.map(item => (
      <li key ={item.id}>{item.name}</li>
    ))}
  </ul>
);

export default List;
