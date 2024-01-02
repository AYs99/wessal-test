import React from "react";

import { Button, CheckBox, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const TermsofusePage = () => {
  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col font-dinnextltarabic sm:gap-10 md:gap-10 gap-[72px] items-center justify-start mx-auto w-full">
        <div className="h-[745px] md:px-5 relative w-full">
          <Img
            className="h-[745px] m-auto object-cover w-full"
            src="images/img_rm373batch2041_745x1440.png"
            alt="rm373batch2041"
          />
          <div className="absolute bg-gradient  bottom-[0] h-[317px] inset-x-[0] mx-auto w-full"></div>
          <div className="absolute flex flex-col md:gap-10 gap-[151px] inset-x-[0] items-center justify-start mx-auto top-[3%] w-[86%]">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
            <Text
              className="capitalize sm:text-[40px] md:text-[46px] text-[50px] text-center text-light_blue-300 tracking-[-0.36px]"
              size="txtDINNextLTArabicBold50"
            >
              Terms of use
            </Text>
          </div>
        </div>
        <Text
          className="leading-[28.00px] text-lg text-white-A700 tracking-[-0.40px]"
          size="txtDINNextLTArabicRegular18WhiteA700"
        >
          <>
            A stakeholder is anyone who is affected by the results of your
            project plan. That includes your customers and end-users. Make sure
            you identify all stakeholders and keep their interests in mind when
            creating your project plan.
            <br />
            <br />
            Meet with the project sponsors and key stakeholders to discuss their
            needs and project expectations, and establish a scope baseline,
            budget, and timeline. Then create a scope statement document to
            finalize and record project scope details, get everyone on the same
            page, and reduce the chances of costly miscommunication. Cost
            control, in particular, is critical during this stage of the
            process, as well. <br />
            <br />
            Tip: Look beyond the stakeholders&#39; stated needs to identify the
            underlying desired benefits. These benefits are the objectives your
            project should deliver. A stakeholder is anyone who is affected by
            the results of your project plan. That includes your customers and
            end-users. Make sure you identify all stakeholders and keep their
            interests in mind when creating your project plan.
            <br />
            <br />
            Meet with the project sponsors and key stakeholders to discuss their
            needs and project expectations, and establish a scope baseline,
            budget, and timeline. Then create a scope statement document to
            finalize and record project scope details, get everyone on the same
            page, and reduce the chances of costly miscommunication. Cost
            control, in particular, is critical during this stage of the
            process, as well. <br />
            <br />
            Tip: Look beyond the stakeholders&#39; stated needs to identify the
            underlying desired benefits. These benefits are the objectives your
            project should deliver. A stakeholder is anyone who is affected by
            the results of your project plan. That includes your customers and
            end-users. Make sure you identify all stakeholders and keep their
            interests in mind when creating your project plan.
            <br />
            <br />
            Meet with the project sponsors and key stakeholders to discuss their
            needs and project expectations, and establish a scope baseline,
            budget, and timeline. Then create a scope statement document to
            finalize and record project scope details, get everyone on the same
            page, and reduce the chances of costly miscommunication. Cost
            control, in particular, is critical during this stage of the
            process, as well. <br />
            <br />
            Tip: Look beyond the stakeholders&#39; stated needs to identify the
            underlying desired benefits. These benefits are the objectives your
            project should deliver.
          </>
        </Text>
        <Footer className="bg-blue_gray-800 flex items-center justify-center md:px-5 shadow-bs1 w-full" />
      </div>
    </>
  );
};

export default TermsofusePage;
