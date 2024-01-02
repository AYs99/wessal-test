import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const Sidebar4 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
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
          className="h-7 w-7"
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
          className="h-7 w-7"
          src="images/img_thumbsup_white_a700.svg"
          alt="thumbsup"
        />
      ),
      label: "Partners",
      href: "/partners",
      active: window.location.pathname === "/partners",
    },
  ];

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <Img
          className="h-[152px] mt-5 mx-auto w-[152px]"
          src="images/img_group_white_a700.svg"
          alt="maskgroup"
        />
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[254px] mt-2.5 rounded-md"
          leftIcon={
            <Img
              className="h-[23px] mb-0.5 mr-[9px]"
              src="images/img_assignmentind.svg"
              alt="assignment-ind"
            />
          }
          shape="round"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="font-bold font-dinnextltarabic text-[17.59px] text-left">
            Team Members
          </div>
        </Button>
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              gap: "10px",
              paddingBottom: "28px",
              paddingLeft: "51px",
              paddingRight: "28px",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "17.59px",
              fontFamily: "DIN Next LT Arabic",
            },
          }}
          className="flex flex-col items-center justify-start mb-[117px] mt-[19px] w-full"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar4.defaultProps = {};

export default Sidebar4;
