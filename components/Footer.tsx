"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NodeLogo from "../public/node-footer-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutube,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { FaStar } from "react-icons/fa";
import { OswaldFont, PoppinsFont, OutfitFont } from "@/fonts";

const SocialIcon = React.memo(({ href, icon, label, hoverColor }: any) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className={`transition-all duration-300 text-sm md:text-base ${hoverColor}`}
  >
    <FontAwesomeIcon icon={icon} />
  </a>
));

const Stars = () => (
  <div className="flex justify-end mt-2 gap-1">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className="text-yellow-400 text-[10px]" />
    ))}
  </div>
);

const Footer = () => {
  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Works", href: "#works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Team", href: "#team" },
  ];

  const socialLinks = [
    {
      href: "https://linkedin.com",
      icon: faLinkedin,
      hoverColor: "hover:text-blue-800",
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      icon: faYoutube,
      hoverColor: "hover:text-red-600",
      label: "YouTube",
    },
    {
      href: "https://twitter.com",
      icon: faTwitter,
      hoverColor: "hover:text-sky-500",
      label: "Twitter",
    },
    {
      href: "https://facebook.com",
      icon: faFacebookF,
      hoverColor: "hover:text-blue-700",
      label: "Facebook",
    },
  ];

  const officeLocations = [
    {
      region: "USA",
      address: "2451 Sunderland Ln, Lewisville TX 75067",
    },
    {
      region: "ASIA",
      address:
        "3-I, 2nd Floor, Block 3, Business Bay, Phase 7, Bahria Town, Islamabad, Pakistan",
    },
  ];

  const infoItems = [
    {
      type: "text",
      content:
        "When you need an IT or software expert without the tedious hiring process",
      extraClass: "pb-5",
    },
    {
      type: "link",
      content: "info@diligenttechnologies.co",
      href: "mailto:info@diligenttechnologies.co",
      extraClass: "pb-20",
    },
  ];

  const footerLinks = [
    {
      href: "/",
      text: "Terms of Services",
      withBorder: true,
    },
    {
      href: "/",
      text: "Privacy Policy",
      withBorder: false,
    },
  ];

  const sharedTextClass = `lg:text-[17px] text-[hsla(0,0%,100%,.7)] ${PoppinsFont}`;
  const sharedLinkClass = `px-2 text-[hsla(0,0%,100%,.7)] ${PoppinsFont}`;
  const borderRightClass = "border-r-2 border-gray-600";

  return (
    <div className="px-[5vw] pt-[60px] bg-[#fff] pb-12">
      <div className="bg-[#131213] rounded-xl p-10">
        <div className="flex lg:flex-row flex-col justify-evenly lg:gap-20 gap-6 w-full pb-5">
          <div className="lg:w-[23%] w-full text-center">
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

            {infoItems.map((item, index) =>
              item.type === "text" ? (
                <p
                  key={index}
                  className={`${sharedTextClass} ${item.extraClass}`}
                >
                  {item.content}
                </p>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className={`${sharedTextClass} ${item.extraClass}`}
                >
                  {item.content}
                </a>
              )
            )}

            <div className="flex justify-center items-center gap-3 mt-5">
              {socialLinks.map((link, index) => (
                <SocialIcon key={index} {...link} />
              ))}
            </div>
          </div>

          <div className="lg:w-[27%] w-full p-4 lg:p-0">
            <h4
              className={`text-[20px] lg:text-2xl font-bold mb-6 text-center lg:mb-8 ${OswaldFont}`}
            >
              LOCATIONS
            </h4>
            <div className="space-y-4 lg:space-y-6">
              {officeLocations.map((loc, idx) => (
                <div
                  key={idx}
                  className="flex lg:flex-row flex-col items-center lg:items-start justify-center lg:justify-start text-center lg:text-left gap-2 sm:gap-4 lg:gap-6"
                >
                  <p
                    className={`flex flex-col lg:flex-row gap-4 lg:gap-9 text-[hsla(0,0%,100%,.7)] ${PoppinsFont}`}
                  >
                    <strong className="text-gray-400">{loc.region}</strong>
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-[20%] w-full flex flex-col">
            <h4
              className={`text-[20px] lg:text-2xl font-bold mb-6 text-center ${OswaldFont} uppercase`}
            >
              Site Links
            </h4>
            <ul className={`space-y-4 text-center ${PoppinsFont}`}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="lg:text-[17px] text-1xl hover:underline text-[hsla(0,0%,100%,.7)] tracking-[0.9px]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex justify-center mt-8">
              <div className="relative lg:w-[220px] w-[220px] h-auto py-4 px-4 flex flex-col justify-center text-white rounded-lg overflow-hidden bg-[url('/footer-item-bg.svg')] bg-cover bg-center">
                <div className="text-right z-10">
                  <span
                    className={`text-[20.5px] font-bold ${OutfitFont} leading-4`}
                  >
                    REVIEW US
                  </span>
                  <p className={`text-[11px] ${OutfitFont} leading-4`}>
                    ON <strong>DESIGNRUSH</strong>
                  </p>
                  <Stars />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex md:flex-row flex-col md:gap-0 gap-4 lg:mt-14 mt-7 items-center justify-center text-center md:justify-between border-t-2 border-gray-800 pt-6">
          <p className={`text-sm text-[hsla(0,0%,100%,.7)] ${PoppinsFont}`}>
            Node Technologies 2020 – 2025. All Rights Reserved
          </p>
          <div className="flex items-center">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${sharedLinkClass} ${
                  link.withBorder ? borderRightClass : ""
                } hover:text-white transition-all duration-200`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Footer);
