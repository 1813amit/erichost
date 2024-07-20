import MegaMenu1 from "../MegaMenu1";
import { Button, Img, Heading } from "./..";
import React from "react";

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);
  const [menuOpen3, setMenuOpen3] = React.useState(false);

  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center py-[0.63rem] bg-white-a700_01 shadow-sm relative`}
    >
      <div className="container-xs flex items-center justify-between gap-[1.25rem] lg:p-[1.25rem] md:flex-col md:p-[1.25rem]">
        <Img
          src="images/img_header_logo.png"
          alt="Header Logo"
          className="h-[1.88rem] w-[10.50rem] self-end object-contain md:self-auto"
        />
        <div className="mr-[0.25rem] flex items-center gap-[1.13rem] md:mr-0 md:flex-col">
          <ul className="flex gap-[2.75rem] sm:flex-col">
            <li
              onMouseLeave={() => {
                setMenuOpen(false);
              }}
              onMouseEnter={() => {
                setMenuOpen(true);
              }}
            >
              <div className="flex cursor-pointer gap-[0.50rem]">
                <Heading size="textxl" as="p" className="leading-[1.25rem]">
                  Hosting
                </Heading>
                <Img src="images/img_favorite.svg" alt="Hosting Icon" className="h-[1.25rem] w-[0.50rem]" />
              </div>
              {menuOpen ? <MegaMenu1 /> : null}
            </li>
            <li
              onMouseLeave={() => {
                setMenuOpen1(false);
              }}
              onMouseEnter={() => {
                setMenuOpen1(true);
              }}
            >
              <div className="flex cursor-pointer gap-[0.50rem]">
                <Heading size="textxl" as="p" className="leading-[1.25rem]">
                  Hosting by Service
                </Heading>
                <Img src="images/img_favorite.svg" alt="Service Icon" className="h-[1.25rem] w-[0.50rem]" />
              </div>
              {menuOpen1 ? <MegaMenu1 /> : null}
            </li>
            <li
              onMouseLeave={() => {
                setMenuOpen2(false);
              }}
              onMouseEnter={() => {
                setMenuOpen2(true);
              }}
            >
              <div className="flex cursor-pointer gap-[0.50rem]">
                <Heading size="textxl" as="p" className="leading-[1.25rem]">
                  Resources
                </Heading>
                <Img src="images/img_favorite.svg" alt="Resources Icon" className="h-[1.25rem] w-[0.50rem]" />
              </div>
              {menuOpen2 ? <MegaMenu1 /> : null}
            </li>
            <li
              onMouseLeave={() => {
                setMenuOpen3(false);
              }}
              onMouseEnter={() => {
                setMenuOpen3(true);
              }}
            >
              <div className="flex cursor-pointer gap-[0.50rem]">
                <Heading size="textxl" as="p" className="leading-[1.25rem]">
                  Contact
                </Heading>
                <Img src="images/img_favorite.svg" alt="Contact Icon" className="h-[1.25rem] w-[0.50rem]" />
              </div>
              {menuOpen3 ? <MegaMenu1 /> : null}
            </li>
          </ul>
          <Button
            shape="round"
            // leftIcon={
            //   <Img
            //     src="images/img_television.svg"
            //     alt="Television"
            //     className="h-[0.06rem] h-[1.13rem] w-[0.00rem] w-[0.75rem] text-white-a700 bg-white-a700"
            //   />
            // }
            className="min-w-[5.13rem] gap-[0.25rem] text-white-a700 bg-blue-700"
          >
            Login 
          </Button>
        </div>
      </div>
    </header>
  );
}
