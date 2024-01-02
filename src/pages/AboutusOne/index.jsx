import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text, TextArea } from "components";

import { CloseSVG } from "../../assets/images";

const AboutusOnePage = () => {
  const navigate = useNavigate();

  const [group237549value, setGroup237549value] = React.useState("");

  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col font-dinnextltarabic items-center justify-start mx-auto pb-[197px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="bg-blue_gray-800 flex md:flex-1 flex-col gap-[19px] justify-start mb-[1217px] md:px-5 py-5 shadow-bs1 w-[18%] md:w-full">
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[49px] w-[62%] md:w-full">
              <Img
                className="h-[152px] ml-0.5 md:ml-[0] w-[152px]"
                src="images/img_group_white_a700.svg"
                alt="maskgroup"
              />
              <List
                className="flex flex-col gap-7 items-center mt-5 w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-[7px] items-start justify-start w-full">
                      <div className="flex flex-col h-7 items-center justify-end w-7">
                        <Img
                          className="h-[23px] w-[23px]"
                          src="images/img_assignmentind_white_a700.svg"
                          alt="assignmentind"
                        />
                      </div>
                      <Text
                        className="mt-[3px] text-[17.59px] text-white-A700"
                        size="txtDINNextLTArabicBold1759"
                      >
                        Team Members
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[84%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-[7px] items-start justify-start w-full">
                      <div className="flex flex-col h-7 items-center justify-start w-7">
                        <Img
                          className="h-[23px] w-[23px]"
                          src="images/img_receipt.svg"
                          alt="receipt"
                        />
                      </div>
                      <Text
                        className="capitalize mt-[3px] text-[17.59px] text-white-A700"
                        size="txtDINNextLTArabicBold1759"
                      >
                        news letter
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-7 w-[76%] md:w-full">
                <div className="flex flex-row gap-[7px] items-start justify-start w-full">
                  <div className="flex flex-col h-7 items-center justify-start w-7">
                    <Img
                      className="h-[23px] w-[23px]"
                      src="images/img_alternateemail.svg"
                      alt="alternateemail"
                    />
                  </div>
                  <a
                    href="javascript:"
                    className="capitalize mt-[3px] text-[17.59px] text-white-A700"
                  >
                    <Text size="txtDINNextLTArabicBold1759">contact us</Text>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-7 w-[81%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-[7px] items-start justify-start w-full">
                      <div className="flex flex-col h-7 items-center justify-start w-7">
                        <Img
                          className="h-[23px] w-[23px]"
                          src="images/img_businesscenter.svg"
                          alt="businesscenter"
                        />
                      </div>
                      <Text
                        className="capitalize mt-[3px] text-[17.59px] text-white-A700"
                        size="txtDINNextLTArabicBold1759"
                      >
                        control job
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-7 w-[67%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-[7px] items-start justify-start w-full">
                      <Img
                        className="h-7 w-7"
                        src="images/img_imageicondashboard.svg"
                        alt="imageicondashbo"
                      />
                      <Text
                        className="capitalize mt-[3px] text-[17.59px] text-white-A700"
                        size="txtDINNextLTArabicBold1759"
                      >
                        services
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-7 w-[67%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-[7px] items-start justify-start w-full">
                      <div className="flex flex-col h-7 items-center justify-start p-0.5 w-7">
                        <Img
                          className="h-6 w-6"
                          src="images/img_checkmark_white_a700.svg"
                          alt="checkmark"
                        />
                      </div>
                      <Text
                        className="capitalize mt-[3px] text-[17.59px] text-white-A700"
                        size="txtDINNextLTArabicBold1759"
                      >
                        features
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-start justify-end p-[9px] rounded-md w-full">
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[41px] w-[45%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-[7px] items-start justify-start w-full">
                    <div className="flex flex-col h-7 items-center justify-start p-0.5 w-7">
                      <Img
                        className="h-6 w-6"
                        src="images/img_supervisedusercircle_blue_gray_800.svg"
                        alt="superviseduserc"
                      />
                    </div>
                    <Text
                      className="capitalize mt-[3px] text-[17.59px] text-blue_gray-800"
                      size="txtDINNextLTArabicBold1759Bluegray800"
                    >
                      About Us
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mb-24 md:ml-[0] ml-[51px] w-[41%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-[5px] items-start justify-start w-full">
                    <Img
                      className="h-7 w-7"
                      src="images/img_thumbsup_white_a700.svg"
                      alt="thumbsup"
                    />
                    <Text
                      className="capitalize mt-[3px] text-[17.59px] text-white-A700"
                      size="txtDINNextLTArabicBold1759"
                    >
                      Partners
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col font-cairo gap-[35px] items-center justify-start md:px-5 w-[83%] md:w-full">
            <div className="bg-blue_gray-800 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] shadow-bs1 w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[38px] w-[59%] md:w-full">
                <Input
                  name="group237549"
                  placeholder="Search..."
                  value={group237549value}
                  onChange={(e) => setGroup237549value(e)}
                  className="p-0 placeholder:text-light_blue-300 text-[15px] text-left w-full"
                  wrapClassName="flex rounded-[25px] w-full"
                  suffix={
                    <div className="ml-[35px] w-[17px] bg-light_blue-300 my-[5px]">
                      {group237549value?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer h-[18px] my-auto"
                          onClick={() => setGroup237549value("")}
                          fillColor="#44c1ef"
                          height={18}
                          width={18}
                          viewBox="0 0 18 18"
                        />
                      ) : (
                        <Img
                          className="cursor-pointer h-[18px] my-auto"
                          src="images/img_search.svg"
                          alt="search"
                        />
                      )}
                    </div>
                  }
                  color="light_blue_300"
                  size="xs"
                ></Input>
              </div>
              <Img
                className="h-6 md:ml-[0] ml-[83px] w-6"
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
            <div className="flex flex-col font-dinnextltarabic items-start justify-start w-[88%] md:w-full">
              <Text
                className="capitalize ml-0.5 md:ml-[0] text-light_blue-300 text-xl tracking-[-0.36px]"
                size="txtDINNextLTArabicBold20"
              >
                Hero section
              </Text>
              <div className="flex flex-col gap-[9px] items-start justify-start ml-0.5 md:ml-[0] mt-[21px] w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtDINNextLTArabicBold16WhiteA700"
                >
                  Section Name*
                </Text>
                <Input
                  name="groupSeventyEight"
                  placeholder="Welcome to the future"
                  className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="rounded-md w-full"
                  shape="round"
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row gap-4 items-center justify-between ml-0.5 md:ml-[0] mt-[21px] w-full">
                <div className="flex md:flex-1 flex-col gap-2 items-start justify-start w-1/2 md:w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtDINNextLTArabicBold16WhiteA700"
                  >
                    Section Description*
                  </Text>
                  <TextArea
                    className="bg-transparent border border-solid border-white-A700 leading-[normal] pl-6 pr-[35px] sm:px-5 py-2.5 rounded-md text-base text-left placeholder:text-white-A700 text-white-A700 w-full"
                    name="groupSeventyNine"
                    placeholder={`Smart one is a master System Integrator (MSI) startup providing
smart solutions under one Platform with Mobile and Web App
interface to improve the overall user experience that allows you
to manage and control smart devices in your commercial and.`}
                  ></TextArea>
                </div>
                <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start w-1/2 md:w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtDINNextLTArabicBold16WhiteA700"
                  >
                    Photo*
                  </Text>
                  <div className="flex flex-col items-center justify-end outline-[0.5px] outline-dashed outline-white-A700 p-[19px] rounded-lg w-full">
                    <div className="flex flex-col gap-1.5 items-center justify-start mt-1 w-[28%] md:w-full">
                      <Img
                        className="h-12 w-12"
                        src="images/img_addphotoalternate.svg"
                        alt="addphotoalterna"
                      />
                      <Text
                        className="text-sm text-white-A700_a2 tracking-[1.00px]"
                        size="txtDINNextLTArabicBold14"
                      >
                        Upload Your Photo
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="capitalize cursor-pointer font-medium min-w-[1036px] md:min-w-full mt-5 text-[17.59px] text-center"
                shape="round"
                color="light_blue_300"
                size="sm"
                variant="fill"
              >
                Save
              </Button>
              <Text
                className="capitalize mt-[35px] text-light_blue-300 text-xl tracking-[-0.36px]"
                size="txtDINNextLTArabicBold20"
              >
                About us Part
              </Text>
              <div className="flex flex-col gap-[9px] items-start justify-start mt-3.5 w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtDINNextLTArabicBold16WhiteA700"
                >
                  Section Name*
                </Text>
                <Input
                  name="groupSeventyFive"
                  placeholder="IOT Community Platform Customer Engagement"
                  className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="rounded-md w-full"
                  shape="round"
                ></Input>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start ml-0.5 md:ml-[0] mt-[15px] w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtDINNextLTArabicBold16WhiteA700"
                >
                  Section Description*
                </Text>
                <TextArea
                  className="bg-transparent border border-solid border-white-A700 leading-[normal] pb-[35px] pl-6 pr-[35px] pt-[18px] sm:px-5 rounded-md text-base text-left placeholder:text-white-A700 text-white-A700 w-full"
                  name="groupSeventySeven"
                  placeholder="We&#39;ve done it carefully and simply. Combined with the ingredients"
                ></TextArea>
              </div>
              <div className="flex md:flex-col flex-row gap-4 items-center justify-between mt-5 w-full">
                <div className="flex md:flex-1 flex-col items-center justify-end outline-[0.5px] outline-dashed outline-white-A700 p-9 sm:px-5 rounded-lg w-1/2 md:w-full">
                  <div className="flex flex-col gap-1.5 items-center justify-start mt-[5px] w-[30%] md:w-full">
                    <Img
                      className="h-12 w-12"
                      src="images/img_addphotoalternate.svg"
                      alt="addphotoalterna_One"
                    />
                    <Text
                      className="text-sm text-white-A700_a2 tracking-[1.00px]"
                      size="txtDINNextLTArabicBold14"
                    >
                      Upload Your Photo
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-end outline-[0.5px] outline-dashed outline-white-A700 p-9 sm:px-5 rounded-lg w-1/2 md:w-full">
                  <div className="flex flex-col gap-1.5 items-center justify-start mt-[5px] w-[30%] md:w-full">
                    <Img
                      className="h-12 w-12"
                      src="images/img_addphotoalternate.svg"
                      alt="addphotoalterna_Two"
                    />
                    <Text
                      className="text-sm text-white-A700_a2 tracking-[1.00px]"
                      size="txtDINNextLTArabicBold14"
                    >
                      Upload Your Photo
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                className="capitalize cursor-pointer font-medium min-w-[1036px] md:min-w-full mt-5 text-[17.59px] text-center"
                shape="round"
                color="light_blue_300"
                size="sm"
                variant="fill"
              >
                Save
              </Button>
              <Text
                className="capitalize mt-9 text-light_blue-300 text-xl tracking-[-0.36px]"
                size="txtDINNextLTArabicBold20"
              >
                Our Story Part
              </Text>
              <div className="flex flex-col gap-[9px] items-start justify-start mt-[19px] w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtDINNextLTArabicBold16WhiteA700"
                >
                  Section Name*
                </Text>
                <Input
                  name="groupSeventySix"
                  placeholder="Smart1 is a Platform with Mobile and Web App"
                  className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="rounded-md w-full"
                  type="number"
                  shape="round"
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row gap-4 items-center justify-between ml-0.5 md:ml-[0] mt-[21px] w-full">
                <div className="flex md:flex-1 flex-col gap-2 items-start justify-start w-1/2 md:w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtDINNextLTArabicBold16WhiteA700"
                  >
                    Section Description*
                  </Text>
                  <TextArea
                    className="bg-transparent border border-solid border-white-A700 leading-[normal] pl-6 pr-[35px] sm:px-5 py-2.5 rounded-md text-base text-left placeholder:text-white-A700 text-white-A700 w-full"
                    name="groupEighty"
                    placeholder={`Smart one is a master System Integrator (MSI) startup providing
smart solutions under one Platform with Mobile and Web App
interface to improve the overall user experience that allows you
to manage and control smart devices in your commercial and.`}
                  ></TextArea>
                </div>
                <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start w-1/2 md:w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtDINNextLTArabicBold16WhiteA700"
                  >
                    Photo*
                  </Text>
                  <div className="flex flex-col items-center justify-end outline-[0.5px] outline-dashed outline-white-A700 p-[19px] rounded-lg w-full">
                    <div className="flex flex-col gap-1.5 items-center justify-start mt-1 w-[28%] md:w-full">
                      <Img
                        className="h-12 w-12"
                        src="images/img_addphotoalternate.svg"
                        alt="addphotoalterna_Three"
                      />
                      <Text
                        className="text-sm text-white-A700_a2 tracking-[1.00px]"
                        size="txtDINNextLTArabicBold14"
                      >
                        Upload Your Photo
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="capitalize cursor-pointer font-medium min-w-[1036px] md:min-w-full mt-5 text-[17.59px] text-center"
                shape="round"
                color="light_blue_300"
                size="sm"
                variant="fill"
              >
                Save
              </Button>
              <div className="flex md:flex-col flex-row font-cairo md:gap-5 items-start justify-start mt-[27px] w-[99%] md:w-full">
                <Text
                  className="capitalize text-base text-white-A700"
                  size="txtCairoBold16"
                >
                  Value name
                </Text>
                <Text
                  className="capitalize md:ml-[0] ml-[94px] text-base text-white-A700"
                  size="txtCairoBold16"
                >
                  Icon
                </Text>
                <Text
                  className="capitalize ml-20 md:ml-[0] text-base text-white-A700"
                  size="txtCairoBold16"
                >
                  description
                </Text>
                <Text
                  className="capitalize md:ml-[0] ml-[430px] text-base text-white-A700"
                  size="txtCairoBold16"
                >
                  status
                </Text>
                <Text
                  className="md:ml-[0] ml-[129px] text-base text-white-A700"
                  size="txtCairoBold16"
                >
                  Actions
                </Text>
              </div>
              <Line className="bg-gray-400 h-px ml-0.5 md:ml-[0] mt-[3px] w-full" />
              <div className="flex md:flex-col flex-row font-dinnextltarabic md:gap-5 items-start justify-start mt-[19px] w-[99%] md:w-full">
                <Text
                  className="capitalize md:mt-0 mt-1.5 text-sm text-white-A700"
                  size="txtDINNextLTArabicMedium14"
                >
                  Vision
                </Text>
                <Img
                  className="h-6 md:ml-[0] ml-[140px] md:mt-0 mt-1 w-6"
                  src="images/img_clock.svg"
                  alt="clock"
                />
                <Text
                  className="md:ml-[0] ml-[85px] md:mt-0 mt-[5px] text-sm text-white-A700"
                  size="txtDINNextLTArabicMedium14"
                >
                  <>
                    To be the largest development company specialized in the
                    field of
                    <br />
                    the Internet of Things and build the largest Master systems
                    <br />
                    integrator in the Middle East with regional recognition.
                  </>
                </Text>
                <Img
                  className="h-8 md:ml-[0] ml-[116px] w-8"
                  src="images/img_toggleon.svg"
                  alt="toggleon"
                />
                <Img
                  className="common-pointer h-[18px] md:ml-[0] ml-[133px] md:mt-0 mt-[7px] w-[18px]"
                  src="images/img_edit.svg"
                  alt="edit"
                  onClick={() => navigate("/editteammember")}
                />
                <Img
                  className="h-[18px] ml-5 md:ml-[0] md:mt-0 mt-[7px] w-[18px]"
                  src="images/img_deleteforever.svg"
                  alt="deleteforever"
                />
              </div>
              <Line className="bg-gray-400 h-px mt-5 w-full" />
              <div className="flex md:flex-col flex-row font-dinnextltarabic md:gap-5 items-start justify-start mt-[19px] w-[99%] md:w-full">
                <Text
                  className="capitalize md:mt-0 mt-1.5 text-sm text-white-A700"
                  size="txtDINNextLTArabicMedium14"
                >
                  Vision
                </Text>
                <Img
                  className="h-6 md:ml-[0] ml-[140px] md:mt-0 mt-1 w-6"
                  src="images/img_clock.svg"
                  alt="clock_One"
                />
                <Text
                  className="md:ml-[0] ml-[85px] md:mt-0 mt-[5px] text-sm text-white-A700"
                  size="txtDINNextLTArabicMedium14"
                >
                  <>
                    To be the largest development company specialized in the
                    field of
                    <br />
                    the Internet of Things and build the largest Master systems
                    <br />
                    integrator in the Middle East with regional recognition.
                  </>
                </Text>
                <Img
                  className="h-8 md:ml-[0] ml-[116px] w-8"
                  src="images/img_toggleon.svg"
                  alt="toggleon_One"
                />
                <Img
                  className="common-pointer h-[18px] md:ml-[0] ml-[133px] md:mt-0 mt-[7px] w-[18px]"
                  src="images/img_edit.svg"
                  alt="edit_One"
                  onClick={() => navigate("/editteammember")}
                />
                <Img
                  className="h-[18px] ml-5 md:ml-[0] md:mt-0 mt-[7px] w-[18px]"
                  src="images/img_deleteforever.svg"
                  alt="deleteforever_One"
                />
              </div>
              <Line className="bg-gray-400 h-px mt-5 w-full" />
              <div className="flex md:flex-col flex-row font-dinnextltarabic md:gap-5 items-start justify-start mt-[19px] w-[99%] md:w-full">
                <Text
                  className="capitalize md:mt-0 mt-1.5 text-sm text-white-A700"
                  size="txtDINNextLTArabicMedium14"
                >
                  Vision
                </Text>
                <Img
                  className="h-6 md:ml-[0] ml-[140px] md:mt-0 mt-1 w-6"
                  src="images/img_clock.svg"
                  alt="clock_Two"
                />
                <Text
                  className="md:ml-[0] ml-[85px] md:mt-0 mt-[5px] text-sm text-white-A700"
                  size="txtDINNextLTArabicMedium14"
                >
                  <>
                    To be the largest development company specialized in the
                    field of
                    <br />
                    the Internet of Things and build the largest Master systems
                    <br />
                    integrator in the Middle East with regional recognition.
                  </>
                </Text>
                <Img
                  className="h-8 md:ml-[0] ml-[116px] w-8"
                  src="images/img_toggleon.svg"
                  alt="toggleon_Two"
                />
                <Img
                  className="common-pointer h-[18px] md:ml-[0] ml-[133px] md:mt-0 mt-[7px] w-[18px]"
                  src="images/img_edit.svg"
                  alt="edit_Two"
                  onClick={() => navigate("/editteammember")}
                />
                <Img
                  className="h-[18px] ml-5 md:ml-[0] md:mt-0 mt-[7px] w-[18px]"
                  src="images/img_deleteforever.svg"
                  alt="deleteforever_Two"
                />
              </div>
              <Line className="bg-gray-400 h-px mt-5 w-full" />
              <Button
                className="capitalize cursor-pointer font-medium min-w-[1036px] md:min-w-full mt-[19px] text-[17.59px] text-center"
                shape="round"
                color="light_blue_300"
                size="sm"
                variant="fill"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusOnePage;
