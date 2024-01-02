import React from "react";

import { Img, Input, Text } from "components";
import LogInButton from "components/LogInButton";

const LoginPage = () => {
  return (
    <>
      <div className="bg-blue_gray-800 flex sm:flex-col md:flex-col flex-row font-dinnextltarabic sm:gap-10 md:gap-10 items-center justify-between mx-auto md:pl-10 sm:pl-5 pl-[131px] w-full">
        <div className="flex flex-col items-center justify-start w-[35%] md:w-full">
          <Img
            className="h-[100px]"
            src="images/img_group_white_a700.svg"
            alt="group"
          />
          <Text
            className="mt-[33px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.50px]"
            size="txtDINNextLTArabicBold32WhiteA700"
          >
            Login to your account
          </Text>
          <div className="flex flex-col items-center justify-start mt-[23px] w-full">
            <div className="flex flex-col gap-[9px] items-start justify-start w-full">
              <Text
                className="text-base text-white-A700"
                size="txtDINNextLTArabicRegular16"
              >
                Email*
              </Text>
              <Input
                name="email_One"
                placeholder="m.helal@bdassmart.com"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="w-full"
                type="email"
                shape="round"
                color="gray_400"
              ></Input>
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-start mt-[13px] w-full">
              <Text
                className="text-base text-white-A700"
                size="txtDINNextLTArabicRegular16"
              >
                Password*
              </Text>
              <Input
                name="password_One"
                placeholder="**********"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="flex w-full"
                suffix={
                  <div className="mb-1.5 ml-[35px] sm:w-full sm:mx-0 w-[5%] bg-gray-400_87">
                    <Img
                      className="my-auto"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                  </div>
                }
                shape="round"
                color="gray_400"
              ></Input>
            </div>
            <LogInButton className="bg-light_blue-300 flex md:h-[102px] h-[66px] justify-end mt-[49px] sm:px-5 px-[33px] py-[13px] relative rounded-lg w-[457px] sm:w-full" />
          </div>
        </div>
        <div className="h-[745px] relative w-[56%] md:w-full">
          <Img
            className="h-[745px] m-auto object-cover w-full"
            src="images/img_rm373batch2041_745x728.png"
            alt="rm373batch2041"
          />
          <div className="absolute bg-gradient  bottom-[0] h-[317px] inset-x-[0] mx-auto w-full"></div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
