import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col font-dinnextltarabic sm:gap-10 md:gap-10 gap-20 items-start justify-start mx-auto overflow-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[78px] items-center max-w-[2140px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-[68%] md:w-full">
            <div className="h-[823px] relative w-full">
              <Img
                className="h-[823px] m-auto object-cover w-full"
                src="images/img_rm373batch2041.png"
                alt="rm373batch2041"
              />
              <div className="absolute bg-gradient  bottom-[0] flex flex-col inset-x-[0] items-end justify-end mx-auto p-[78px] md:px-10 sm:px-5 w-full">
                <Img
                  className="h-[62px] mr-[33px] mt-[113px] w-[62px]"
                  src="images/img_close.svg"
                  alt="close"
                />
              </div>
              <div className="absolute flex flex-col md:gap-10 gap-[143px] inset-x-[0] items-center justify-start mx-auto top-[3%] w-[86%]">
                <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                  <Img
                    className="h-[46px]"
                    src="images/img_favorite.svg"
                    alt="favorite"
                  />
                  <Text
                    className="mb-[9px] md:ml-[0] ml-[50px] md:mt-0 mt-3 text-base text-light_blue-300 tracking-[-0.36px]"
                    size="txtDINNextLTArabicBold16"
                  >
                    Home
                  </Text>
                  <Text
                    className="mb-[9px] md:ml-[0] ml-[41px] md:mt-0 mt-3 text-base text-white-A700 tracking-[-0.36px]"
                    size="txtDINNextLTArabicRegular16"
                  >
                    About us
                  </Text>
                  <Text
                    className="mb-[9px] md:ml-[0] ml-[41px] md:mt-0 mt-3 text-base text-white-A700 tracking-[-0.36px]"
                    size="txtDINNextLTArabicRegular16"
                  >
                    Sectors
                  </Text>
                  <Text
                    className="capitalize mb-[9px] md:ml-[0] ml-[41px] md:mt-0 mt-3 text-base text-white-A700 tracking-[-0.36px]"
                    size="txtDINNextLTArabicRegular16"
                  >
                    services
                  </Text>
                  <Text
                    className="mb-[9px] md:ml-[0] ml-[41px] md:mt-0 mt-3 text-base text-white-A700 tracking-[-0.36px]"
                    size="txtDINNextLTArabicRegular16"
                  >
                    Features
                  </Text>
                  <Text
                    className="mb-2 md:ml-[0] ml-[41px] md:mt-0 mt-[13px] text-base text-white-A700 tracking-[-0.36px]"
                    size="txtDINNextLTArabicRegular16"
                  >
                    Our partner
                  </Text>
                  <a className="mb-[9px] md:ml-[0] ml-[41px] md:mt-0 mt-3 text-base text-white-A700 tracking-[-0.36px]">
                    <Text
                      className="common-pointer"
                      size="txtDINNextLTArabicRegular16"
                      onClick={() => navigate("/contactus")}
                    >
                      Contact us
                    </Text>
                  </a>
                  <Text
                    className="common-pointer mb-2 md:ml-[0] ml-[41px] md:mt-0 mt-3.5 text-base text-white-A700 tracking-[-0.36px]"
                    size="txtDINNextLTArabicRegular16"
                    onClick={() => navigate("/contactus")}
                  >
                    Blogs
                  </Text>
                  <div className="flex md:flex-1 flex-row gap-1.5 items-start justify-between mb-2 md:ml-[0] ml-[308px] md:mt-0 mt-3.5 w-[6%] md:w-full">
                    <Text
                      className="text-base text-white-A700 tracking-[-0.36px]"
                      size="txtDINNextLTArabicRegular16"
                    >
                      English
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="images/img_favorite_white_a700.svg"
                      alt="favorite_One"
                    />
                  </div>
                </header>
                <Text
                  className="capitalize sm:text-[40px] md:text-[46px] text-[50px] text-center text-light_blue-300 tracking-[-0.36px]"
                  size="txtDINNextLTArabicBold50"
                >
                  <span className="text-light_blue-300 font-dinnextltarabic font-bold">
                    Smart one{" "}
                  </span>
                  <span className="md:text-[33px] sm:text-[31px] text-white-A700 font-dinnextltarabic text-[35px] font-bold">
                    connect people and places
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-[87%] md:w-full">
              <div className="md:h-[558px] h-[662px] sm:h-[951px] relative w-full">
                <Text
                  className="absolute capitalize inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 top-[0] tracking-[-0.36px] w-max"
                  size="txtDINNextLTArabicBold40"
                >
                  About us
                </Text>
                <div className="absolute bottom-[22%] flex flex-col items-start justify-start right-[0] w-1/2">
                  <Text
                    className="capitalize text-center text-lg text-light_blue-300 tracking-[2.64px]"
                    size="txtDINNextLTArabicBold18"
                  >
                    who are we?
                  </Text>
                  <Text
                    className="lowercase mt-[11px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 tracking-[-0.36px]"
                    size="txtDINNextLTArabicBold30"
                  >
                    Smart1 is a Platform with Mobile and Web App
                  </Text>
                  <Text
                    className="leading-[37.00px] lowercase mt-[13px] text-justify text-white-A700 text-xl tracking-[-0.36px] w-full"
                    size="txtDINNextLTArabicRegular20"
                  >
                    startup offering automation and integration solutions to
                    commercial and residential property Users Founded in 2018 in
                    Riyadh, Saudi Arabia, we are a Master System Integrator
                    (MSI) startup providing smart solutions under one interface
                    to improve the overall user experience
                  </Text>
                  <Button
                    className="common-pointer capitalize cursor-pointer font-bold font-cairo leading-[normal] min-w-[322px] mt-6 rounded-lg text-center text-sm"
                    onClick={() => navigate("/aboutus")}
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    read more
                  </Button>
                </div>
                <div className="absolute bottom-[0] md:h-[558px] h-[635px] sm:h-[951px] left-[0] w-1/2 md:w-full">
                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                    <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-between w-full">
                      <Img
                        className="h-[449px] md:h-auto object-cover rounded-[14px]"
                        src="images/img_pexelsmatimango4893862.png"
                        alt="pexelsmatimango"
                      />
                      <Img
                        className="h-[487px] md:h-auto sm:mt-0 mt-[71px] object-cover rounded-[14px]"
                        src="images/img_pexelstranmautritam326504.png"
                        alt="pexelstranmautr"
                      />
                    </div>
                  </div>
                  <div className="absolute bg-blue_gray-800 bottom-[8%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[31px] sm:px-5 rounded-[14px] shadow-bs2 w-[35%]">
                    <div className="flex flex-col items-center justify-start mt-[5px]">
                      <Text
                        className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[-0.36px]"
                        size="txtDINNextLTArabicBold40"
                      >
                        100+
                      </Text>
                      <Text
                        className="capitalize text-center text-xl text-yellow-700 tracking-[-0.36px]"
                        size="txtDINNextLTArabicRegular20Yellow700"
                      >
                        Users
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-blue_gray-800 flex flex-col items-center justify-start p-[13px] right-[6%] rounded-[14px] shadow-bs2 top-[12%] w-[38%]">
                    <div className="h-20 md:h-[100px] mb-[18px] mt-[23px] relative w-full">
                      <Text
                        className="absolute capitalize inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 top-[0] tracking-[-0.36px] w-max"
                        size="txtDINNextLTArabicBold40"
                      >
                        100+
                      </Text>
                      <Text
                        className="absolute bottom-[0] capitalize inset-x-[0] mx-auto text-center text-xl text-yellow-700 tracking-[-0.36px] w-max"
                        size="txtDINNextLTArabicRegular20Yellow700"
                      >
                        Connected Communities
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-blue_gray-800 flex flex-col items-center justify-start left-[7%] p-4 rounded-[14px] shadow-bs2 top-[0] w-[35%]">
                    <div className="h-20 md:h-[94px] mb-[15px] mt-5 relative w-full">
                      <Text
                        className="absolute capitalize inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 top-[0] tracking-[-0.36px] w-max"
                        size="txtDINNextLTArabicBold40"
                      >
                        100+
                      </Text>
                      <Text
                        className="absolute bottom-[0] capitalize inset-x-[0] mx-auto text-center text-xl text-yellow-700 tracking-[-0.36px] w-max"
                        size="txtDINNextLTArabicRegular20Yellow700"
                      >
                        Smart Units & Homes
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[-0.36px]"
                    size="txtDINNextLTArabicBold40"
                  >
                    Sectors
                  </Text>
                  <Text
                    className="lowercase mt-1 text-justify text-light_blue-300 text-xl tracking-[2.64px]"
                    size="txtDINNextLTArabicRegular20Lightblue300"
                  >
                    we offer Commercial and residential
                  </Text>
                  <div className="flex flex-col gap-[46px] items-center justify-start mt-[47px] w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[60px] w-[49%] md:w-full">
                        <Text
                          className="capitalize ml-0.5 md:ml-[0] text-center text-lg text-light_blue-300 tracking-[2.64px]"
                          size="txtDINNextLTArabicBold18"
                        >
                          residential
                        </Text>
                        <Text
                          className="leading-[41.00px] lowercase mt-[15px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 tracking-[-0.36px]"
                          size="txtDINNextLTArabicBold30"
                        >
                          <span className="text-white-A700 font-dinnextltarabic capitalize text-left font-bold">
                            empowers
                          </span>
                          <span className="text-white-A700 font-dinnextltarabic text-left font-bold">
                            <>
                              {" "}
                              property owners managers and
                              <br />
                            </>
                          </span>
                          <span className="text-white-A700 font-dinnextltarabic capitalize text-left font-bold">
                            home
                          </span>
                          <span className="text-white-A700 font-dinnextltarabic text-left font-bold">
                            {" "}
                            builders to effectively manage
                          </span>
                        </Text>
                        <Text
                          className="leading-[37.00px] lowercase mt-3 text-justify text-white-A700 text-xl tracking-[-0.36px] w-full"
                          size="txtDINNextLTArabicRegular20"
                        >
                          startup offering automation and integration solutions
                          to commercial and residential property Users Founded
                          in 2018 in Riyadh, Saudi Arabia, we are a Master
                          System Integrator (MSI) startup providing smart
                          solutions under one interface to improve the overall
                          user experience
                        </Text>
                        <Button
                          className="common-pointer capitalize cursor-pointer font-bold font-cairo leading-[normal] min-w-[322px] mt-6 rounded-lg text-center text-sm"
                          onClick={() => navigate("/residentialsectors")}
                          color="white_A700"
                          size="md"
                          variant="fill"
                        >
                          read more
                        </Button>
                      </div>
                      <div className="h-[463px] relative w-1/2 md:w-full">
                        <Img
                          className="h-[462px] m-auto object-cover rounded-[10px] w-full"
                          src="images/img_pexelspixabay534151.png"
                          alt="pexelspixabayFiftyThree"
                        />
                        <div className="absolute bg-gradient1  h-[463px] inset-[0] justify-center m-auto rotate-[180deg] rounded-[10px] w-full"></div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between w-full">
                      <div className="h-[463px] relative w-1/2 md:w-full">
                        <Img
                          className="h-[462px] m-auto object-cover rounded-[10px] w-full"
                          src="images/img_pexelslyhuot3939471.png"
                          alt="pexelslyhuot393"
                        />
                        <div className="absolute bg-gradient1  h-[463px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[59px] w-1/2 md:w-full">
                        <Text
                          className="capitalize text-center text-lg text-light_blue-300 tracking-[2.64px]"
                          size="txtDINNextLTArabicBold18"
                        >
                          Commercial
                        </Text>
                        <Text
                          className="leading-[41.00px] lowercase mt-[15px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 tracking-[-0.36px]"
                          size="txtDINNextLTArabicBold30"
                        >
                          <span className="text-white-A700 font-dinnextltarabic capitalize text-left font-bold">
                            Control{" "}
                          </span>
                          <span className="text-white-A700 font-dinnextltarabic text-left font-bold">
                            <>
                              your environment,
                              <br />
                            </>
                          </span>
                          <span className="text-white-A700 font-dinnextltarabic capitalize text-left font-bold">
                            engage
                          </span>
                          <span className="text-white-A700 font-dinnextltarabic text-left font-bold">
                            {" "}
                            your workplace community,
                          </span>
                        </Text>
                        <Text
                          className="leading-[37.00px] lowercase mt-3 text-justify text-white-A700 text-xl tracking-[-0.36px] w-full"
                          size="txtDINNextLTArabicRegular20"
                        >
                          startup offering automation and integration solutions
                          to commercial and residential property Users Founded
                          in 2018 in Riyadh, Saudi Arabia, we are a Master
                          System Integrator (MSI) startup providing smart
                          solutions under one interface to improve the overall
                          user experience
                        </Text>
                        <Button
                          className="common-pointer capitalize cursor-pointer font-bold font-cairo leading-[normal] min-w-[322px] mt-6 rounded-lg text-center text-sm"
                          onClick={() => navigate("/commercialsectors")}
                          color="white_A700"
                          size="md"
                          variant="fill"
                        >
                          read more
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <Text
              className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[-0.36px]"
              size="txtDINNextLTArabicBold40"
            >
              services
            </Text>
            <Text
              className="lowercase mt-1.5 text-justify text-light_blue-300 text-xl tracking-[2.64px]"
              size="txtDINNextLTArabicRegular20Lightblue300"
            >
              The Platform has a management system for or other services
            </Text>
            <div className="flex flex-col font-dmsans items-start justify-start mt-[46px] w-full">
              <div className="flex flex-col items-center justify-start w-[84%] md:w-full">
                <div className="gap-16 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="bg-blue_gray-800 hover:border-0 border-2 border-solid border-white-A700_75 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-14 md:px-10 sm:px-5 rounded-[32px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <Img
                      className="h-12 w-12"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="mt-8 text-2xl md:text-[22px] text-light_blue-300 sm:text-xl tracking-[-0.80px]"
                      size="txtDMSansBold24"
                    >
                      <>Visitors at user&#39;s unit</>
                    </Text>
                    <Text
                      className="leading-[26.00px] mt-[17px] text-base text-white-A700_90 tracking-[-0.36px] w-full"
                      size="txtDMSansRegular16"
                    >
                      <>
                        We&#39;ve done it carefully and simply. Combined with
                        the ingredients makes for beautiful landings.
                      </>
                    </Text>
                  </div>
                  <div className="hover:border-0 border-2 border-solid border-white-A700_75 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-14 md:px-10 sm:px-5 rounded-[32px] hover:shadow-bs1 hover:w-full w-full">
                    <Img
                      className="h-12 w-12"
                      src="images/img_favorite_light_blue_300.svg"
                      alt="favorite"
                    />
                    <Text
                      className="mt-[35px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.80px]"
                      size="txtDMSansBold24WhiteA700"
                    >
                      Housekeeping
                    </Text>
                    <Text
                      className="leading-[26.00px] mt-3.5 text-base text-white-A700_90 tracking-[-0.36px] w-full"
                      size="txtDMSansRegular16"
                    >
                      <>
                        We&#39;ve done it carefully and simply. Combined with
                        the ingredients makes for beautiful landings.
                      </>
                    </Text>
                  </div>
                  <div className="hover:border-0 border-2 border-solid border-white-A700_75 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-14 md:px-10 sm:px-5 rounded-[32px] hover:shadow-bs1 hover:w-full w-full">
                    <Img
                      className="h-12 w-12"
                      src="images/img_favorite_light_blue_300.svg"
                      alt="favorite"
                    />
                    <Text
                      className="mt-[35px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.80px]"
                      size="txtDMSansBold24WhiteA700"
                    >
                      Work OrdersTickets System
                    </Text>
                    <Text
                      className="leading-[26.00px] mt-[15px] text-base text-white-A700_90 tracking-[-0.36px] w-full"
                      size="txtDMSansRegular16"
                    >
                      <>
                        We&#39;ve done it carefully and simply. Combined with
                        the ingredients makes for beautiful landings.
                      </>
                    </Text>
                  </div>
                  <div className="hover:border-0 border-2 border-solid border-white-A700_75 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-14 md:px-10 sm:px-5 rounded-[32px] hover:shadow-bs1 hover:w-full w-full">
                    <Img
                      className="h-12 w-12"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="mt-8 text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.80px]"
                      size="txtDMSansBold24WhiteA700"
                    >
                      Social Community
                    </Text>
                    <Text
                      className="leading-[26.00px] mt-4 text-base text-white-A700_90 tracking-[-0.36px] w-full"
                      size="txtDMSansRegular16"
                    >
                      <>
                        We&#39;ve done it carefully and simply. Combined with
                        the ingredients makes for beautiful landings.
                      </>
                    </Text>
                  </div>
                  <div className="hover:border-0 border-2 border-solid border-white-A700_75 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-14 md:px-10 sm:px-5 rounded-[32px] hover:shadow-bs1 hover:w-full w-full">
                    <Img
                      className="h-12 w-12"
                      src="images/img_television.svg"
                      alt="television"
                    />
                    <Text
                      className="mt-[35px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.80px]"
                      size="txtDMSansBold24WhiteA700"
                    >
                      Viewing Amenities
                    </Text>
                    <Text
                      className="leading-[26.00px] mt-3.5 text-base text-white-A700_90 tracking-[-0.36px] w-full"
                      size="txtDMSansRegular16"
                    >
                      <>
                        We&#39;ve done it carefully and simply. Combined with
                        the ingredients makes for beautiful landings.
                      </>
                    </Text>
                  </div>
                  <div className="hover:border-0 border-2 border-solid border-white-A700_75 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-14 md:px-10 sm:px-5 rounded-[32px] hover:shadow-bs1 hover:w-full w-full">
                    <Img
                      className="h-12 w-12"
                      src="images/img_television.svg"
                      alt="television"
                    />
                    <Text
                      className="mt-8 text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.80px]"
                      size="txtDMSansBold24WhiteA700"
                    >
                      Asset Protection
                    </Text>
                    <Text
                      className="leading-[26.00px] mt-[17px] text-base text-white-A700_90 tracking-[-0.36px] w-full"
                      size="txtDMSansRegular16"
                    >
                      <>
                        We&#39;ve done it carefully and simply. Combined with
                        the ingredients makes for beautiful landings.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end max-w-[2140px] mx-auto md:px-5 px-[357px] w-full">
          <div className="flex flex-col md:gap-10 gap-[84px] items-start justify-start w-[95%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-center justify-start w-[81%] md:w-full">
                <Text
                  className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[-0.36px]"
                  size="txtDINNextLTArabicBold40"
                >
                  Features
                </Text>
                <Text
                  className="lowercase mt-[5px] text-justify text-light_blue-300 text-xl tracking-[2.64px]"
                  size="txtDINNextLTArabicRegular20Lightblue300"
                >
                  Our ECO SYSTEM
                </Text>
                <List
                  className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[47px] w-full"
                  orientation="horizontal"
                >
                  <div className="bg-blue_gray-800 flex flex-1 flex-col items-center justify-start p-[51px] md:px-10 sm:px-5 rounded-[32px] shadow-bs1 w-full">
                    <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
                      <div className="flex flex-col gap-5 items-center justify-start w-full">
                        <Img
                          className="h-20"
                          src="images/img_settings_yellow_700.svg"
                          alt="settings"
                        />
                        <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                          <Text
                            className="capitalize text-2xl md:text-[22px] text-center text-light_blue-300 sm:text-xl tracking-[-0.80px]"
                            size="txtDINNextLTArabicBold24"
                          >
                            ai & machine learning
                          </Text>
                          <Text
                            className="leading-[26.00px] text-base text-center text-white-A700 tracking-[-0.36px] w-full"
                            size="txtDINNextLTArabicRegular16"
                          >
                            <>
                              We&#39;ve done it carefully and simply. Combined
                              with the ingredients makes for beautiful landings.
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-800 flex flex-1 flex-col items-center justify-start p-[51px] md:px-10 sm:px-5 rounded-[32px] shadow-bs1 w-full">
                    <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
                      <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                        <Img
                          className="h-20"
                          src="images/img_user_yellow_700.svg"
                          alt="user"
                        />
                        <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                          <Text
                            className="capitalize text-2xl md:text-[22px] text-center text-light_blue-300 sm:text-xl tracking-[-0.80px]"
                            size="txtDINNextLTArabicBold24"
                          >
                            security
                          </Text>
                          <Text
                            className="leading-[26.00px] text-base text-center text-white-A700 tracking-[-0.36px] w-full"
                            size="txtDINNextLTArabicRegular16"
                          >
                            <>
                              We&#39;ve done it carefully and simply. Combined
                              with the ingredients makes for beautiful landings.
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-800 flex flex-1 flex-col items-center justify-start p-[51px] md:px-10 sm:px-5 rounded-[32px] shadow-bs1 w-full">
                    <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
                      <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                        <Img
                          className="h-20"
                          src="images/img_user_yellow_700.svg"
                          alt="user"
                        />
                        <div className="flex flex-col gap-3 items-center justify-start w-full">
                          <Text
                            className="capitalize text-2xl md:text-[22px] text-center text-light_blue-300 sm:text-xl tracking-[-0.80px]"
                            size="txtDINNextLTArabicBold24"
                          >
                            automate
                          </Text>
                          <Text
                            className="leading-[26.00px] text-base text-center text-white-A700 tracking-[-0.36px] w-full"
                            size="txtDINNextLTArabicRegular16"
                          >
                            <>
                              We&#39;ve done it carefully and simply. Combined
                              with the ingredients makes for beautiful landings.
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-800 flex flex-1 flex-col items-center justify-start p-[51px] md:px-10 sm:px-5 rounded-[32px] shadow-bs1 w-full">
                    <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <Img
                          className="h-20"
                          src="images/img_user_yellow_700.svg"
                          alt="user"
                        />
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <Text
                            className="capitalize text-2xl md:text-[22px] text-center text-light_blue-300 sm:text-xl tracking-[-0.80px]"
                            size="txtDINNextLTArabicBold24"
                          >
                            automate
                          </Text>
                          <Text
                            className="leading-[26.00px] text-base text-center text-white-A700 tracking-[-0.36px] w-full"
                            size="txtDINNextLTArabicRegular16"
                          >
                            <>
                              We&#39;ve done it carefully and simply. Combined
                              with the ingredients makes for beautiful landings.
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[93%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="lowercase sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[-0.36px]"
                  size="txtDINNextLTArabicBold40"
                >
                  why choose us?
                </Text>
                <Text
                  className="capitalize mt-0.5 text-justify text-light_blue-300 text-xl tracking-[2.64px]"
                  size="txtDINNextLTArabicRegular20Lightblue300"
                >
                  Higher property value
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[46px] w-full">
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[133px]">
                    <Text
                      className="capitalize text-lg text-light_blue-300 tracking-[2.64px]"
                      size="txtDINNextLTArabicBold18"
                    >
                      why choose us?
                    </Text>
                    <Text
                      className="leading-[41.00px] lowercase mt-3.5 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 tracking-[-0.36px]"
                      size="txtDINNextLTArabicBold30"
                    >
                      <span className="text-white-A700 font-dinnextltarabic capitalize text-left font-bold">
                        Control{" "}
                      </span>
                      <span className="text-white-A700 font-dinnextltarabic text-left font-bold">
                        <>
                          your environment,
                          <br />
                        </>
                      </span>
                      <span className="text-white-A700 font-dinnextltarabic capitalize text-left font-bold">
                        engage
                      </span>
                      <span className="text-white-A700 font-dinnextltarabic text-left font-bold">
                        {" "}
                        your workplace community,
                      </span>
                    </Text>
                    <Text
                      className="leading-[37.00px] lowercase mt-3 text-justify text-white-A700 text-xl tracking-[-0.36px] w-full"
                      size="txtDINNextLTArabicRegular20"
                    >
                      startup offering automation and integration solutions to
                      commercial and residential property Users Founded in 2018
                      in Riyadh, Saudi Arabia, we are a Master System Integrator
                      (MSI) startup providing smart solutions under one
                      interface to improve the overall user experience
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[45%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-8 items-start justify-between w-full">
                      <div className="flex sm:flex-1 flex-col md:gap-10 gap-[123px] items-center justify-start w-[15%] sm:w-full">
                        <div className="flex flex-col md:gap-10 gap-[123px] items-center justify-start w-full">
                          <div className="bg-yellow-700_63 flex flex-col h-[79px] items-center justify-end p-[19px] rounded shadow-bs3 w-[79px]">
                            <Img
                              className="h-[39px] rounded w-[39px]"
                              src="images/img_activity1.svg"
                              alt="activityOne"
                            />
                          </div>
                          <div className="bg-yellow-700_63 flex flex-col h-[79px] items-center justify-end p-[19px] rounded shadow-bs3 w-[79px]">
                            <Img
                              className="h-[39px] rounded w-[39px]"
                              src="images/img_piechart1.svg"
                              alt="piechartOne"
                            />
                          </div>
                        </div>
                        <div className="bg-yellow-700_63 flex flex-col h-[79px] items-center justify-end p-[19px] rounded shadow-bs3 w-[79px]">
                          <Img
                            className="h-[39px] rounded w-[39px]"
                            src="images/img_command1.svg"
                            alt="commandOne"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start sm:mt-0 mt-1.5">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-light_blue-300"
                          size="txtDINNextLTArabicBold28"
                        >
                          Resident Amenity
                        </Text>
                        <Text
                          className="leading-[30.00px] mt-2.5 text-lg text-white-A700 w-full"
                          size="txtDINNextLTArabicMedium18"
                        >
                          Gartner found that over half of renters surveyed
                          preferred to use a single, comprehensive app to manage
                          their connected home devices and services.
                        </Text>
                        <Text
                          className="mt-[59px] sm:text-2xl md:text-[26px] text-[28px] text-light_blue-300"
                          size="txtDINNextLTArabicBold28"
                        >
                          Operating Efficiencies
                        </Text>
                        <Text
                          className="mt-[15px] text-lg text-white-A700"
                          size="txtDINNextLTArabicMedium18"
                        >
                          saving time from work order and keyless
                        </Text>
                        <Text
                          className="mt-[111px] sm:text-2xl md:text-[26px] text-[28px] text-light_blue-300"
                          size="txtCairoBold28"
                        >
                          Asset Protection
                        </Text>
                        <Text
                          className="leading-[30.00px] mt-[5px] text-lg text-white-A700 w-[93%] sm:w-full"
                          size="txtCairoMedium18"
                        >
                          Realtime Alert and Water Damage
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center max-w-[2140px] mx-auto md:px-5 px-[343px] w-full">
          <div className="flex flex-col md:gap-10 gap-[72px] items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[-0.36px]"
                size="txtDINNextLTArabicBold40"
              >
                Our partner
              </Text>
              <Text
                className="lowercase mt-1.5 text-justify text-light_blue-300 text-xl tracking-[2.64px]"
                size="txtDINNextLTArabicRegular20Lightblue300"
              >
                Leading owners, operators, and home builders rely on us.
              </Text>
              <div className="flex flex-col items-center justify-start mt-[77px] w-full">
                <div className="overflow-x-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:px-10 sm:px-5 px-[63px] w-full">
                      <Img
                        className="h-[49px] md:h-auto sm:ml-[0] ml-[18px] object-cover"
                        src="images/img_1.png"
                        alt="One"
                      />
                      <Img
                        className="h-[52px] md:h-auto object-cover"
                        src="images/img_2.png"
                        alt="Two"
                      />
                      <Img
                        className="h-[52px] md:h-auto object-cover"
                        src="images/img_3.png"
                        alt="Three"
                      />
                      <Img
                        className="h-[49px] md:h-auto object-cover"
                        src="images/img_4.png"
                        alt="Four"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <Img
                        className="h-[49px] md:h-auto object-cover"
                        src="images/img_1.png"
                        alt="One_One"
                      />
                      <Img
                        className="h-[52px] md:h-auto object-cover"
                        src="images/img_2.png"
                        alt="Two_One"
                      />
                      <Img
                        className="h-[52px] md:h-auto object-cover"
                        src="images/img_3.png"
                        alt="Three_One"
                      />
                      <Img
                        className="h-[49px] md:h-auto object-cover"
                        src="images/img_4.png"
                        alt="Four_One"
                      />
                      <Img
                        className="h-[49px] md:h-auto object-cover"
                        src="images/img_1.png"
                        alt="Five"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer className="bg-blue_gray-800 flex items-center justify-center shadow-bs1 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
