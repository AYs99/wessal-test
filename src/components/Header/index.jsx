import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[46px]"
          src="images/img_favorite_46x64.svg"
          alt="favorite"
        />
        <Text
          className="common-pointer mb-[9px] md:ml-[0] ml-[50px] md:mt-0 mt-3 text-base text-white-A700 tracking-[-0.36px]"
          size="txtDINNextLTArabicRegular16"
          onClick={() => navigate("/")}
        >
          Home
        </Text>
        <Text
          className="common-pointer mb-[9px] ml-14 md:ml-[0] md:mt-0 mt-3 text-base text-white-A700 tracking-[-0.36px]"
          size="txtDINNextLTArabicRegular16"
          onClick={() => navigate("/aboutus")}
        >
          About us
        </Text>
        <Text
          className="common-pointer mb-[9px] md:ml-[0] ml-[58px] md:mt-0 mt-3 text-base text-white-A700 tracking-[-0.36px]"
          size="txtDINNextLTArabicRegular16"
          onClick={() => navigate("/commercialsectors")}
        >
          Commercial Sectors
        </Text>
        <Text
          className="common-pointer capitalize mb-[9px] md:ml-[0] ml-[57px] md:mt-0 mt-3 text-base text-white-A700 tracking-[-0.36px]"
          size="txtDINNextLTArabicRegular16"
          onClick={() => navigate("/residentialsectors")}
        >
          Residential Sectors
        </Text>
        <Text
          className="mb-[9px] md:ml-[0] ml-[57px] md:mt-0 mt-3 text-base text-light_blue-300 tracking-[-0.36px]"
          size="txtDINNextLTArabicBold16"
        >
          Contact us
        </Text>
        <Text
          className="mb-2 md:ml-[0] ml-[41px] md:mt-0 mt-3.5 text-base text-white-A700 tracking-[-0.36px]"
          size="txtDINNextLTArabicRegular16"
        >
          Blogs
        </Text>
        <div className="flex flex-row gap-1.5 items-start justify-between mb-2 md:ml-[0] ml-[308px] md:mt-0 mt-3.5 w-[6%] md:w-full">
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
    </>
  );
};

Header.defaultProps = {};

export default Header;
