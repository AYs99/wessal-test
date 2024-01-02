import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Line, List, Text } from "components";
import BlogsPagination from "components/BlogsPagination";
import Footer from "components/Footer";

const BlogsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col font-dinnextltarabic items-center justify-end mx-auto pt-[13px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <Img
              className="h-[30px] mb-[15px]"
              src="images/img_favorite_white_a700_30x64.svg"
              alt="favorite"
            />
            <Text
              className="common-pointer md:ml-[0] ml-[50px] md:mt-0 mt-5 text-base text-white-A700 tracking-[-0.36px]"
              size="txtDINNextLTArabicRegular16"
              onClick={() => navigate("/")}
            >
              Home
            </Text>
            <Text
              className="common-pointer ml-14 md:ml-[0] md:mt-0 mt-5 text-base text-white-A700 tracking-[-0.36px]"
              size="txtDINNextLTArabicRegular16"
              onClick={() => navigate("/aboutus")}
            >
              About us
            </Text>
            <Text
              className="md:ml-[0] ml-[58px] md:mt-0 mt-[19px] text-base text-white-A700 tracking-[-0.36px]"
              size="txtDINNextLTArabicRegular16"
            >
              Commercial Sectors
            </Text>
            <Text
              className="common-pointer capitalize md:ml-[0] ml-[57px] md:mt-0 mt-[19px] text-base text-white-A700 tracking-[-0.36px]"
              size="txtDINNextLTArabicRegular16"
              onClick={() => navigate("/residentialsectors")}
            >
              Residential Sectors
            </Text>
            <a className="md:ml-[0] ml-[57px] md:mt-0 mt-[19px] text-base text-white-A700 tracking-[-0.36px]">
              <Text
                className="common-pointer"
                size="txtDINNextLTArabicRegular16"
                onClick={() => navigate("/contactus")}
              >
                Contact us
              </Text>
            </a>
            <Text
              className="common-pointer md:ml-[0] ml-[42px] md:mt-0 mt-[21px] text-base text-light_blue-300 tracking-[-0.36px]"
              size="txtDINNextLTArabicBold16"
              onClick={() => navigate("/contactus")}
            >
              Blogs
            </Text>
            <div className="flex md:flex-1 flex-row gap-1.5 items-start justify-between md:ml-[0] ml-[307px] md:mt-0 mt-[21px] w-[6%] md:w-full">
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
          <div className="flex flex-col gap-[25px] items-center justify-start mt-[51px] md:px-5">
            <Text
              className="capitalize leading-[49.00px] sm:text-4xl md:text-[38px] text-[40px] text-center text-yellow-700 tracking-[-0.36px]"
              size="txtDINNextLTArabicBold40Yellow700"
            >
              <>
                Insights about my personal and work life,
                <br />
                and the in-betweens
              </>
            </Text>
            <Text
              className="leading-[37.00px] lowercase text-center text-white-A700 text-xl tracking-[-0.36px] w-[98%] sm:w-full"
              size="txtDINNextLTArabicRegular20"
            >
              When products are made for you, you never realise how their design
              can be exclusionary towards people of color.
            </Text>
          </div>
          <Text
            className="capitalize mt-[65px] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[-0.36px]"
            size="txtDINNextLTArabicBold40"
          >
            Recent blogs
          </Text>
          <div className="flex flex-col items-start justify-start max-w-[1247px] mt-9 mx-auto md:px-5 w-full">
            <List
              className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                <div
                  className="common-pointer flex flex-col items-start justify-start w-full"
                  onClick={() => navigate("/blogdetails")}
                >
                  <Img
                    className="h-[277px] sm:h-auto object-cover rounded-bl-[32px] rounded-br-[32px] w-full"
                    src="images/img_image_277x403.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-start justify-start mt-[23px] w-1/4 md:w-full">
                    <Text
                      className="text-sm text-yellow-700 tracking-[-0.30px]"
                      size="txtDINNextLTArabicRegular14"
                    >
                      2 days ago
                    </Text>
                    <div className="bg-yellow-700 h-1 mb-3 ml-1 mt-1.5 rounded-[50%] w-1"></div>
                    <div className="flex flex-row items-start justify-evenly ml-1 w-1/4">
                      <Img
                        className="h-3 mt-[3px] w-3"
                        src="images/img_download1.svg"
                        alt="downloadOne"
                      />
                      <Text
                        className="text-sm text-yellow-700 tracking-[-0.30px]"
                        size="txtDINNextLTArabicRegular14"
                      >
                        3
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mt-[13px] text-[22px] sm:text-lg text-light_blue-300 md:text-xl tracking-[-0.40px]"
                    size="txtDINNextLTArabicBold22Lightblue300"
                  >
                    Six Easy Steps To Finish The Project
                  </Text>
                  <Text
                    className="leading-[26.00px] mt-[11px] text-base text-white-A700 tracking-[-0.36px] w-[98%] sm:w-full"
                    size="txtDINNextLTArabicRegular16"
                  >
                    <>
                      We&#39;ve done it carefully and simply. Combined with the
                      ingredients makes for beautiful landings.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Img
                    className="h-[277px] sm:h-auto object-cover rounded-bl-[16px] rounded-br-[16px] w-full"
                    src="images/img_image_1.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-start justify-start mt-[23px] w-1/4 md:w-full">
                    <Text
                      className="text-sm text-yellow-700 tracking-[-0.30px]"
                      size="txtDINNextLTArabicRegular14"
                    >
                      2 days ago
                    </Text>
                    <div className="bg-yellow-700 h-1 mb-3 ml-1 mt-1.5 rounded-[50%] w-1"></div>
                    <div className="flex flex-row items-start justify-evenly ml-1 w-1/4">
                      <Img
                        className="h-3 mt-[3px] w-3"
                        src="images/img_download1.svg"
                        alt="downloadOne"
                      />
                      <Text
                        className="text-sm text-yellow-700 tracking-[-0.30px]"
                        size="txtDINNextLTArabicRegular14"
                      >
                        3
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mt-[13px] text-[22px] sm:text-lg text-light_blue-300 md:text-xl tracking-[-0.40px]"
                    size="txtDINNextLTArabicBold22Lightblue300"
                  >
                    Changing Company Culture Requires
                  </Text>
                  <Text
                    className="leading-[26.00px] mt-[11px] text-base text-white-A700 tracking-[-0.36px] w-[98%] sm:w-full"
                    size="txtDINNextLTArabicRegular16"
                  >
                    <>
                      We&#39;ve done it carefully and simply. Combined with the
                      ingredients makes for beautiful landings.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Img
                    className="h-[277px] sm:h-auto object-cover rounded-bl-[16px] rounded-br-[16px] w-full"
                    src="images/img_image_2.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-start justify-start mt-[23px] w-1/4 md:w-full">
                    <Text
                      className="text-sm text-yellow-700 tracking-[-0.30px]"
                      size="txtDINNextLTArabicRegular14"
                    >
                      2 days ago
                    </Text>
                    <div className="bg-yellow-700 h-1 mb-3 ml-1 mt-1.5 rounded-[50%] w-1"></div>
                    <div className="flex flex-row items-start justify-evenly ml-1 w-1/4">
                      <Img
                        className="h-3 mt-[3px] w-3"
                        src="images/img_download1.svg"
                        alt="downloadOne"
                      />
                      <Text
                        className="text-sm text-yellow-700 tracking-[-0.30px]"
                        size="txtDINNextLTArabicRegular14"
                      >
                        3
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mt-[13px] text-[22px] sm:text-lg text-light_blue-300 md:text-xl tracking-[-0.40px]"
                    size="txtDINNextLTArabicBold22Lightblue300"
                  >
                    Six Easy Steps To Finish The Project
                  </Text>
                  <Text
                    className="leading-[26.00px] mt-[11px] text-base text-white-A700 tracking-[-0.36px] w-[98%] sm:w-full"
                    size="txtDINNextLTArabicRegular16"
                  >
                    <>
                      We&#39;ve done it carefully and simply. Combined with the
                      ingredients makes for beautiful landings.
                    </>
                  </Text>
                </div>
              </div>
            </List>
            <Text
              className="capitalize md:ml-[0] ml-[545px] mt-[83px] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[-0.36px]"
              size="txtDINNextLTArabicBold40"
            >
              all blogs
            </Text>
            <List
              className="flex flex-col gap-[42px] items-center mt-9 w-full"
              orientation="vertical"
            >
              <div
                className="common-pointer flex flex-1 md:flex-col flex-row gap-4 items-center justify-between w-full"
                onClick={() => navigate("/blogdetails")}
              >
                <Img
                  className="h-[279px] md:h-auto object-cover rounded-[16px]"
                  src="images/img_image_1.png"
                  alt="image"
                />
                <div className="flex flex-col items-center justify-start">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row items-start justify-start w-[17%] md:w-full">
                      <Text
                        className="text-[13px] text-center text-yellow-700 uppercase"
                        size="txtDINNextLTArabicRegular13"
                      >
                        AUGust 13, 2021{" "}
                      </Text>
                      <div className="bg-yellow-700 h-1 mb-2.5 ml-[5px] mt-1.5 rounded-[50%] w-1"></div>
                      <div className="flex flex-row items-start justify-evenly ml-1 w-[18%]">
                        <Img
                          className="h-3 mt-[3px] w-3"
                          src="images/img_download1.svg"
                          alt="downloadOne"
                        />
                        <Text
                          className="text-sm text-yellow-700 tracking-[-0.30px]"
                          size="txtDINNextLTArabicRegular14"
                        >
                          3
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[130.00%] mt-[9px] sm:text-2xl md:text-[26px] text-[28px] text-light_blue-300 w-full"
                      size="txtDINNextLTArabicBold28"
                    >
                      10 Hilarious Cartoons That Depict Real-Life Problems of
                      Programmers
                    </Text>
                    <Text
                      className="leading-[150.00%] mt-[15px] text-white-A700 text-xl w-[93%] sm:w-full"
                      size="txtDINNextLTArabicRegular20"
                    >
                      Redefined the user acquisition and redesigned the
                      onboarding experience, all within 3 working weeks.
                    </Text>
                  </div>
                </div>
              </div>
              <div
                className="common-pointer flex flex-1 md:flex-col flex-row gap-4 items-center justify-between w-full"
                onClick={() => navigate("/blogdetails")}
              >
                <Img
                  className="h-[279px] md:h-auto object-cover rounded-[16px]"
                  src="images/img_image_1.png"
                  alt="image"
                />
                <div className="flex flex-col items-center justify-start">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row items-start justify-start w-[17%] md:w-full">
                      <Text
                        className="text-[13px] text-center text-yellow-700 uppercase"
                        size="txtDINNextLTArabicRegular13"
                      >
                        AUGust 13, 2021{" "}
                      </Text>
                      <div className="bg-yellow-700 h-1 mb-2.5 ml-[5px] mt-1.5 rounded-[50%] w-1"></div>
                      <div className="flex flex-row items-start justify-evenly ml-1 w-[18%]">
                        <Img
                          className="h-3 mt-[3px] w-3"
                          src="images/img_download1.svg"
                          alt="downloadOne"
                        />
                        <Text
                          className="text-sm text-yellow-700 tracking-[-0.30px]"
                          size="txtDINNextLTArabicRegular14"
                        >
                          3
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[130.00%] mt-[9px] sm:text-2xl md:text-[26px] text-[28px] text-light_blue-300 w-full"
                      size="txtDINNextLTArabicBold28"
                    >
                      10 Hilarious Cartoons That Depict Real-Life Problems of
                      Programmers
                    </Text>
                    <Text
                      className="leading-[150.00%] mt-[15px] text-white-A700 text-xl w-[93%] sm:w-full"
                      size="txtDINNextLTArabicRegular20"
                    >
                      Redefined the user acquisition and redesigned the
                      onboarding experience, all within 3 working weeks.
                    </Text>
                  </div>
                </div>
              </div>
              <div
                className="common-pointer flex flex-1 md:flex-col flex-row gap-4 items-center justify-between w-full"
                onClick={() => navigate("/blogdetails")}
              >
                <Img
                  className="h-[279px] md:h-auto object-cover rounded-[16px]"
                  src="images/img_image_1.png"
                  alt="image"
                />
                <div className="flex flex-col items-center justify-start">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row items-start justify-start w-[17%] md:w-full">
                      <Text
                        className="text-[13px] text-center text-yellow-700 uppercase"
                        size="txtDINNextLTArabicRegular13"
                      >
                        AUGust 13, 2021{" "}
                      </Text>
                      <div className="bg-yellow-700 h-1 mb-2.5 ml-[5px] mt-1.5 rounded-[50%] w-1"></div>
                      <div className="flex flex-row items-start justify-evenly ml-1 w-[18%]">
                        <Img
                          className="h-3 mt-[3px] w-3"
                          src="images/img_download1.svg"
                          alt="downloadOne"
                        />
                        <Text
                          className="text-sm text-yellow-700 tracking-[-0.30px]"
                          size="txtDINNextLTArabicRegular14"
                        >
                          3
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[130.00%] mt-[9px] sm:text-2xl md:text-[26px] text-[28px] text-light_blue-300 w-full"
                      size="txtDINNextLTArabicBold28"
                    >
                      10 Hilarious Cartoons That Depict Real-Life Problems of
                      Programmers
                    </Text>
                    <Text
                      className="leading-[150.00%] mt-[15px] text-white-A700 text-xl w-[93%] sm:w-full"
                      size="txtDINNextLTArabicRegular20"
                    >
                      Redefined the user acquisition and redesigned the
                      onboarding experience, all within 3 working weeks.
                    </Text>
                  </div>
                </div>
              </div>
              <div
                className="common-pointer flex flex-1 md:flex-col flex-row gap-4 items-center justify-between w-full"
                onClick={() => navigate("/blogdetails")}
              >
                <Img
                  className="h-[279px] md:h-auto object-cover rounded-[16px]"
                  src="images/img_image_1.png"
                  alt="image"
                />
                <div className="flex flex-col items-center justify-start">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row items-start justify-start w-[17%] md:w-full">
                      <Text
                        className="text-[13px] text-center text-yellow-700 uppercase"
                        size="txtDINNextLTArabicRegular13"
                      >
                        AUGust 13, 2021{" "}
                      </Text>
                      <div className="bg-yellow-700 h-1 mb-2.5 ml-[5px] mt-1.5 rounded-[50%] w-1"></div>
                      <div className="flex flex-row items-start justify-evenly ml-1 w-[18%]">
                        <Img
                          className="h-3 mt-[3px] w-3"
                          src="images/img_download1.svg"
                          alt="downloadOne"
                        />
                        <Text
                          className="text-sm text-yellow-700 tracking-[-0.30px]"
                          size="txtDINNextLTArabicRegular14"
                        >
                          3
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[130.00%] mt-[9px] sm:text-2xl md:text-[26px] text-[28px] text-light_blue-300 w-full"
                      size="txtDINNextLTArabicBold28"
                    >
                      10 Hilarious Cartoons That Depict Real-Life Problems of
                      Programmers
                    </Text>
                    <Text
                      className="leading-[150.00%] mt-[15px] text-white-A700 text-xl w-[93%] sm:w-full"
                      size="txtDINNextLTArabicRegular20"
                    >
                      Redefined the user acquisition and redesigned the
                      onboarding experience, all within 3 working weeks.
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <BlogsPagination className="flex flex-row font-inter gap-2 items-center justify-end md:ml-[0] ml-[1002px] mt-[42px] w-[244px]" />
          </div>
          <Footer className="bg-blue_gray-800 flex items-center justify-center mt-[42px] md:px-5 shadow-bs1 w-full" />
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
