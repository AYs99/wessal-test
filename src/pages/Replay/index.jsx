import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, Input, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const ReplayPage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[23px] w-[23px]"
          src="images/img_assignmentind_white_a700.svg"
          alt="assignmentind"
        />
      ),
      label: "Team Members",
      href: "/teammember",
      active: window.location.pathname === "/teammember",
    },
    {
      icon: (
        <Img
          className="h-[23px] w-[23px]"
          src="images/img_receipt.svg"
          alt="receipt"
        />
      ),
      label: "news letter",
      href: "/newsletter",
      active: window.location.pathname === "/newsletter",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_alternateemail_blue_gray_800.svg"
          alt="alternateemail"
        />
      ),
      label: "Messages",
      href: "/messages",
      active: window.location.pathname === "/messages",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_settings_white_a700.svg"
          alt="settings"
        />
      ),
      label: "Settings",
      href: "/settings",
      active: window.location.pathname === "/settings",
    },
    {
      icon: (
        <Img
          className="h-[23px] w-[23px]"
          src="images/img_businesscenter.svg"
          alt="businesscenter"
        />
      ),
      label: "control job",
      href: "/controljob",
      active: window.location.pathname === "/controljob",
    },
    {
      icon: (
        <Img
          className="h-7 mb-1 w-7"
          src="images/img_imageicondashboard.svg"
          alt="imageicondashbo"
        />
      ),
      label: "services",
      href: "/services",
      active: window.location.pathname === "/services",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_checkmark_white_a700.svg"
          alt="checkmark"
        />
      ),
      label: "features",
      href: "/feature",
      active: window.location.pathname === "/feature",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_supervisedusercircle.svg"
          alt="superviseduserc"
        />
      ),
      label: "About Us",
      href: "/aboutus",
      active: window.location.pathname === "/aboutus",
    },
    {
      icon: (
        <Img
          className="h-7 mb-1 w-7"
          src="images/img_thumbsup_white_a700.svg"
          alt="thumbsup"
        />
      ),
      label: "Partners",
      href: "/partners",
      active: window.location.pathname === "/partners",
    },
  ];

  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col font-dinnextltarabic items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[254px] bg-blue_gray-800 flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs1 top-[0]" />
          <div className="flex flex-1 flex-col gap-9 items-center justify-start md:px-5 w-full">
            <div className="bg-blue_gray-800 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] shadow-bs1 w-full">
              <a
                href="javascript:"
                className="capitalize md:ml-[0] ml-[38px] text-2xl md:text-[22px] sm:text-xl text-yellow-700 tracking-[-0.36px]"
              >
                <Text size="txtDINNextLTArabicBold24Yellow700">Contact Us</Text>
              </a>
              <Img
                className="h-6 md:ml-[0] ml-[645px] w-6"
                src="images/img_carbonnotificationnew.svg"
                alt="carbonnotificat"
              />
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-row h-[59px] items-center justify-center md:ml-[0] ml-[30px] p-1 rounded-md w-1/5 md:w-full"
                style={{ backgroundImage: "url('images/img_group237576.svg')" }}
              >
                <div className="h-[45px] md:h-[50px] mb-[5px] ml-2 relative w-[85%]">
                  <div className="absolute flex flex-row font-dinnextltarabic gap-[9px] h-full inset-y-[0] items-start justify-between left-[0] my-auto w-[73%]">
                    <Img
                      className="h-[45px] md:h-auto object-cover w-[45px]"
                      src="images/img_maskgroup.png"
                      alt="maskgroup_One"
                    />
                    <div className="flex flex-col items-center justify-start mt-[5px]">
                      <Text
                        className="text-[13.47px] text-white-A700"
                        size="txtDINNextLTArabicMedium1347"
                      >
                        Mostafa Helal
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="absolute bottom-[0] right-[0] text-[11px] text-light_blue-300"
                    size="txtInterMedium11"
                  >
                    m.helal@bdassmart.com
                  </Text>
                </div>
                <Img
                  className="h-[19px] mr-[7px] w-[19px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[88%] md:w-full">
              <div className="flex flex-col font-dinnextltarabic relative w-[12%]">
                <Text
                  className="mx-auto text-white-A700 text-xl"
                  size="txtDINNextLTArabicBold20WhiteA700"
                >
                  Mostafa Helal
                </Text>
                <Text
                  className="mt-[-0.01px] text-sm text-yellow-700 z-[1]"
                  size="txtDINNextLTArabicRegular14"
                >
                  01017018250
                </Text>
              </div>
              <Text
                className="mt-2.5 text-light_blue-300 text-xl"
                size="txtCairoBold20"
              >
                Lorem ipsum dolor sit amet consectetur
              </Text>
              <div className="bg-light_blue-300_54 flex flex-col font-dinnextltarabic items-center justify-start mt-0.5 p-[13px] rounded-[10px]">
                <Text
                  className="leading-[28.00px] text-lg text-white-A700 w-full"
                  size="txtDINNextLTArabicRegular18WhiteA700"
                >
                  Lorem ipsum dolor sit amet consectetur. Id nunc purus vitae
                  congue aliquet. Vivamus ultricies est in sed integer pharetra
                  eu. Sapien donec enim purus sem. Non eros commodo feugiat
                  sodales interdum tristique. Ullamcorper ac sit placerat eu
                  nunc donec.
                </Text>
              </div>
              <div className="bg-yellow-700_59 flex flex-col font-dinnextltarabic items-center justify-start md:ml-[0] ml-[298px] mt-5 p-3 rounded-[10px]">
                <Text
                  className="leading-[28.00px] text-lg text-white-A700 w-full"
                  size="txtDINNextLTArabicRegular18WhiteA700"
                >
                  Lorem ipsum dolor sit amet consectetur. Id nunc purus vitae
                  congue aliquet. Vivamus ultricies est in sed integer pharetra
                  eu. Sapien donec enim purus sem. Non eros commodo feugiat
                  sodales interdum tristique. Ullamcorper ac sit placerat eu
                  nunc donec.
                </Text>
              </div>
              <div className="bg-light_blue-300_54 flex flex-col font-dinnextltarabic items-center justify-start mt-[19px] p-[13px] rounded-[10px]">
                <Text
                  className="leading-[28.00px] text-lg text-white-A700 w-full"
                  size="txtDINNextLTArabicRegular18WhiteA700"
                >
                  Lorem ipsum dolor sit amet consectetur. Id nunc purus vitae
                  congue aliquet. Vivamus ultricies est in sed integer pharetra
                  eu. Sapien donec enim purus sem. Non eros commodo feugiat
                  sodales interdum tristique. Ullamcorper ac sit placerat eu
                  nunc donec.
                </Text>
              </div>
              <Input
                name="groupThirtyTwo"
                placeholder="replay"
                className="capitalize font-dinnextltarabic font-medium p-0 placeholder:text-light_blue-300 text-[17.59px] text-left w-full"
                wrapClassName="flex mt-[42px] rounded w-full"
                suffix={
                  <Img
                    className="mt-auto mb-1 h-6 ml-[35px]"
                    src="images/img_save_light_blue_300.svg"
                    alt="save"
                  />
                }
                color="light_blue_300"
                size="sm"
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReplayPage;
