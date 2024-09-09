import React from "react";

const Input = ({ inputs, value, setValue }) => {
  const onChangeValue = (e) => {
    const inputValue = e.target.value;

    setValue((prev) => ({ ...prev, [inputs.name]: inputValue }));
  };

  return (
    <input
      {...inputs}
      value={value[inputs.name]}
      onChange={(e) => onChangeValue(e)}
      className="w-full h-[48px] text-sm px-4 outline-none border border-solid border-gray-300 rounded-md"
    />
  );
};

export default Input;
