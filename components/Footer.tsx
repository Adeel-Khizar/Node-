"use client";
import { Rancher, SedaN } from "@/fonts";
import NodeLogo from "../public/node-footer-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutube,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { OswaldFont, PoppinsFont } from "@/fonts";

const Footer = () => {
  return (
    <div className="px-[5vw] pt-[60px] bg-[#fff] pb-12">
      <div className="bg-[#131213] rounded-xl p-10">
        <div className="flex lg:flex-row flex-col justify-evenly lg:gap-20 gap-6 w-full pb-5 ">
          <div className="lg:w-[23%] w-full  text-center">
            <div className="flex items-center justify-center lg:pb-8 pb-4">
              <Link href="/">
                <Image
                  className="w-auto h-[45px] lg:h-[55px]"
                  src={NodeLogo}
                  height={75}
                  alt="Node Logo"
                />
              </Link>
            </div>
            <p
              className={` lg:text-[17px] pb-5 ${PoppinsFont}  text-[hsla(0,0%,100%,.7)] `}
            >
              When you need an IT or software expert without the tedious hiring
              process
            </p>
            <a
              href="#"
              className={` lg:text-[17px] pb-20 ${PoppinsFont}  text-[hsla(0,0%,100%,.7)]`}
            >
              info@diligenttechnologies.co
            </a>

            <div className="flex justify-center items-center gap-3 mt-5">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className=" hover:text-blue-800 transition-all duration-300 text-sm md:text-base"
                />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className=" hover:text-red-600 transition-all duration-300 text-sm md:text-base"
                />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className=" hover:text-sky-500 transition-all duration-300 text-sm md:text-base"
                />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className=" hover:text-blue-700 transition-all duration-300 text-sm md:text-base"
                />
              </a>
            </div>
          </div>

          {/* !================================================ */}
          <div className="lg:w-[27%] w-full  p-4 lg:p-0">
            <h4
              className={`text-[15px] lg:text-2xl font-bold mb-6 text-center lg:mb-8 ${OswaldFont}`}
            >
              LOCATIONS
            </h4>

            <div className="space-y-4 lg:space-y-6">
              <div className="flex lg:flex-row flex-col items-center lg:items-start justify-center lg:justify-start text-center lg:text-left gap-2 sm:gap-4 lg:gap-6">
                <p
                  className={`flex flex-col lg:flex-row gap-4 lg:gap-9 text-[hsla(0,0%,100%,.7)] ${PoppinsFont}`}
                >
                  <strong className="text-yellow-400">USA</strong>
                  2451 Sunderland Ln, Lewisville TX 75067
                </p>
              </div>

              <div className="flex lg:flex-row flex-col items-center lg:items-start justify-center lg:justify-start text-center lg:text-left gap-2 sm:gap-4 lg:gap-6">
                <p
                  className={`flex flex-col lg:flex-row gap-4 lg:gap-9 text-[hsla(0,0%,100%,.7)] ${PoppinsFont}`}
                >
                  <strong className="text-yellow-400">ASIA</strong>
                  3-I, 2nd Floor, Block 3, Business Bay, Phase 7, Bahria Town,
                  Islamabad, Pakistan
                </p>
              </div>
            </div>
          </div>
          {/* !================================================ */}
          <div className="lg:w-[20%] w-full flex flex-col">
            <h4
              className={`text-[15px] lg:text-2xl font-bold mb-6 text-center ${OswaldFont} uppercase`}
            >
              Site Links
            </h4>
            <ul className={`space-y-4 text-center ${PoppinsFont}`}>
              <li>
                <a
                  href="#"
                  className={`lg:text-[17px] text-1xl hover:underline text-[hsla(0,0%,100%,.7)] tracking-[0.9px]`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`lg:text-[17px] text-1xl hover:underline text-[hsla(0,0%,100%,.7)] tracking-[0.9px]`}
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`lg:text-[17px] text-1xl hover:underline text-[hsla(0,0%,100%,.7)] tracking-[0.9px]`}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`lg:text-[17px] text-1xl hover:underline text-[hsla(0,0%,100%,.7)] tracking-[0.9px]`}
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex md:flex-row flex-col md:gap-0 gap-4 lg:mt-14 mt-7 items-center justify-center text-center md:justify-between border-t-2 border-gray-800 pt-6">
          <p
            className={` text-sm text-500 text-[hsla(0,0%,100%,.7)] ${PoppinsFont}`}
          >
            Copyright 2024 All Right Reserved
          </p>
          <div className="flex items-center ">
            <Link
              href="/"
              className={` px-2  border-r-2 border-gray-600  text-[hsla(0,0%,100%,.7)] ${PoppinsFont}`}
            >
              Terms of Services{" "}
            </Link>
            <Link
              href="/"
              className={` px-2  ${SedaN} text-[hsla(0,0%,100%,.7)] ${PoppinsFont}`}
            >
              Terms of Services{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
