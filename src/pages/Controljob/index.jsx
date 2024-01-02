import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import BlogsPagination from "components/BlogsPagination";

import { CloseSVG } from "../../assets/images";

const ControljobPage = () => {
  const table3Data = React.useRef([
    {
      firstname: "Product owner",
      firstnameOne: "PO",
      firstnameTwo: "15-8-2022",
      firstnameThree: "images/img_deleteforever.svg",
    },
    {
      firstname: "Product owner",
      firstnameOne: "PO",
      firstnameTwo: "15-8-2022",
      firstnameThree: "images/img_deleteforever.svg",
    },
    {
      firstname: "Product owner",
      firstnameOne: "PO",
      firstnameTwo: "15-8-2022",
      firstnameThree: "images/img_deleteforever.svg",
    },
    {
      firstname: "Product owner",
      firstnameOne: "PO",
      firstnameTwo: "15-8-2022",
      firstnameThree: "images/img_deleteforever.svg",
    },
    {
      firstname: "Product owner",
      firstnameOne: "PO",
      firstnameTwo: "15-8-2022",
      firstnameThree: "images/img_deleteforever.svg",
    },
    {
      firstname: "Product owner",
      firstnameOne: "PO",
      firstnameTwo: "15-8-2022",
      firstnameThree: "images/img_deleteforever.svg",
    },
  ]);
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper();
    return [
      table3ColumnHelper.accessor("firstname", {
        cell: (info) => (
          <Text
            className="capitalize pb-[19px] pt-[25px] text-sm text-white-A700"
            size="txtDINNextLTArabicMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[297px] text-base text-white-A700"
            size="txtCairoBold16"
          >
            Job Name
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("firstnameOne", {
        cell: (info) => (
          <Text
            className="pb-[19px] pt-[25px] text-sm text-white-A700"
            size="txtDINNextLTArabicMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[349px] text-base text-white-A700"
            size="txtCairoBold16"
          >
            briefly nickname
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("firstnameTwo", {
        cell: (info) => (
          <Text
            className="pb-[19px] pt-[25px] text-sm text-white-A700"
            size="txtDINNextLTArabicMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[301px] text-base text-white-A700"
            size="txtCairoBold16"
          >
            Created at
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("firstnameThree", {
        cell: (info) => (
          <div className="flex flex-row gap-5 items-center justify-between py-[23px]">
            <Img
              className="common-pointer h-[18px] w-[18px]"
              src="images/img_edit.svg"
              alt="edit"
              onClick={() => navigate("/editteammember")}
            />
            <Img
              className="h-[18px] w-[18px]"
              alt="deleteforever"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[56px] text-base text-white-A700"
            size="txtCairoBold16"
          >
            Actions
          </Text>
        ),
      }),
    ];
  }, []);

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
          src="images/img_businesscenter_blue_gray_800.svg"
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
                  padding: "10px 10px 10px 50px",
                  gap: "10px",
                  marginTop: "9px",
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
              className="flex flex-col items-center justify-start mb-[118px] mt-2 pt-[3px] w-full"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
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
                All Jobs
              </Text>
              <div className="overflow-auto font-cairo w-[97%]">
                <ReactTable
                  columns={table3Columns}
                  data={table3Data.current}
                  rowClass={""}
                  headerClass=""
                />
              </div>
              <Line className="bg-gray-400 h-px ml-0.5 md:ml-[0] mt-[52px] w-full" />
              <Line className="bg-gray-400 h-px ml-0.5 md:ml-[0] w-full" />
              <Line className="bg-gray-400 h-px ml-0.5 md:ml-[0] mt-[60px] w-full" />
              <Line className="bg-gray-400 h-px ml-0.5 md:ml-[0] mt-[60px] w-full" />
              <Line className="bg-gray-400 h-px ml-0.5 md:ml-[0] mt-[60px] w-full" />
              <Line className="bg-gray-400 h-px ml-0.5 md:ml-[0] mt-[60px] w-full" />
              <Line className="bg-gray-400 h-px ml-0.5 md:ml-[0] mt-[60px] w-full" />
              <Button
                className="cursor-pointer font-medium min-w-[1036px] md:min-w-full mt-[27px] text-[17.59px] text-center"
                shape="round"
                color="light_blue_300"
                size="sm"
                variant="fill"
              >
                Add New Job
              </Button>
              <BlogsPagination className="flex flex-row font-inter gap-2 items-center justify-end md:ml-[0] ml-[792px] mt-[30px] w-[244px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControljobPage;
