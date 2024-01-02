import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded" };
const variants = {
  outline: {
    white_A700_7e: "border-2 border-solid border-white-A700_7e",
    white_A700: "border border-solid border-white-A700 text-white-A700",
    yellow_700: "border border-solid border-yellow-700",
  },
  fill: {
    white_A700: "bg-white-A700 shadow-bs text-blue_gray-800",
    light_blue_300_33: "bg-light_blue-300_33",
    gray_700: "bg-gray-700",
    light_blue_300: "bg-light_blue-300 text-blue_gray-800",
  },
};
const sizes = { xs: "p-1", sm: "p-[11px]", md: "p-3.5", lg: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "white_A700_7e",
    "white_A700",
    "yellow_700",
    "light_blue_300_33",
    "gray_700",
    "light_blue_300",
  ]),
};

export { Button };
