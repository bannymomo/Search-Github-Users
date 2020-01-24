import React from "react";
export const Nav = props => {
  return (
    <div className="nav">
      <h1>Search Github Users</h1>
      <input
        onKeyPress={event => props.onKeyPress(event)}
        onChange={event => props.handleChange(event)}
        className="input"
        value={props.inputValue}
        placeholder="enter the name you search"
      ></input>
      <button onClick={props.handleClick} className="button">
        search
      </button>
    </div>
  );
};
