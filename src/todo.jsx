import Badge from "./Badge";
import React, { useState } from "react";
import './todo.css'
function Todo() {
  let style = {
    "border-radius": "9px",
    border: "1px solid #777777"
  };

  let style2 = {
    position: "relative",
    top: "-12px",
    "margin-left": "1.8rem",
  };

  const [dis, setDis] = useState("None")

  let toggleHide = () => {
    setDis(dis==="None" ? "block" : "None")
  };

  return (
    <div className="pt-3 px-3 my-3" style={style}>
      <input
        class="form-check-input mt-2"
        type="checkbox"
        value=""
        id="flexCheckIndeterminate"
      />

      <span
        class="form-check-label px-3 fs-3 d-inline-block"
        for="flexCheckIndeterminate"
        onClick={toggleHide}
        style={{ width: "93%" }}
      >
        Todo 1
      </span>
      <div style={style2}>
        <Badge c="warning" />
        <Badge c="danger" />
        <Badge c="info" />
      </div>
      <div style={{ position: "relative", top: "-15px", paddingLeft: "1.8rem", display:dis}} className="animate">
        <hr />
        <p style={{marginBottom:"0px"}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam fugit temporibus, molestias quidem obcaecati voluptates nostrum quia distinctio suscipit quas explicabo earum eos, optio, alias aspernatur animi possimus inventore ut.
        </p>
      </div>
    </div>
  );
}

export default Todo;
