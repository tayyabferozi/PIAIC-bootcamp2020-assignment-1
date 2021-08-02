import React from "react";

const Box = ({ heading, headStyle, children, ...rest }) => {
  return (
    <div className="Box" {...rest}>
      {heading && (
        <h3 className="MiniHeading" style={headStyle}>
          {heading}
        </h3>
      )}
      {children}
    </div>
  );
};

export default Box;
