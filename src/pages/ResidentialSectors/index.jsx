import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ResidentialSectorsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col font-dinnextltarabic items-center justify-start mx-auto w-full">
        <div className="md:h-[1191px] h-[823px] md:px-5 relative w-full">
          <Img
            className="h-[823px] m-auto object-cover w-full"
            src="images/img_pexelspixabay534151_823x1440.png"
            alt="pexelspixabayFiftyThree"
          />
          <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[21px] sm:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
            <Text
              className="capitalize mt-[234px] text-center text-lg text-light_blue-300 tracking-[2.64px]"
              size="txtDINNextLTArabicBold18"
            >
              Residential
            </Text>
            <div className="flex flex-col gap-[25px] items-center justify-start mb-[260px] mt-4">
              <Text
                className="capitalize leading-[49.00px] sm:text-4xl md:text-[38px] text-[40px] text-center text-yellow-700 tracking-[-0.36px]"
                size="txtDINNextLTArabicBold40Yellow700"
              >
                <>
                  empowers property owners managers
                  <br />
                  and home builders to effectively manage
                </>
              </Text>
              <Text
                className="leading-[37.00px] lowercase text-center text-white-A700 text-xl tracking-[-0.36px] w-full"
                size="txtDINNextLTArabicRegular20"
              >
                startup offering automation and integration solutions to
                commercial and residential property Users Founded in 2018 in
                Riyadh, Saudi Arabia
              </Text>
            </div>
          </div>
        </div>
        <Text
          className="leading-[37.00px] lowercase mt-12 text-center text-white-A700 text-xl tracking-[-0.36px] w-[74%] sm:w-full"
          size="txtDINNextLTArabicRegular20"
        >
          <span className="text-white-A700 font-dinnextltarabic capitalize font-normal">
            start-up
          </span>
          <span className="text-white-A700 font-dinnextltarabic font-normal">
            {" "}
            offering automation and integration solutions to commercial and
            residential property Users Founded in 2018 in Riyadh, Saudi Arabia,
            we are a Master System Integrator (MSI) start-up providing smart
            solutions under one interface to improve the overall user experience{" "}
          </span>
          <span className="text-white-A700 font-dinnextltarabic capitalize font-normal">
            start-up
          </span>
          <span className="text-white-A700 font-dinnextltarabic font-normal">
            {" "}
            offering automation and integration solutions to commercial and
            residential property Users Founded in 2018 in Riyadh, Saudi Arabia,
            we are a Master System Integrator (MSI) start-up providing smart
            solutions under one interface to improve the overall user experience
          </span>
        </Text>
        <div className="bg-blue_gray-800 md:h-[1036px] sm:h-[588px] h-[740px] mt-12 pt-[100px] md:px-5 relative w-full">
          <Img
            className="absolute bottom-[0] h-[379px] inset-x-[0] mx-auto object-cover md:w-full"
            src="images/img_group_379x1440.png"
            alt="group"
          />
          <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[91px] h-max inset-y-[0] items-center justify-start left-[7%] my-auto w-[82%]">
            <div className="flex flex-col items-start justify-start w-[47%] md:w-full">
              <Text
                className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-light_blue-300 tracking-[-2.00px]"
                size="txtDINNextLTArabicBold48"
              >
                visitor management system
              </Text>
              <Text
                className="leading-[28.00px] mt-0.5 text-lg text-white-A700 tracking-[-0.40px] w-full"
                size="txtDINNextLTArabicRegular18WhiteA700"
              >
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic capitalize text-left text-xl font-normal">
                  start-up
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic lowercase text-left text-xl font-normal">
                  {" "}
                  offering automation and integration solutions to commercial
                  and residential property Users Founded in 2018 in Riyadh,
                  Saudi Arabia{" "}
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic capitalize text-left text-xl font-normal">
                  start-up
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic lowercase text-left text-xl font-normal">
                  {" "}
                  offering automation and integration solutions to commercial
                  and residential property Users Founded in 2018 in Riyadh,
                  Saudi Arabia{" "}
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic capitalize text-left text-xl font-normal">
                  start-up
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic lowercase text-left text-xl font-normal">
                  {" "}
                  offering automation and integration solutions to commercial
                  and residential property Users Founded in 2018 in Riyadh,
                  Saudi Arabia
                </span>
              </Text>
              <Button
                className="common-pointer capitalize cursor-pointer font-bold font-cairo leading-[normal] min-w-[322px] mt-5 rounded-lg text-center text-sm"
                onClick={() => navigate("/visitormanagementsystem")}
                color="white_A700"
                size="md"
                variant="fill"
              >
                read more
              </Button>
            </div>
            <Img
              className="h-[540px] md:h-auto object-cover rounded-[32px] w-[540px] sm:w-full"
              src="images/img_image.png"
              alt="image_Two"
            />
          </div>
        </div>
        <div className="bg-blue_gray-800 sm:h-[540px] h-[740px] md:h-[988px] md:px-5 relative w-full">
          <div className="flex flex-col m-auto w-full">
            <Img
              className="h-[511px] mx-auto object-cover md:w-full"
              src="images/img_group_511x1440.png"
              alt="group_One"
            />
            <Img
              className="h-[379px] mt-[-150.46px] mx-auto object-cover md:w-full z-[1]"
              src="images/img_group_379x1440.png"
              alt="group_Two"
            />
          </div>
          <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[91px] h-max inset-y-[0] items-center justify-start left-[7%] my-auto w-[82%]">
            <Img
              className="h-[540px] md:h-auto object-cover rounded-[32px] w-[540px] sm:w-full"
              src="images/img_image.png"
              alt="image_Five"
            />
            <div className="flex flex-col items-start justify-start w-[47%] md:w-full">
              <Text
                className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-light_blue-300 tracking-[-2.00px]"
                size="txtDINNextLTArabicBold48"
              >
                visitor management system
              </Text>
              <Text
                className="leading-[28.00px] mt-0.5 text-lg text-white-A700 tracking-[-0.40px] w-full"
                size="txtDINNextLTArabicRegular18WhiteA700"
              >
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic capitalize text-left text-xl font-normal">
                  start-up
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic lowercase text-left text-xl font-normal">
                  {" "}
                  offering automation and integration solutions to commercial
                  and residential property Users Founded in 2018 in Riyadh,
                  Saudi Arabia{" "}
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic capitalize text-left text-xl font-normal">
                  start-up
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic lowercase text-left text-xl font-normal">
                  {" "}
                  offering automation and integration solutions to commercial
                  and residential property Users Founded in 2018 in Riyadh,
                  Saudi Arabia{" "}
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic capitalize text-left text-xl font-normal">
                  start-up
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic lowercase text-left text-xl font-normal">
                  {" "}
                  offering automation and integration solutions to commercial
                  and residential property Users Founded in 2018 in Riyadh,
                  Saudi Arabia
                </span>
              </Text>
              <Button
                className="common-pointer capitalize cursor-pointer font-bold font-cairo leading-[normal] min-w-[322px] mt-5 rounded-lg text-center text-sm"
                onClick={() => navigate("/visitormanagementsystem")}
                color="white_A700"
                size="md"
                variant="fill"
              >
                read more
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-blue_gray-800 sm:h-[540px] h-[740px] md:h-[988px] md:px-5 relative w-full">
          <div className="flex flex-col m-auto w-full">
            <Img
              className="h-[511px] mx-auto object-cover md:w-full"
              src="images/img_group_511x1440.png"
              alt="group_Three"
            />
            <Img
              className="h-[379px] mt-[-150.46px] mx-auto object-cover md:w-full z-[1]"
              src="images/img_group_379x1440.png"
              alt="group_Four"
            />
          </div>
          <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[91px] h-max inset-y-[0] items-center justify-start left-[7%] my-auto w-[82%]">
            <div className="flex flex-col items-start justify-start w-[47%] md:w-full">
              <Text
                className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-light_blue-300 tracking-[-2.00px]"
                size="txtDINNextLTArabicBold48"
              >
                visitor management system
              </Text>
              <Text
                className="leading-[28.00px] mt-0.5 text-lg text-white-A700 tracking-[-0.40px] w-full"
                size="txtDINNextLTArabicRegular18WhiteA700"
              >
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic capitalize text-left text-xl font-normal">
                  start-up
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic lowercase text-left text-xl font-normal">
                  {" "}
                  offering automation and integration solutions to commercial
                  and residential property Users Founded in 2018 in Riyadh,
                  Saudi Arabia{" "}
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic capitalize text-left text-xl font-normal">
                  start-up
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic lowercase text-left text-xl font-normal">
                  {" "}
                  offering automation and integration solutions to commercial
                  and residential property Users Founded in 2018 in Riyadh,
                  Saudi Arabia{" "}
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic capitalize text-left text-xl font-normal">
                  start-up
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic lowercase text-left text-xl font-normal">
                  {" "}
                  offering automation and integration solutions to commercial
                  and residential property Users Founded in 2018 in Riyadh,
                  Saudi Arabia
                </span>
              </Text>
              <Button
                className="common-pointer capitalize cursor-pointer font-bold font-cairo leading-[normal] min-w-[322px] mt-5 rounded-lg text-center text-sm"
                onClick={() => navigate("/visitormanagementsystem")}
                color="white_A700"
                size="md"
                variant="fill"
              >
                read more
              </Button>
            </div>
            <Img
              className="h-[540px] md:h-auto object-cover rounded-[32px] w-[540px] sm:w-full"
              src="images/img_image.png"
              alt="image_Eight"
            />
          </div>
        </div>
        <div className="bg-blue_gray-800 sm:h-[540px] h-[740px] md:h-[988px] pb-[100px] md:px-5 relative w-full">
          <Img
            className="absolute h-[511px] inset-x-[0] mx-auto object-cover top-[0] md:w-full"
            src="images/img_group_511x1440.png"
            alt="group_Five"
          />
          <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[91px] h-max inset-y-[0] items-center justify-start left-[7%] my-auto w-[82%]">
            <Img
              className="h-[540px] md:h-auto object-cover rounded-[32px] w-[540px] sm:w-full"
              src="images/img_image.png"
              alt="image_Ten"
            />
            <div className="flex flex-col items-start justify-start w-[47%] md:w-full">
              <Text
                className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-light_blue-300 tracking-[-2.00px]"
                size="txtDINNextLTArabicBold48"
              >
                visitor management system
              </Text>
              <Text
                className="leading-[28.00px] mt-0.5 text-lg text-white-A700 tracking-[-0.40px] w-full"
                size="txtDINNextLTArabicRegular18WhiteA700"
              >
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic capitalize text-left text-xl font-normal">
                  start-up
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic lowercase text-left text-xl font-normal">
                  {" "}
                  offering automation and integration solutions to commercial
                  and residential property Users Founded in 2018 in Riyadh,
                  Saudi Arabia{" "}
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic capitalize text-left text-xl font-normal">
                  start-up
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic lowercase text-left text-xl font-normal">
                  {" "}
                  offering automation and integration solutions to commercial
                  and residential property Users Founded in 2018 in Riyadh,
                  Saudi Arabia{" "}
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic capitalize text-left text-xl font-normal">
                  start-up
                </span>
                <span className="text-white-A700 tracking-[-0.36px] font-dinnextltarabic lowercase text-left text-xl font-normal">
                  {" "}
                  offering automation and integration solutions to commercial
                  and residential property Users Founded in 2018 in Riyadh,
                  Saudi Arabia
                </span>
              </Text>
              <Button
                className="common-pointer capitalize cursor-pointer font-bold font-cairo leading-[normal] min-w-[322px] mt-5 rounded-lg text-center text-sm"
                onClick={() => navigate("/visitormanagementsystem")}
                color="white_A700"
                size="md"
                variant="fill"
              >
                read more
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-blue_gray-800 flex items-center justify-center mt-[72px] md:px-5 shadow-bs1 w-full" />
      </div>
    </>
  );
};

export default ResidentialSectorsPage;
