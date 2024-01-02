import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Line, Text } from "components";
import BlogDetailsDarkminibutton from "components/BlogDetailsDarkminibutton";
import Footer from "components/Footer";

const BlogdetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col items-center justify-start mx-auto w-full">
        <div className="font-dinnextltarabic h-[823px] md:h-[962px] md:px-5 relative w-full">
          <Img
            className="h-[823px] m-auto object-cover w-full"
            src="images/img_pexelstranmautritam326503.png"
            alt="pexelstranmautr"
          />
          <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-center justify-center m-auto pb-96 w-full">
            <div className="flex flex-col md:gap-10 gap-[293px] items-center justify-start w-full">
              <header className="bg-blue_gray-800 flex flex-col items-center justify-center shadow-bs4 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mb-[29px] mt-[18px] mx-auto w-[86%]">
                  <div className="header-row mb-px">
                    <Img
                      className="h-[39px]"
                      src="images/img_group.svg"
                      alt="group"
                    />
                    <div className="mobile-menu">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <Text
                    className="common-pointer sm:hidden md:ml-[0] ml-[50px] text-base text-white-A700 tracking-[-0.36px]"
                    size="txtDINNextLTArabicRegular16"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </Text>
                  <Text
                    className="common-pointer sm:hidden md:ml-[0] ml-[41px] text-base text-white-A700 tracking-[-0.36px]"
                    size="txtDINNextLTArabicRegular16"
                    onClick={() => navigate("/aboutus")}
                  >
                    About us
                  </Text>
                  <Text
                    className="common-pointer sm:hidden md:ml-[0] ml-[41px] text-base text-white-A700 tracking-[-0.36px]"
                    size="txtDINNextLTArabicRegular16"
                    onClick={() => navigate("/")}
                  >
                    Sectors
                  </Text>
                  <Text
                    className="common-pointer capitalize sm:hidden md:ml-[0] ml-[41px] text-base text-white-A700 tracking-[-0.36px]"
                    size="txtDINNextLTArabicRegular16"
                    onClick={() => navigate("/")}
                  >
                    services
                  </Text>
                  <Text
                    className="common-pointer sm:hidden md:ml-[0] ml-[41px] text-base text-white-A700 tracking-[-0.36px]"
                    size="txtDINNextLTArabicRegular16"
                    onClick={() => navigate("/")}
                  >
                    Features
                  </Text>
                  <Text
                    className="common-pointer sm:hidden md:ml-[0] ml-[41px] text-base text-white-A700 tracking-[-0.36px]"
                    size="txtDINNextLTArabicRegular16"
                    onClick={() => navigate("/")}
                  >
                    Our partner
                  </Text>
                  <a className="sm:hidden md:ml-[0] ml-[41px] text-base text-white-A700 tracking-[-0.36px]">
                    <Text
                      className="common-pointer"
                      size="txtDINNextLTArabicRegular16"
                      onClick={() => navigate("/contactus")}
                    >
                      Contact us
                    </Text>
                  </a>
                  <Text
                    className="sm:hidden md:ml-[0] ml-[41px] text-base text-light_blue-300 tracking-[-0.36px]"
                    size="txtDINNextLTArabicBold16"
                  >
                    Blogs
                  </Text>
                  <div className="flex flex-row gap-1.5 sm:hidden items-start justify-between md:ml-[0] ml-[307px] w-[6%] md:w-full">
                    <Text
                      className="text-base text-white-A700 tracking-[-0.36px]"
                      size="txtDINNextLTArabicRegular16"
                    >
                      English
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="images/img_favorite_white_a700.svg"
                      alt="favorite"
                    />
                  </div>
                </div>
              </header>
              <div className="flex flex-row md:gap-10 items-center justify-between w-[87%] md:w-full">
                <Img
                  className="h-14"
                  src="images/img_close_blue_gray_800.svg"
                  alt="close"
                />
                <Img
                  className="h-14"
                  src="images/img_close_blue_gray_800_56x52.svg"
                  alt="close_One"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-dinnextltarabic items-center justify-start max-w-[1243px] mt-[41px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[15px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[67%] md:w-full">
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
                  className="leading-[130.00%] sm:text-2xl md:text-[26px] text-[28px] text-light_blue-300 w-full"
                  size="txtDINNextLTArabicBold28"
                >
                  10 Hilarious Cartoons That Depict Real-Life Problems of
                  Programmers
                </Text>
              </div>
              <div className="flex md:flex-1 flex-row gap-2 items-center justify-between w-[22%] md:w-full">
                <BlogDetailsDarkminibutton
                  className="bg-light_blue-300_33 flex flex-col h-12 md:h-auto items-center justify-center rounded-[50%] w-12"
                  facebook="images/img_facebook_light_blue_300.svg"
                />
                <Button
                  className="flex h-12 items-center justify-center w-12"
                  shape="circle"
                  color="light_blue_300_33"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_thumbsup_light_blue_300.svg"
                    alt="thumbsup"
                  />
                </Button>
                <Button
                  className="flex h-12 items-center justify-center w-12"
                  shape="circle"
                  color="light_blue_300_33"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_twitteroutline_light_blue_300.svg"
                    alt="twitteroutline"
                  />
                </Button>
                <Button
                  className="flex h-12 items-center justify-center w-12"
                  shape="circle"
                  color="light_blue_300_33"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_info_light_blue_300.svg"
                    alt="info"
                  />
                </Button>
                <Button
                  className="flex h-12 items-center justify-center w-12"
                  shape="circle"
                  color="light_blue_300_33"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-5"
                    src="images/img_volume_light_blue_300.svg"
                    alt="volume"
                  />
                </Button>
              </div>
            </div>
            <Text
              className="leading-[28.00px] text-lg text-white-A700 tracking-[-0.40px] w-full"
              size="txtDINNextLTArabicRegular18WhiteA700"
            >
              A stakeholder is anyone who is affected by the results of your
              project plan. That includes your customers and end-users. Make
              sure you identify all stakeholders and keep their interests in
              mind when creating your project plan.
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-dinnextltarabic items-start mt-[29px] md:px-10 sm:px-5 px-[100px] w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-300 tracking-[-2.00px]"
            size="txtDINNextLTArabicBold32"
          >
            The problem
          </Text>
        </div>
        <Text
          className="leading-[28.00px] mt-[9px] text-lg text-white-A700 tracking-[-0.40px]"
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
            project should deliver.
          </>
        </Text>
        <div className="flex flex-col font-dinnextltarabic items-start mt-[26px] md:px-10 sm:px-5 px-[100px] w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-300 tracking-[-2.00px]"
            size="txtDINNextLTArabicBold32"
          >
            Our Solution
          </Text>
        </div>
        <Text
          className="leading-[28.00px] mt-[11px] text-lg text-white-A700 tracking-[-0.40px]"
          size="txtDINNextLTArabicRegular18WhiteA700"
        >
          <>
            Once you have a list of stakeholder needs, prioritize them and set
            specific project goals. These should outline project objectives or
            the metrics and benefits you hope to achieve. Write your goals and
            the stakeholder needs they address in your project plan so it&#39;s
            clearly communicated and easily shareable.
            <br />
            <br />
            Tip: If you&#39;re having trouble prioritizing, start ranking goals
            based on urgency and importance, or check out these helpful
            decision-making tips.
          </>
        </Text>
        <div className="flex flex-col font-dinnextltarabic items-start mt-[26px] md:px-10 sm:px-5 px-[100px] w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-300 tracking-[-2.00px]"
            size="txtDINNextLTArabicBold32"
          >
            Result
          </Text>
        </div>
        <Text
          className="leading-[28.00px] mt-[11px] text-lg text-white-A700 tracking-[-0.40px]"
          size="txtDINNextLTArabicRegular18WhiteA700"
        >
          <>
            Identify the deliverables and project planning steps required to
            meet the project&#39;s goals. What are the specific outputs
            you&#39;re expected to produce?
            <br />
            <br />
            Next, estimate the due dates for each deliverable in your project
            plan. (You can finalize these dates when you sit down to define your
            project schedule in the next step.)
            <br />
            <br />
            Tip: Set firm milestones for essential deadlines and deliverables.
            You&#39;ll be able to track your progress once work begins to ensure
            you complete tasks on time and keep stakeholders happy.
          </>
        </Text>
        <div className="flex flex-col font-dinnextltarabic items-start mt-7 md:px-10 sm:px-5 px-[97px] w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-300 tracking-[-2.00px]"
            size="txtDINNextLTArabicBold32"
          >
            Step 4: Create the project schedule
          </Text>
        </div>
        <Text
          className="leading-[28.00px] mt-[9px] text-lg text-white-A700 tracking-[-0.40px]"
          size="txtDINNextLTArabicRegular18WhiteA700"
        >
          <>
            Look at each deliverable and define the series of tasks that must be
            completed to accomplish each one. For each task, determine the
            amount of time it will take, the resources necessary, and who will
            be responsible for execution.
            <br />
            <br />
            Next, identify any dependencies. Do you need to complete certain
            tasks before others can begin? Input deliverables, dependencies, and
            milestones into your Gantt chart, or choose from the many online
            templates and apps available. Be sure you also understand how to
            write a project management report for a summary overview of the
            current status of the project.
            <br />
            <br />
            Tip: Involve your team in the planning process. The people
            performing the work have important insights into how tasks get done,
            how long they&#39;ll take, and who&#39;s the best person to tackle
            them. Draw on their knowledge. You&#39;ll need them to agree with
            the project schedule and set expectations for work to run smoothly.
          </>
        </Text>
        <Button
          className="common-pointer cursor-pointer flex items-center justify-center min-w-[322px] mt-[42px] rounded-lg"
          onClick={() => navigate("/aboutus")}
          leftIcon={
            <Img
              className="h-[18px] mr-1.5 my-1"
              src="images/img_download_2.svg"
              alt="download 2"
            />
          }
          color="white_A700"
          size="md"
          variant="fill"
        >
          <div className="capitalize font-bold font-cairo leading-[normal] text-center text-sm">
            Download
          </div>
        </Button>
        <Footer className="bg-blue_gray-800 flex font-dinnextltarabic items-center justify-center mt-[72px] md:px-5 shadow-bs1 w-full" />
      </div>
    </>
  );
};

export default BlogdetailsPage;
