import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Line, Text } from "components";

const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[34px] mt-12 mx-auto w-[87%]">
          <div className="flex flex-col gap-8 items-center justify-center max-w-[751px] w-full">
            <div className="flex flex-col gap-3 items-center justify-center w-full">
              <Text
                className="capitalize text-2xl md:text-[22px] text-center text-light_blue-300 sm:text-xl w-auto"
                size="txtDINNextLTArabicBold24"
              >
                Newsletter
              </Text>
              <Text
                className="leading-[24.00px] max-w-[457px] md:max-w-full text-center text-sm text-white-A700"
                size="txtDINNextLTArabicRegular14WhiteA700"
              >
                Be the first one to know about discounts, offers and events
                weekly in your mailbox. Unsubscribe whenever you like with one
                click.
              </Text>
            </div>
            <div className="bg-gray-700 flex md:flex-col flex-row gap-3 items-center justify-start max-w-[751px] sm:pl-5 pl-8 pr-2 py-2 rounded-[32px] w-full">
              <CheckBox
                className="font-dinnextltarabic leading-[normal] text-base text-center text-white-A700"
                inputClassName="mr-[5px]"
                name="enteryouremail"
                id="enteryouremail"
                label="Enter your email"
                shape="square"
                size="xs"
              ></CheckBox>
              <div className="flex flex-1 flex-col items-end justify-center w-full">
                <Button
                  className="!text-white-A700 cursor-pointer font-bold font-dinnextltarabic h-12 leading-[normal] rounded-[24px] text-center text-sm w-[136px]"
                  color="light_blue_300"
                  size="sm"
                  variant="fill"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <Line className="bg-yellow-700 h-px mt-[52px] w-full" />
          <div className="flex flex-col items-center justify-start mt-8 w-[85%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-[44%] md:w-full">
                <Img
                  className="h-[82px]"
                  src="images/img_group_white_a700.svg"
                  alt="group"
                />
                <Text
                  className="leading-[24.00px] text-blue_gray-400 text-sm w-full"
                  size="txtDINNextLTArabicRegular14Bluegray400"
                >
                  <span className="text-white-A700 font-dinnextltarabic text-left font-normal">
                    We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat...
                  </span>
                  <span className="text-blue_gray-400 font-dinnextltarabic text-left font-normal">
                    {" "}
                  </span>
                  <span className="text-yellow-700 font-dinnextltarabic text-left font-bold leading-[normal]">
                    Read More
                  </span>
                </Text>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <div className="bg-gray-700 flex flex-col h-12 md:h-auto items-center justify-center rounded-[50%] w-12">
                    <div className="flex flex-col h-5 items-center justify-start w-5">
                      <div className="flex flex-col h-5 items-center justify-start w-5">
                        <Img
                          className="h-5 w-5"
                          src="images/img_facebook.svg"
                          alt="facebook"
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    className="flex h-12 items-center justify-center w-12"
                    shape="circle"
                    color="gray_700"
                    size="sm"
                    variant="fill"
                  >
                    <Img className="h-6" src="images/img_info.svg" alt="info" />
                  </Button>
                  <Button
                    className="flex h-12 items-center justify-center w-12"
                    shape="circle"
                    color="gray_700"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_twitteroutline.svg"
                      alt="twitteroutline"
                    />
                  </Button>
                  <Button
                    className="flex h-12 items-center justify-center w-12"
                    shape="circle"
                    color="gray_700"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                  </Button>
                  <Button
                    className="flex h-12 items-center justify-center w-12"
                    shape="circle"
                    color="gray_700"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-5"
                      src="images/img_volume.svg"
                      alt="volume"
                    />
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start md:mt-0 mt-[23px] w-[45%] md:w-full">
                <div className="flex flex-col gap-6 items-start justify-center w-auto">
                  <Text
                    className="capitalize text-lg text-light_blue-300 w-auto"
                    size="txtDINNextLTArabicBold18"
                  >
                    Quick links
                  </Text>
                  <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDINNextLTArabicRegular14WhiteA700"
                      >
                        Home
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDINNextLTArabicRegular14WhiteA700"
                      >
                        About Us
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDINNextLTArabicRegular14WhiteA700"
                      >
                        Sectors
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDINNextLTArabicRegular14WhiteA700"
                      >
                        Partner
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDINNextLTArabicRegular14WhiteA700"
                      >
                        Services
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-6 items-start justify-center sm:ml-[0] ml-[103px] w-auto">
                  <Text
                    className="capitalize text-lg text-light_blue-300 w-auto"
                    size="txtDINNextLTArabicBold18"
                  >
                    Support
                  </Text>
                  <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="common-pointer text-sm text-white-A700"
                        size="txtDINNextLTArabicRegular14WhiteA700"
                        onClick={() => navigate("/contactus")}
                      >
                        Contact us
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDINNextLTArabicRegular14WhiteA700"
                      >
                        Online Chat
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDINNextLTArabicRegular14WhiteA700"
                      >
                        Whatsapp
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDINNextLTArabicRegular14WhiteA700"
                      >
                        Telegram
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-6 items-start justify-center sm:ml-[0] ml-[125px] w-auto">
                  <Text
                    className="capitalize text-lg text-light_blue-300 w-auto"
                    size="txtDINNextLTArabicBold18"
                  >
                    FAQ
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-auto">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtDINNextLTArabicRegular14WhiteA700"
                    >
                      Terms of use
                    </Text>
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtDINNextLTArabicRegular14WhiteA700"
                    >
                      Privacy policy
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-[41px] text-sm text-white-A700"
            size="txtDINNextLTArabicRegular14WhiteA700"
          >
            © All Rights Reserved For Smart One
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
