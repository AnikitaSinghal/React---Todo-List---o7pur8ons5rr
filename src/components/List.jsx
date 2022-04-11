import React from "react";
function List(props) {
  return (
    <>
    <div className="list">
      {props.ele}
      <button
        onClick={(props) => {
          props.delete(props.index);
        }}
      >
        delete
      </button>
      <button
        onClick={(props) => {
          props.edits(props.index);
        }}
      >
        edit
      </button>
    </div>
    </>
  );
}
export default List;