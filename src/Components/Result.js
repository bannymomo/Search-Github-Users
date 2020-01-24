import React from "react";
export const Result = props => {
  return (
    <div className="result">
      <a href={props.user.html_url}>
        <img className="logo" src={props.user.avatar_url} alt="logo" />
      </a>
      <div>{props.user.login}</div>
    </div>
  );
};
