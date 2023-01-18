import React from "react";

interface ICustomButton {
  label: string;
  styles?: string;
  onClick?: () => void;
}

const CustomButton: React.FunctionComponent<ICustomButton> = (props) => {
  const { label, styles, onClick } = props;
  return (
    <button
      className={` rounded-lg py-3 px-5 font-bold max-w-[115px] w-full ${styles}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
