import React from "react";
import { Result } from "./Result";
export const Main = props => {
  if (props.initialView) {
    return <h2>Please enter name to search</h2>;
  } else {
    if (props.isLoading) {
      return <h2>Is loading</h2>;
    } else if (props.error) {
      return <h2>{props.error.message}</h2>;
    } else {
      return (
        <div className="main">
          {props.users.map((user, index) => (
            <Result user={user} key={index} />
          ))}
        </div>
      );
    }
  }
};
