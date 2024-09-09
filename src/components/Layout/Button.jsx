import React from "react";

const Button = ({ children, onClick, className, disabled }) => {
  return (
    <button
      className={`${className} rounded-md bg-red-500 text-sm text-white px-4 py-2 ${
        disabled
          ? "bg-gray-400 text-gray-700 cursor-not-allowed"
          : "hover:bg-red-600 transition-all duration-300"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
