import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const SettingsPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

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
      label: "Messages",
      href: "/messages",
      active: window.location.pathname === "/messages",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_settings_blue_gray_800.svg"
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
  const [group237549value, setGroup237549value] = React.useState("");

  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col font-dinnextltarabic items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[254px] bg-blue_gray-800 flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs1 top-[0]"
          >
            <Img
              className="h-[152px] mt-5 mx-auto w-[152px]"
              src="images/img_group_white_a700.svg"
              alt="maskgroup"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "10px 10px 10px 52px",
                  marginTop: "9px",
                  gap: "10px",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "17.59px",
                  borderRadius: "6px",
                  [`&:hover, &.ps-active`]: {
                    color: "#2c3862",
                    backgroundColor: "#ffffffff !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-start mb-[70px] mt-2 pt-[3px] w-full"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col font-cairo gap-11 items-center justify-start md:px-5 w-full">
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
                Settings
              </Text>
              <div className="flex flex-col gap-[9px] items-start justify-start mt-[19px] w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtDINNextLTArabicBold16WhiteA700"
                >
                  Search Location*
                </Text>
                <Input
                  name="groupTwentyEight"
                  placeholder="Search Location"
                  className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="rounded-md w-full"
                  shape="round"
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row gap-4 items-center justify-between mt-[21px] w-full">
                <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start w-1/2 md:w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtDINNextLTArabicBold16WhiteA700"
                  >
                    latitude*
                  </Text>
                  <Input
                    name="groupTwentyFive"
                    placeholder="latitude"
                    className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="rounded-md w-full"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-1/2 md:w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtDINNextLTArabicBold16WhiteA700"
                  >
                    longitude*
                  </Text>
                  <Input
                    name="groupTwentySix"
                    placeholder="longitude"
                    className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="rounded-md w-full"
                    shape="round"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-4 items-center justify-between mt-[21px] w-full">
                <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start w-1/2 md:w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtDINNextLTArabicBold16WhiteA700"
                  >
                    Email*
                  </Text>
                  <Input
                    name="groupThirty"
                    placeholder="Email"
                    className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="rounded-md w-full"
                    type="email"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start w-1/2 md:w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtDINNextLTArabicBold16WhiteA700"
                  >
                    Phone Number*
                  </Text>
                  <Input
                    name="groupTwentyNine"
                    placeholder="Phone Number"
                    className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="rounded-md w-full"
                    type="number"
                    shape="round"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start mt-[21px] w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtDINNextLTArabicBold16WhiteA700"
                >
                  Location*
                </Text>
                <Input
                  name="groupTwentySeven"
                  placeholder="Location"
                  className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="rounded-md w-full"
                  shape="round"
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[1036px] md:min-w-full mt-[30px] text-[17.59px] text-center"
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

export default SettingsPage;
