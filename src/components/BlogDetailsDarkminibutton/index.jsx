import React from "react";

import { Img } from "components";

const BlogDetailsDarkminibutton = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-5 items-center justify-start w-5">
          <div className="flex flex-col h-5 items-center justify-start w-5">
            <Img className="h-5 w-5" alt="facebook" src={props?.facebook} />
          </div>
        </div>
      </div>
    </>
  );
};

BlogDetailsDarkminibutton.defaultProps = {
  facebook: "images/img_facebook.svg",
};

export default BlogDetailsDarkminibutton;
