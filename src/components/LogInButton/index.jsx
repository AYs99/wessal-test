import React from "react";

import { Text } from "components";

const LogInButton = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-blue_gray-800 text-center text-lg w-auto"
          size="txtDINNextLTArabicMedium18Bluegray800"
        >
          {props?.text1}
        </Text>
        <div className="absolute bg-light_blue-300 flex flex-col h-full inset-[0] items-center justify-center m-auto sm:px-5 px-[33px] py-[13px] rounded-lg w-[457px] md:w-full">
          <Text
            className="text-blue_gray-800 text-center text-lg w-auto"
            size="txtDINNextLTArabicMedium18Bluegray800"
          >
            {props?.text1}
          </Text>
        </div>
      </div>
    </>
  );
};

LogInButton.defaultProps = { text: "Log in", text1: "Log in" };

export default LogInButton;
