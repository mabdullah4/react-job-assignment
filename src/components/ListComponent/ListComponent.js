import React from "react";
import "./list.css";

const ListComponent = ({ li }) => {
  return (
    <ul>
      {li.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

export default ListComponent;
