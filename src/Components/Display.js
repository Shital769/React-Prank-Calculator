import React from "react";

export const Display = ({strToDisplay, isPrank}) => {
  const className = isPrank? "display prank" : "display";
  return (
    <div className="display prank">{strToDisplay || "0.00"}</div>
  );
};



