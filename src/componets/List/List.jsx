import React from "react";
import "./list.css";

function List({ userInfo }) {
  return (
    <ul>
      {userInfo.map((elem) => {
        return (
          <div className="listInfo">
            <div className="nameAge">
              <div className="title">{elem.title}</div>
              <p>{`(${elem.age} years old)`}</p>
            </div>
          </div>
        );
      })}
    </ul>
  );
}

export default List;
