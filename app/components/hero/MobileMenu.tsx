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
    // Function to handle body overflow
    const handleBodyOverflow = () => {
      document.body.style.overflow = open ? "hidden" : "auto";
    };

    // Set body overflow when modal is open
    handleBodyOverflow();

    // Cleanup function to restore body overflow when component unmounts or modal closes
    return () => {
      document.body.style.overflow = "auto";
    };
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
              onClick={openMobileMenu}
              className={`hover:text-[#4fa285] ${opening} cursor-pointer transition-all duration-200`}
            >
              Home
            </Link>
            {renderLinks()}
            <Link
              href={resumeLink.link}
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
