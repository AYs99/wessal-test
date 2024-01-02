import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import BlogsPagination from "components/BlogsPagination";
import Sidebar2 from "components/Sidebar2";

import { CloseSVG } from "../../assets/images";

const FeaturePage = () => {
  const navigate = useNavigate();

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
          className="h-[23px] w-[23px]"
          src="images/img_alternateemail.svg"
          alt="alternateemail"
        />
      ),
      label: "contact us",
      href: "/contactus",
      active: window.location.pathname === "/contactus",
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
  ];
  const [group237549value, setGroup237549value] = React.useState("");

  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col font-dinnextltarabic items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar2 className="!sticky !w-[254px] bg-blue_gray-800 flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs1 top-[0]" />
          <div className="flex flex-1 flex-col font-cairo gap-[42px] items-center justify-start md:px-5 w-full">
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
                className="capitalize text-light_blue-300 text-xl tracking-[-0.36px]"
                size="txtDINNextLTArabicBold20"
              >
                All features
              </Text>
              <div className="flex md:flex-col flex-row font-cairo md:gap-5 items-start justify-start mt-[17px] w-[99%] md:w-full">
                <Text
                  className="capitalize text-base text-white-A700"
                  size="txtCairoBold16"
                >
                  feature name
                </Text>
                <Text
                  className="capitalize md:ml-[0] ml-[159px] text-base text-white-A700"
                  size="txtCairoBold16"
                >
                  Icon
                </Text>
                <Text
                  className="capitalize md:ml-[0] ml-[69px] text-base text-white-A700"
                  size="txtCairoBold16"
                >
                  description
                </Text>
                <Text
                  className="capitalize md:ml-[0] ml-[362px] text-base text-white-A700"
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
              <List
                className="flex flex-col font-dinnextltarabic gap-5 items-center mt-[23px] w-[99%]"
                orientation="vertical"
              >
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Text
                    className="capitalize md:mt-0 mt-2 text-sm text-white-A700"
                    size="txtDINNextLTArabicMedium14"
                  >
                    Alarms Management System
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[81px] md:mt-0 mt-1 w-6"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                  <Text
                    className="md:ml-[0] ml-[74px] md:mt-0 mt-2 text-sm text-white-A700"
                    size="txtDINNextLTArabicMedium14"
                  >
                    Alert the operator to relevant abnormal operating
                    situations.
                  </Text>
                  <Img
                    className="h-8 md:ml-[0] ml-[78px] w-8"
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
                <Line className="self-center h-px bg-gray-400 w-full" />
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Text
                    className="capitalize md:mt-0 mt-2 text-sm text-white-A700"
                    size="txtDINNextLTArabicMedium14"
                  >
                    Alarms Management System
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[81px] md:mt-0 mt-1 w-6"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                  <Text
                    className="md:ml-[0] ml-[74px] md:mt-0 mt-2 text-sm text-white-A700"
                    size="txtDINNextLTArabicMedium14"
                  >
                    Alert the operator to relevant abnormal operating
                    situations.
                  </Text>
                  <Img
                    className="h-8 md:ml-[0] ml-[78px] w-8"
                    src="images/img_toggleon_light_blue_300.svg"
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
                <Line className="self-center h-px bg-gray-400 w-full" />
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Text
                    className="capitalize md:mt-0 mt-2 text-sm text-white-A700"
                    size="txtDINNextLTArabicMedium14"
                  >
                    Alarms Management System
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[81px] md:mt-0 mt-1 w-6"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                  <Text
                    className="md:ml-[0] ml-[74px] md:mt-0 mt-2 text-sm text-white-A700"
                    size="txtDINNextLTArabicMedium14"
                  >
                    Alert the operator to relevant abnormal operating
                    situations.
                  </Text>
                  <Img
                    className="h-8 md:ml-[0] ml-[78px] w-8"
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
                <Line className="self-center h-px bg-gray-400 w-full" />
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Text
                    className="capitalize md:mt-0 mt-2 text-sm text-white-A700"
                    size="txtDINNextLTArabicMedium14"
                  >
                    Alarms Management System
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[81px] md:mt-0 mt-1 w-6"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                  <Text
                    className="md:ml-[0] ml-[74px] md:mt-0 mt-2 text-sm text-white-A700"
                    size="txtDINNextLTArabicMedium14"
                  >
                    Alert the operator to relevant abnormal operating
                    situations.
                  </Text>
                  <Img
                    className="h-8 md:ml-[0] ml-[78px] w-8"
                    src="images/img_toggleon_light_blue_300.svg"
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
                <Line className="self-center h-px bg-gray-400 w-full" />
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Text
                    className="capitalize md:mt-0 mt-2 text-sm text-white-A700"
                    size="txtDINNextLTArabicMedium14"
                  >
                    Alarms Management System
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[81px] md:mt-0 mt-1 w-6"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                  <Text
                    className="md:ml-[0] ml-[74px] md:mt-0 mt-2 text-sm text-white-A700"
                    size="txtDINNextLTArabicMedium14"
                  >
                    Alert the operator to relevant abnormal operating
                    situations.
                  </Text>
                  <Img
                    className="h-8 md:ml-[0] ml-[78px] w-8"
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
              </List>
              <Button
                className="capitalize cursor-pointer font-medium min-w-[1036px] md:min-w-full mt-[54px] text-[17.59px] text-center"
                shape="round"
                color="light_blue_300"
                size="sm"
                variant="fill"
              >
                Add New feature
              </Button>
              <BlogsPagination className="flex flex-row font-inter gap-2 items-center justify-end md:ml-[0] ml-[792px] mt-[30px] w-[244px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturePage;
