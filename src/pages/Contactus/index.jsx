import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  Text,
  TextArea,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ContactusPage = () => {
  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col font-dinnextltarabic items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[72px] items-center justify-start w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="h-[745px] mx-auto w-full">
              <Img
                className="h-[745px] m-auto object-cover w-full"
                src="images/img_map.png"
                alt="map"
              />
              <div className="absolute bg-gradient  bottom-[0] h-[317px] inset-x-[0] mx-auto w-full"></div>
              <div className="absolute flex flex-col md:gap-10 gap-[281px] inset-x-[0] items-center justify-start mx-auto top-[3%] w-[86%]">
                <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
                <Img
                  className="h-12 w-12"
                  src="images/img_linkedin.svg"
                  alt="linkedin"
                />
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[33px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[-152px] mx-auto w-[84%] z-[1]"
              orientation="horizontal"
            >
              <div className="bg-blue_gray-800 flex flex-col items-center justify-start sm:ml-[0] p-10 sm:px-5 rounded-[32px] shadow-bs1 w-full">
                <div className="flex flex-col items-center justify-start mb-[50px] w-[44%] md:w-full">
                  <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-5 w-[55%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_group460.svg')",
                      }}
                    >
                      <Img
                        className="h-8 my-1 w-8"
                        src="images/img_save.svg"
                        alt="save"
                      />
                    </div>
                    <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-light_blue-300 sm:text-xl tracking-[-0.80px]"
                        size="txtDINNextLTArabicBold24"
                      >
                        Email adress
                      </Text>
                      <Text
                        className="text-base text-center text-white-A700 tracking-[-0.36px]"
                        size="txtDINNextLTArabicRegular16"
                      >
                        info@smart1.ai
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue_gray-800 flex flex-col items-center justify-start sm:ml-[0] p-10 sm:px-5 rounded-[32px] shadow-bs1 w-full">
                <div className="flex flex-col items-center justify-start mb-[51px] w-1/2 md:w-full">
                  <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-5 w-[49%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_group460.svg')",
                      }}
                    >
                      <Img
                        className="h-8 my-1 w-8"
                        src="images/img_call.svg"
                        alt="call"
                      />
                    </div>
                    <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-light_blue-300 sm:text-xl tracking-[-0.80px]"
                        size="txtDINNextLTArabicBold24"
                      >
                        Phone number
                      </Text>
                      <Text
                        className="text-base text-center text-white-A700 tracking-[-0.36px]"
                        size="txtDINNextLTArabicRegular16"
                      >
                        +966 56 332 8204
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue_gray-800 flex flex-col items-center justify-start sm:ml-[0] p-[34px] sm:px-5 rounded-[32px] shadow-bs1 w-full">
                <div className="flex flex-col items-center justify-start my-1.5 w-[99%] md:w-full">
                  <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-5 w-[24%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_group460.svg')",
                      }}
                    >
                      <Img
                        className="h-8 my-1 w-8"
                        src="images/img_linkedin_yellow_700.svg"
                        alt="linkedin"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-light_blue-300 sm:text-xl tracking-[-0.80px]"
                        size="txtDINNextLTArabicBold24"
                      >
                        Location
                      </Text>
                      <Text
                        className="leading-[26.00px] text-base text-center text-white-A700 tracking-[-0.36px] w-full"
                        size="txtDINNextLTArabicRegular16"
                      >
                        Mansoura, in front of the governorate building, Ali Ibn
                        Al-Ghali, fifth floor, office 505, Dakahlia Governorate
                        35511.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex md:flex-col flex-row gap-[31px] items-center justify-start max-w-[1245px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-start justify-start">
              <a
                href="javascript:"
                className="capitalize text-center text-lg text-light_blue-300 tracking-[2.64px]"
              >
                <Text size="txtDINNextLTArabicBold18">Contact us</Text>
              </a>
              <Text
                className="capitalize sm:text-[40px] md:text-[46px] text-[50px] text-center text-yellow-700 tracking-[-0.36px]"
                size="txtDINNextLTArabicBold50Yellow700"
              >
                Get in Touch with Us
              </Text>
              <Text
                className="leading-[37.00px] lowercase text-white-A700 text-xl tracking-[-0.36px] w-full"
                size="txtDINNextLTArabicRegular20"
              >
                We hope to be able to assist you sufficiently. Leave us your
                message and we will be happy to reply to you as soon as possible
                and to answer your inquiry sufficiently.
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-[58%] md:w-full">
              <div className="flex flex-col font-lato gap-[27px] items-center justify-start w-full">
                <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtLatoMedium16"
                  >
                    Name
                  </Text>
                  <div className="border border-light_blue-300 border-solid flex flex-row font-cairo items-center justify-start p-[13px] rounded-lg w-full">
                    <Text
                      className="sm:flex-1 ml-[11px] text-base text-white-A700 w-[4%] sm:w-full"
                      size="txtCairoSemiBold16"
                    >
                      Mo
                    </Text>
                    <Line className="bg-light_blue-300 h-[19px] my-[5px] w-px" />
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtLatoBold16"
                  >
                    Email
                  </Text>
                  <Input
                    name="email"
                    placeholder="m.helal@bdassmart.com"
                    className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="w-full"
                    type="email"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtLatoBold16"
                  >
                    Phono
                  </Text>
                  <Input
                    name="group653"
                    placeholder="052245324562525"
                    className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 text-base text-right w-full"
                    wrapClassName="w-full"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700"
                    size="txtLatoMedium16"
                  >
                    message
                  </Text>
                  <TextArea
                    className="bg-transparent border border-solid border-white-A700 font-cairo font-semibold leading-[normal] pb-[35px] pl-6 pr-[35px] pt-4 sm:px-5 rounded-lg text-base text-right placeholder:text-white-A700 text-white-A700 w-full"
                    name="group650"
                    placeholder="Write your message here.."
                  ></TextArea>
                </div>
              </div>
              <Button
                className="!text-white-A700 cursor-pointer font-bold font-cairo leading-[normal] min-w-[720px] md:min-w-full rounded-lg text-base text-center"
                color="light_blue_300"
                size="md"
                variant="fill"
              >
                Send
              </Button>
            </div>
          </div>
          <Footer className="bg-blue_gray-800 flex items-center justify-center md:px-5 shadow-bs1 w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactusPage;
