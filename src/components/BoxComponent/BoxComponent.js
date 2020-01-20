import React from "react";
import "./box.css";

const BoxComponent = ({ borderSize, children }) => {
  const styles = {
    borderWidth: borderSize
  };
  return (
    <div className="box" style={styles}>
      {children}
    </div>
  );
};

export default BoxComponent;
