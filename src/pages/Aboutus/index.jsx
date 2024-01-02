import React from "react";

import { Button, CheckBox, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const AboutusPage = () => {
  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col font-dinnextltarabic items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="md:h-[1169px] sm:h-[810px] h-[823px] md:px-5 relative w-full">
            <Img
              className="h-[810px] m-auto object-cover w-full"
              src="images/img_millennialasia.png"
              alt="millennialasia"
            />
            <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[21px] sm:px-5 w-full">
              <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
              <div className="h-[95px] mt-[526px] relative w-[37%] sm:w-full">
                <Text
                  className="capitalize mb-[-5.2px] mx-auto text-center text-lg text-light_blue-300 tracking-[2.64px] z-[1]"
                  size="txtDINNextLTArabicBold18"
                >
                  About us
                </Text>
                <Text
                  className="capitalize mt-auto mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-center text-yellow-700 tracking-[-0.36px]"
                  size="txtDINNextLTArabicBold50Yellow700"
                >
                  Welcome to the future
                </Text>
              </div>
              <Text
                className="leading-[37.00px] lowercase mb-[38px] text-center text-white-A700 text-xl tracking-[-0.36px] w-[52%] sm:w-full"
                size="txtDINNextLTArabicRegular20"
              >
                startup offering automation and integration solutions to
                commercial and residential property Users Founded in 2018 in
                Riyadh, Saudi Arabia
              </Text>
            </div>
          </div>
          <div className="sm:h-[1031px] md:h-[638px] h-[662px] max-w-[1241px] mt-20 mx-auto md:px-5 relative w-full">
            <Text
              className="absolute capitalize inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 top-[0] tracking-[-0.36px] w-max"
              size="txtDINNextLTArabicBold40"
            >
              About us
            </Text>
            <div className="absolute bottom-[17%] flex flex-col gap-[11px] items-start justify-start right-[0] w-1/2">
              <Text
                className="capitalize text-center text-lg text-light_blue-300 tracking-[2.64px]"
                size="txtDINNextLTArabicBold18"
              >
                who are we?
              </Text>
              <Text
                className="lowercase text-3xl sm:text-[26px] md:text-[28px] text-white-A700 tracking-[-0.36px]"
                size="txtDINNextLTArabicBold30"
              >
                Smart1 is a Platform with Mobile and Web App
              </Text>
              <div className="h-[296px] relative w-full">
                <Text
                  className="leading-[37.00px] lowercase m-auto text-justify text-white-A700 text-xl tracking-[-0.36px] w-full"
                  size="txtDINNextLTArabicRegular20"
                >
                  <span className="text-white-A700 font-dinnextltarabic capitalize font-normal">
                    startup
                  </span>
                  <span className="text-white-A700 font-dinnextltarabic font-normal">
                    {" "}
                    offering automation and integration solutions to commercial
                    and residential property Users Founded in 2018 in Riyadh,
                    Saudi Arabia, we are a Master System Integrator (MSI)
                    startup providing smart solutions under one interface to
                    improve the overall user experience{" "}
                  </span>
                  <span className="text-white-A700 font-dinnextltarabic capitalize font-normal">
                    startup
                  </span>
                  <span className="text-white-A700 font-dinnextltarabic font-normal">
                    {" "}
                    offering automation and integration solutions to commercial
                    and residential property Users Founded in 2018 in Riyadh,
                    Saudi Arabia, we are a Master System Integrator (MSI)
                    startup providing smart solutions under one interface to
                    improve the overall user experience{" "}
                  </span>
                </Text>
                <a
                  href="javascript:"
                  className="absolute bottom-[28%] capitalize left-[21%] text-blue_gray-800 text-center text-sm"
                >
                  <Text size="txtCairoBold14">read more</Text>
                </a>
              </div>
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
          <div className="flex md:flex-col flex-row gap-[22px] items-start justify-start max-w-[1249px] mt-12 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[46px] w-[49%] md:w-full">
              <Text
                className="capitalize md:ml-[0] ml-[5px] text-center text-lg text-light_blue-300 tracking-[2.64px]"
                size="txtDINNextLTArabicBold18"
              >
                Our Story
              </Text>
              <Text
                className="lowercase mt-[9px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 tracking-[-0.36px]"
                size="txtDINNextLTArabicBold30"
              >
                Smart1 is a Platform with Mobile and Web App
              </Text>
              <div className="h-[296px] md:h-[309px] mt-[13px] relative w-full">
                <Text
                  className="leading-[37.00px] lowercase m-auto text-justify text-white-A700 text-xl tracking-[-0.36px] w-full"
                  size="txtDINNextLTArabicRegular20"
                >
                  <span className="text-white-A700 font-dinnextltarabic capitalize font-normal">
                    startup
                  </span>
                  <span className="text-white-A700 font-dinnextltarabic font-normal">
                    {" "}
                    offering automation and integration solutions to commercial
                    and residential property Users Founded in 2018 in Riyadh,
                    Saudi Arabia, we are a Master System Integrator (MSI)
                    startup providing smart solutions under one interface to
                    improve the overall user experience{" "}
                  </span>
                  <span className="text-white-A700 font-dinnextltarabic capitalize font-normal">
                    startup
                  </span>
                  <span className="text-white-A700 font-dinnextltarabic font-normal">
                    {" "}
                    offering automation and integration solutions to commercial
                    and residential property Users Founded in 2018 in Riyadh,
                    Saudi Arabia, we are a Master System Integrator (MSI)
                    startup providing smart solutions under one interface to
                    improve the overall user experience{" "}
                  </span>
                </Text>
                <a
                  href="javascript:"
                  className="absolute bottom-[28%] capitalize left-[21%] text-blue_gray-800 text-center text-sm"
                >
                  <Text size="txtCairoBold14">read more</Text>
                </a>
              </div>
            </div>
            <div className="h-[463px] relative w-1/2 md:w-full">
              <Img
                className="h-[462px] m-auto object-cover rounded-[10px] w-full"
                src="images/img_businessstrate.png"
                alt="businessstrate"
              />
              <div className="absolute bg-gradient1  h-[463px] inset-[0] justify-center m-auto rotate-[180deg] rounded-[10px] w-full"></div>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row font-dmsans gap-[52px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1219px] mt-12 mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-blue_gray-800 flex flex-1 flex-col items-center justify-start p-10 sm:px-5 rounded-[32px] shadow-bs1 w-full">
              <div className="flex flex-col items-center justify-start w-[95%] md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Img
                    className="h-20"
                    src="images/img_user_yellow_700.svg"
                    alt="user"
                  />
                  <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-light_blue-300 sm:text-xl tracking-[-0.80px]"
                      size="txtDMSansBold24"
                    >
                      Our Mission
                    </Text>
                    <Text
                      className="leading-[26.00px] text-base text-center text-white-A700 tracking-[-0.36px] w-full"
                      size="txtDMSansRegular16WhiteA700"
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
            <div className="bg-blue_gray-800 flex flex-1 flex-col items-center justify-start p-9 sm:px-5 rounded-[32px] shadow-bs1 w-full">
              <div className="flex flex-col items-center justify-start my-1 w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Img
                    className="h-20"
                    src="images/img_close_yellow_700.svg"
                    alt="close"
                  />
                  <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-light_blue-300 sm:text-xl tracking-[-0.80px]"
                      size="txtDMSansBold24"
                    >
                      Our Vision
                    </Text>
                    <Text
                      className="leading-[26.00px] text-base text-center text-white-A700 tracking-[-0.36px] w-full"
                      size="txtDMSansRegular16WhiteA700"
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
            <div className="bg-blue_gray-800 flex flex-1 flex-col items-center justify-start p-[34px] sm:px-5 rounded-[32px] shadow-bs1 w-full">
              <div className="flex flex-col items-center justify-start my-1.5 w-[99%] md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Img
                    className="h-20"
                    src="images/img_user_yellow_700_80x72.svg"
                    alt="user"
                  />
                  <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-light_blue-300 sm:text-xl tracking-[-0.80px]"
                      size="txtDMSansBold24"
                    >
                      Our value
                    </Text>
                    <Text
                      className="leading-[26.00px] text-base text-center text-white-A700 tracking-[-0.36px] w-full"
                      size="txtDMSansRegular16WhiteA700"
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
          </List>
          <div className="font-dinnextltarabic h-[143px] md:h-[167px] mt-20 md:px-5 relative w-[59%] md:w-full">
            <Text
              className="absolute capitalize inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 top-[0] tracking-[-0.36px] w-max"
              size="txtDINNextLTArabicBold40"
            >
              Team Members
            </Text>
            <Text
              className="absolute bottom-[0] inset-x-[0] leading-[29.00px] lowercase mx-auto text-center text-light_blue-300 text-xl tracking-[2.64px] w-full"
              size="txtDINNextLTArabicRegular20Lightblue300"
            >
              <>
                We&#39;ve done it carefully and simply. Combined with the
                ingredients makes for beautiful landings. It is definitely the
                tool you need to speed up your design process.We&#39;ve done it
                carefully and simply.
              </>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1244px] mt-12 mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[405px] md:h-auto object-cover rounded-[32px] w-[405px] sm:w-full"
              src="images/img_13mahmoud1.png"
              alt="13mahmoudOne"
            />
            <Img
              className="sm:flex-1 h-[405px] md:h-auto md:ml-[0] ml-[15px] object-cover rounded-[32px] w-[405px] sm:w-full"
              src="images/img_14ahmed2.png"
              alt="14ahmedTwo"
            />
            <Img
              className="sm:flex-1 h-[405px] md:h-auto ml-3.5 md:ml-[0] object-cover rounded-[32px] w-[405px] sm:w-full"
              src="images/img_16ahmeed1.png"
              alt="16ahmeedOne"
            />
          </div>
          <div className="flex sm:flex-col flex-row font-dinnextltarabic sm:gap-10 items-start justify-between max-w-[990px] mt-[33px] mx-auto md:px-5 w-full">
            <Text
              className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Mahmoud Ismail
            </Text>
            <Text
              className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Ahmed Akef
            </Text>
            <Text
              className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Ahmed Elsayed
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row font-dinnextltarabic sm:gap-5 items-start justify-start max-w-[916px] mt-[5px] mx-auto md:px-5 w-full">
            <Text
              className="text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              CEO
            </Text>
            <Text
              className="sm:ml-[0] ml-[390px] text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              CTO
            </Text>
            <Text
              className="sm:ml-[0] ml-[342px] text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              Branch Manager
            </Text>
          </div>
          <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start max-w-[1247px] mt-11 mx-auto md:px-5 w-full">
            <div className="h-[405px] relative w-[405px] sm:w-full">
              <Img
                className="h-[405px] m-auto object-cover rounded-[32px] w-[405px]"
                src="images/img_14ahmed2.png"
                alt="14ahmedThree"
              />
              <Img
                className="absolute h-[405px] inset-[0] justify-center m-auto object-cover rounded-[32px] w-[405px]"
                src="images/img_211.png"
                alt="TwoHundredEleven"
              />
            </div>
            <Img
              className="h-[405px] md:h-auto object-cover rounded-[32px] w-[405px]"
              src="images/img_04khaled1.png"
              alt="04khaledOne"
            />
            <Img
              className="h-[405px] md:h-auto object-cover rounded-[32px] w-[405px]"
              src="images/img_05helal1.png"
              alt="05helalOne"
            />
          </div>
          <div className="flex sm:flex-col flex-row font-dinnextltarabic sm:gap-5 items-start justify-start max-w-[948px] mt-[33px] mx-auto md:px-5 w-full">
            <Text
              className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Ali Labib
            </Text>
            <Text
              className="sm:ml-[0] ml-[290px] text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Khaled EL-Bauomy
            </Text>
            <Text
              className="sm:ml-[0] ml-[267px] text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Mostafa Helal
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row font-dinnextltarabic sm:gap-10 items-start justify-between max-w-[955px] mt-[5px] mx-auto md:px-5 w-full">
            <Text
              className="text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              Technical Lead
            </Text>
            <Text
              className="text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              Scrum Master & Business Analyst
            </Text>
            <Text
              className="text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              UI/UX Designer
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1246px] mt-[45px] mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[405px] md:h-auto object-cover rounded-[32px] w-[405px] sm:w-full"
              src="images/img_01esraa1.png"
              alt="01esraaOne"
            />
            <Img
              className="sm:flex-1 h-[405px] md:h-auto md:ml-[0] ml-[15px] object-cover rounded-[32px] w-[405px] sm:w-full"
              src="images/img_261.png"
              alt="TwoHundredSixtyOne"
            />
            <Img
              className="sm:flex-1 h-[405px] md:h-auto ml-4 md:ml-[0] object-cover rounded-[32px] w-[405px] sm:w-full"
              src="images/img_03kerolos1.png"
              alt="03kerolosOne"
            />
          </div>
          <div className="flex sm:flex-col flex-row font-dinnextltarabic sm:gap-10 items-center justify-between max-w-[988px] mt-[33px] mx-auto md:px-5 w-full">
            <Text
              className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Esraa Mohamed
            </Text>
            <Text
              className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Ahmed Gamal
            </Text>
            <Text
              className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Kerolis Youssif
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row font-dinnextltarabic sm:gap-5 items-center justify-start max-w-[1016px] mt-2 mx-auto md:px-5 w-full">
            <Text
              className="text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              Backend Developer
            </Text>
            <Text
              className="sm:ml-[0] ml-[283px] text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              Flutter Developer
            </Text>
            <Text
              className="sm:ml-[0] ml-[252px] text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              Machine learning Developer
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1247px] mt-11 mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[405px] md:h-auto object-cover rounded-[32px] w-[405px] sm:w-full"
              src="images/img_06kesho1.png"
              alt="06keshoOne"
            />
            <Img
              className="sm:flex-1 h-[405px] md:h-auto md:ml-[0] ml-[15px] object-cover rounded-[32px] w-[405px] sm:w-full"
              src="images/img_09nada1.png"
              alt="09nadaOne"
            />
            <Img
              className="sm:flex-1 h-[405px] md:h-auto md:ml-[0] ml-[17px] object-cover rounded-[32px] w-[405px] sm:w-full"
              src="images/img_12mohamed1.png"
              alt="12mohamedOne"
            />
          </div>
          <div className="flex sm:flex-col flex-row font-dinnextltarabic sm:gap-5 items-center justify-start max-w-[1038px] mt-[33px] mx-auto md:px-5 w-full">
            <Text
              className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Mostafa Mohamed
            </Text>
            <Text
              className="sm:ml-[0] ml-[285px] text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Nada Akef
            </Text>
            <Text
              className="sm:ml-[0] ml-[264px] text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Mohamed Abouelenean
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row font-dinnextltarabic sm:gap-5 items-center justify-center max-w-[982px] mt-2 mx-auto md:px-5 w-full">
            <Text
              className="text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              Frontend Developer
            </Text>
            <Text
              className="sm:ml-[0] ml-[221px] text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              Scrum Master & Business Analyst
            </Text>
            <Text
              className="sm:ml-[0] ml-[230px] text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              penetration tester
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1247px] mt-[45px] mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[405px] md:h-auto object-cover rounded-[32px] w-[405px] sm:w-full"
              src="images/img_251.png"
              alt="TwoHundredFiftyOne"
            />
            <Img
              className="sm:flex-1 h-[405px] md:h-auto md:ml-[0] ml-[15px] object-cover rounded-[32px] w-[405px] sm:w-full"
              src="images/img_11abdallah1.png"
              alt="11abdallahOne"
            />
            <Img
              className="sm:flex-1 h-[405px] md:h-auto md:ml-[0] ml-[17px] object-cover rounded-[32px] w-[405px] sm:w-full"
              src="images/img_08rigal1.png"
              alt="08rigalOne"
            />
          </div>
          <div className="flex sm:flex-col flex-row font-dinnextltarabic sm:gap-10 items-start justify-between max-w-[991px] mt-[33px] mx-auto md:px-5 w-full">
            <Text
              className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Ibrahim Kamil
            </Text>
            <Text
              className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Abdullah Azab
            </Text>
            <Text
              className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Muhammed Rigal
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row font-dinnextltarabic sm:gap-5 items-start justify-start max-w-[958px] mt-[5px] mx-auto md:px-5 w-full">
            <Text
              className="text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              Backend Developer
            </Text>
            <Text
              className="sm:ml-[0] ml-[283px] text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              Flutter Developer
            </Text>
            <Text
              className="sm:ml-[0] ml-[313px] text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              Art Director
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1247px] mt-[45px] mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[405px] md:h-auto object-cover rounded-[32px] w-[405px] sm:w-full"
              src="images/img_07nejm1.png"
              alt="07nejmOne"
            />
            <Img
              className="sm:flex-1 h-[405px] md:h-auto md:ml-[0] ml-[15px] object-cover rounded-[32px] w-[405px] sm:w-full"
              src="images/img_15ashraf1.png"
              alt="15ashrafOne"
            />
            <Img
              className="sm:flex-1 h-[405px] md:h-auto md:ml-[0] ml-[17px] object-cover rounded-[32px] w-[405px] sm:w-full"
              src="images/img_10momen1.png"
              alt="10momenOne"
            />
          </div>
          <div className="flex sm:flex-col flex-row font-dinnextltarabic sm:gap-10 items-start justify-between max-w-[974px] mt-[33px] mx-auto md:px-5 w-full">
            <Text
              className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Mostafa Ngm
            </Text>
            <Text
              className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Ashraf Mohamed
            </Text>
            <Text
              className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.40px]"
              size="txtDINNextLTArabicBold22"
            >
              Momen Ahmed
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row font-dinnextltarabic sm:gap-5 items-start justify-start max-w-[917px] mt-[5px] mx-auto md:px-5 w-full">
            <Text
              className="text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              Qc
            </Text>
            <Text
              className="sm:ml-[0] ml-[354px] text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              Product Owner
            </Text>
            <Text
              className="sm:ml-[0] ml-[301px] text-lg text-light_blue-300 tracking-[-0.40px]"
              size="txtDINNextLTArabicRegular18"
            >
              Flutter Developer
            </Text>
          </div>
          <Footer className="bg-blue_gray-800 flex font-dinnextltarabic items-center justify-center mt-[69px] md:px-5 shadow-bs1 w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutusPage;
