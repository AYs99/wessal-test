import React from "react";

import { Button, Img, Line, Text } from "components";

const ForgotyourpasswordPage = () => {
  return (
    <>
      <div className="bg-blue_gray-800 flex sm:flex-col md:flex-col flex-row font-dinnextltarabic sm:gap-10 md:gap-10 items-center justify-between mx-auto md:pl-10 sm:pl-5 pl-[146px] w-full">
        <div className="flex flex-col items-center justify-start w-[36%] md:w-full">
          <Img
            className="h-[100px]"
            src="images/img_group_white_a700.svg"
            alt="group"
          />
          <Text
            className="capitalize mt-[33px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.50px]"
            size="txtDINNextLTArabicBold32WhiteA700"
          >
            Type the activation code
          </Text>
          <div className="flex flex-row font-cairo items-center justify-center mt-5 w-[72%] md:w-full">
            <div className="h-16 relative w-16">
              <Text
                className="ml-[25px] my-auto text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.00px]"
                size="txtCairoMedium24"
              >
                1
              </Text>
              <div className="absolute border border-solid border-white-A700 h-16 inset-[0] justify-center m-auto rounded-[18px] w-16"></div>
            </div>
            <Button
              className="cursor-pointer font-medium h-16 ml-6 rounded-[18px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[1.00px] w-16"
              color="white_A700"
              size="sm"
              variant="outline"
            >
              5
            </Button>
            <div className="bg-white-A700_19 border border-light_blue-300 border-solid flex flex-col h-16 items-center justify-end ml-6 p-[17px] rounded-[18px] w-16">
              <Line className="bg-light_blue-300 h-px mt-[29px] w-[87%]" />
            </div>
            <div className="border border-solid border-white-A700 h-16 ml-[23px] rounded-[18px] w-16"></div>
          </div>
          <Button
            className="cursor-pointer font-medium mt-5 rounded-lg text-center text-lg w-[457px]"
            color="light_blue_300"
            size="lg"
            variant="fill"
          >
            Confirm
          </Button>
          <div className="flex flex-col items-center justify-start mt-[21px]">
            <Text
              className="text-center text-sm text-white-A700"
              size="txtDINNextLTArabicBold14WhiteA700"
            >
              01:00
            </Text>
            <Text
              className="mt-0.5 text-center text-light_blue-300 text-sm"
              size="txtCairoBold14Lightblue300"
            >
              <span className="text-light_blue-300 font-dinnextltarabic font-bold">
                Didn’t receive code?{" "}
              </span>
              <span className="text-white-A700 font-dinnextltarabic font-bold">
                Resend
              </span>
            </Text>
          </div>
        </div>
        <div className="h-[745px] relative w-[57%] md:w-full">
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

export default ForgotyourpasswordPage;
