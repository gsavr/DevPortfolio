"use client";
import { useEffect } from "react";
import Link from "next/link";
import { links, resumeLink } from "../../assets/links";

interface MobileMenuProps {
  open: string | undefined;
  openMobileMenu: () => void;
  opening: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = (props) => {
  const { open, openMobileMenu, opening } = props;

  //do not allow scrolling when mobile menu is open
  useEffect(() => {
    if (open === "open") {
      document.body.style.overflow = "hidden";
    } else if (open === "closed") {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  //map out links form links var
  const renderLinks = () => {
    return links.map(({ link, label, target, rel }) => {
      return (
        <Link
          href={link}
          key={label}
          target={target}
          rel={rel}
          aria-label={label}
          onClick={openMobileMenu}
          className={`hover:text-[#4fa285] ${opening} cursor-pointer transition-all duration-200`}
        >
          {label}
        </Link>
      );
    });
  };

  return (
    <>
      {open === "open" && (
        <div id="mobile-menu" className={`${opening} mobile-menu z-50`}>
          <>
            <Link
              href="#hero"
              aria-label="Open Mobile Menu"
              onClick={openMobileMenu}
              className={`hover:text-[#4fa285] ${opening} cursor-pointer transition-all duration-200`}
            >
              Home
            </Link>
            {renderLinks()}
            <Link
              href={resumeLink.link}
              aria-label="Go to Resume"
              className={`hover:text-[#4fa285] ${opening} cursor-pointer transition-all duration-200`}
            >
              Resume
            </Link>
          </>
        </div>
      )}
    </>
  );
};
