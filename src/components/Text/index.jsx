import React from "react";

const sizeClasses = {
  txtDINNextLTArabicBold30: "font-bold font-dinnextltarabic",
  txtLatoBold16: "font-bold font-lato",
  txtDMSansRegular16WhiteA700: "font-dmsans font-normal",
  txtDINNextLTArabicBold1759: "font-bold font-dinnextltarabic",
  txtDMSansBold24WhiteA700: "font-bold font-dmsans",
  txtDINNextLTArabicBold32: "font-bold font-dinnextltarabic",
  txtCairoSemiBold16: "font-cairo font-semibold",
  txtDINNextLTArabicMedium18Bluegray800: "font-dinnextltarabic font-medium",
  txtDINNextLTArabicRegular14WhiteA700: "font-dinnextltarabic font-normal",
  txtDINNextLTArabicBold16WhiteA700: "font-bold font-dinnextltarabic",
  txtDINNextLTArabicBold22Lightblue300: "font-bold font-dinnextltarabic",
  txtDINNextLTArabicBold20: "font-bold font-dinnextltarabic",
  txtCairoMedium24: "font-cairo font-medium",
  txtDINNextLTArabicBold24: "font-bold font-dinnextltarabic",
  txtDINNextLTArabicMedium1347: "font-dinnextltarabic font-medium",
  txtDINNextLTArabicBold22: "font-bold font-dinnextltarabic",
  txtDINNextLTArabicBold28: "font-bold font-dinnextltarabic",
  txtInterMedium11: "font-inter font-medium",
  txtDINNextLTArabicRegular20Lightblue300: "font-dinnextltarabic font-normal",
  txtDINNextLTArabicBold40Yellow700: "font-bold font-dinnextltarabic",
  txtInterRegular12: "font-inter font-normal",
  txtDINNextLTArabicRegular14: "font-dinnextltarabic font-normal",
  txtDINNextLTArabicRegular13: "font-dinnextltarabic font-normal",
  txtDINNextLTArabicRegular16: "font-dinnextltarabic font-normal",
  txtDINNextLTArabicRegular18: "font-dinnextltarabic font-normal",
  txtDINNextLTArabicBold50: "font-bold font-dinnextltarabic",
  txtDMSansBold24: "font-bold font-dmsans",
  txtDINNextLTArabicRegular18WhiteA700: "font-dinnextltarabic font-normal",
  txtDINNextLTArabicBold16: "font-bold font-dinnextltarabic",
  txtDINNextLTArabicBold14: "font-bold font-dinnextltarabic",
  txtDINNextLTArabicBold18: "font-bold font-dinnextltarabic",
  txtCairoBold28: "font-bold font-cairo",
  txtCairoBold14Lightblue300: "font-bold font-cairo",
  txtCairoMedium18: "font-cairo font-medium",
  txtDINNextLTArabicRegular20: "font-dinnextltarabic font-normal",
  txtDINNextLTArabicBold1759Bluegray800: "font-bold font-dinnextltarabic",
  txtDINNextLTArabicBold50Yellow700: "font-bold font-dinnextltarabic",
  txtDINNextLTArabicMedium14: "font-dinnextltarabic font-medium",
  txtDINNextLTArabicBold40: "font-bold font-dinnextltarabic",
  txtDINNextLTArabicRegular20Yellow700: "font-dinnextltarabic font-normal",
  txtDINNextLTArabicMedium18: "font-dinnextltarabic font-medium",
  txtDINNextLTArabicBold20WhiteA700: "font-bold font-dinnextltarabic",
  txtDINNextLTArabicRegular14Bluegray400: "font-dinnextltarabic font-normal",
  txtDINNextLTArabicBold48: "font-bold font-dinnextltarabic",
  txtDINNextLTArabicBold32WhiteA700: "font-bold font-dinnextltarabic",
  txtDINNextLTArabicBold24Yellow700: "font-bold font-dinnextltarabic",
  txtCairoBold20: "font-bold font-cairo",
  txtDINNextLTArabicBold14WhiteA700: "font-bold font-dinnextltarabic",
  txtCairoBold14: "font-bold font-cairo",
  txtCairoBold16: "font-bold font-cairo",
  txtLatoMedium16: "font-lato font-medium",
  txtDMSansRegular16: "font-dmsans font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
