import React from "react";

const Card = ({ children, className }) => {
  const widthSize = className ? className : 'w-full'
  return <div className={`${widthSize} p-4 shadow-card rounded-md bg-white`}>{children}</div>;
};

export default Card;