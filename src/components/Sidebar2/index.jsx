import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar2 = (props) => {
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

  return (
    <>
      <Sidebar className={props.className}>
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
              fontFamily: "DIN Next LT Arabic",
              borderRadius: "6px",
              [`&:hover, &.ps-active`]: {
                color: "#2c3862",
                backgroundColor: "#ffffffff !important",
              },
            },
          }}
          className="flex flex-col items-center justify-start mb-32 mt-2 py-[3px] w-full"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
          <SubMenu
            icon={
              <Img
                className="h-6 w-6"
                src="images/img_checkmark_blue_gray_800.svg"
                alt="checkmark"
              />
            }
            label={<Text className="capitalize">features</Text>}
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
          <MenuItem
            icon={
              <Img
                className="h-6 w-6"
                src="images/img_supervisedusercircle.svg"
                alt="superviseduserc"
              />
            }
            active={window.location.pathname === "/aboutus"}
          >
            <Text className="capitalize">About Us</Text>
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar2.defaultProps = {};

export default Sidebar2;
