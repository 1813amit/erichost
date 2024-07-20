import React from "react";

const sizes = {
  textxs: "text-[0.69rem] font-medium",
  texts: "text-[0.75rem] font-medium",
  textmd: "text-[0.81rem] font-medium",
  textlg: "text-[0.88rem] font-medium",
  textxl: "text-[0.94rem] font-medium",
  headingxs: "text-[0.81rem] font-bold",
  headings: "text-[0.88rem] font-semibold",
  headingmd: "text-[1.00rem] font-semibold sm:text-[0.81rem]",
  headinglg: "text-[1.06rem] font-bold sm:text-[0.88rem]",
  headingxl: "text-[1.13rem] font-semibold sm:text-[0.94rem]",
  heading2xl: "text-[1.25rem] font-semibold sm:text-[1.06rem]",
  heading3xl: "text-[1.88rem] font-semibold lg:text-[1.88rem] md:text-[1.75rem] sm:text-[1.56rem]",
};

const Heading = ({ children, className = "", size = "textmd", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
