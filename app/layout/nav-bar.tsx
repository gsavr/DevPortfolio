"use client";
import { useEffect, useState } from "react";
import { ToggleTheme } from "../components/ToggleTheme";
import { Logo } from "../components/hero/Logo";
import { HamburgerButton } from "../components/hero/HamburgerButton";
import { MobileMenu } from "../components/hero/MobileMenu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { links, resumeLink } from "../assets/links";
import {
  IconArrowGoBackFill,
  IconBxDownload,
  IconFileDownload,
} from "../components/SvgIcons";
//import resume from "pdf-loader!../assets/resume.pdf";

interface NavBarProps {
  open?: string | undefined;
  setOpen?: any;
}

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { open, setOpen } = props;
  //for transition effect
  const [opening, setOpening] = useState("closing");
  const [atHome, setAtHome] = useState(true);

  //see which page to render links conditionally
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") setAtHome(true);
    else if (pathname === "/resume") setAtHome(false);
  }, [pathname]);

  const openMobileMenu = () => {
    if (open === "closed") {
      setOpen("open");
      setTimeout(() => {
        setOpening("opening");
      }, 100);
    } else if (open === "open") {
      setOpening("closing");
      setTimeout(() => {
        setOpen("closed");
      }, 500);
    }
  };

  //map out links form links var
  const renderLinks = () => {
    return links.map(({ link, label, target, rel }) => {
      return (
        <div className="group cursor-pointer font-medium" key={label}>
          <Link href={link} target={target} rel={rel} aria-label={label}>
            {label}
          </Link>
          <div className="mx-2 transition duration-300 group-hover:border-b group-hover:border-[#8bd8bd]"></div>
        </div>
      );
    });
  };

  return (
    <nav className=" flex items-center justify-between rounded-full bg-[#E0ECEF]/80 font-[600] text-black transition-all duration-1500 dark:bg-[#63686A]/80 dark:text-primary">
      {/* Logo  */}
      <div className="flex items-center ">
        <Link href="/" aria-label="Go Home">
          <Logo />
        </Link>
        <span className="hidden pl-4 font-medium md:block  lg:font-semibold">
          GSDevelopment
        </span>
      </div>
      <span className="text-sm font-medium md:hidden">GSDevelopment</span>
      {/*  Menu */}
      <div className=" hidden h-10 items-center md:flex md:space-x-8">
        {/* All links -- conditionally depending on page */}
        {atHome ? (
          <>
            {renderLinks()}
            <div className="group">
              <Link
                href={resumeLink.link}
                className="group font-medium"
                aria-label="Go to my resume"
              >
                Resume
              </Link>
              <div className="mx-2 transition duration-300 group-hover:border-b group-hover:border-[#8bd8bd]"></div>
            </div>
          </>
        ) : (
          /* Back button and DL on PDF page on desktop */ <>
            <Link
              href="/"
              className="flex items-center justify-center gap-1 font-medium hover:border-b hover:border-[#8bd8bd]"
              aria-label="Go to Homepage"
            >
              Return <IconArrowGoBackFill className="text-2xl" />
            </Link>
            <Link
              href={
                "https://giorgiosavrondotcom.s3.amazonaws.com/gsxresume.pdf"
              }
              download="Giorgio Savron Resume"
              aria-label="Download my resume"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1 font-medium hover:border-b hover:border-[#8bd8bd]"
            >
              Download <IconBxDownload className="text-2xl" />
            </Link>
          </>
        )}
        {/* Position for toggle theme buttton in mobile is located in hamburger button */}
        <div className="group hidden md:block">
          <ToggleTheme />
        </div>
      </div>

      {atHome ? (
        <>
          <HamburgerButton open={open} openMobileMenu={openMobileMenu} />
          <MobileMenu
            open={open}
            openMobileMenu={openMobileMenu}
            opening={opening}
          />
        </>
      ) : (
        <>
          {/* Back button and DL button on PDF page mobile */}
          <Link
            href={"https://giorgiosavrondotcom.s3.amazonaws.com/gsxresume.pdf"}
            download="Giorgio Savron Resume"
            aria-label="Download my resume"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1 hover:border-b hover:border-[#8bd8bd] md:hidden"
          >
            <IconFileDownload className="text-4xl" />
          </Link>
          <Link
            href="/"
            aria-label="Go to Homepage"
            className="rounded-full bg-[#648990]/50 p-3 text-lg text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-transparent dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-transparent md:hidden"
          >
            <IconArrowGoBackFill className="text-2xl" />
          </Link>
        </>
      )}
    </nav>
  );
};
