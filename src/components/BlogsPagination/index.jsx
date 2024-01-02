import React from "react";

import { Button, Img, Text } from "components";

const BlogsPagination = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="flex h-7 items-center justify-center rounded-lg w-7"
          size="xs"
        >
          <Img className="h-5" src="images/img_forward.svg" alt="forward" />
        </Button>
        <Button
          className="!text-yellow-700 cursor-pointer font-inter h-7 rounded-lg text-center text-xs w-7"
          color="yellow_700"
          size="xs"
          variant="outline"
        >
          {props?.label1}
        </Button>
        <div className="flex flex-col h-7 md:h-auto items-center justify-center px-2 py-1 rounded-lg w-7">
          <Text
            className="text-center text-light_blue-300 text-xs w-auto"
            size="txtInterRegular12"
          >
            {props?.text}
          </Text>
        </div>
        <div className="flex flex-col h-7 md:h-auto items-center justify-center px-2 py-1 rounded-lg w-7">
          <Text
            className="text-center text-light_blue-300 text-xs w-auto"
            size="txtInterRegular12"
          >
            {props?.textOne}
          </Text>
        </div>
        <div className="flex flex-col h-7 md:h-auto items-center justify-center px-2 py-1 rounded-lg w-7">
          <Text
            className="text-center text-light_blue-300 text-xs w-auto"
            size="txtInterRegular12"
          >
            {props?.textTwo}
          </Text>
        </div>
        <div className="flex flex-col h-7 md:h-auto items-center justify-center px-2 py-1 rounded-lg w-7">
          <Text
            className="text-center text-light_blue-300 text-xs w-auto"
            size="txtInterRegular12"
          >
            {props?.textThree}
          </Text>
        </div>
        <Button
          className="flex h-7 items-center justify-center rounded-lg w-7"
          size="xs"
        >
          <Img
            className="h-5"
            src="images/img_arrowright.svg"
            alt="arrowright"
          />
        </Button>
      </div>
    </>
  );
};

BlogsPagination.defaultProps = {
  label1: "1",
  text: "2",
  textOne: "3",
  textTwo: "4",
  textThree: "5",
};

export default BlogsPagination;
