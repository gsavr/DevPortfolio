import Image from "next/image";
import arrows from "../assets/images/double-angle-up-w.svg";
import githubC from "../assets/images/github-c.png";
import linkedin from "../assets/images/linkedin.png";
import gsLogo from "../assets/images/gs_logo.svg";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="w-screen bg-[#444444] text-white dark:bg-[#5b6165]">
      <div className=" relative bottom-0 mx-auto px-14 md:pb-10 md:pt-12 lg:px-24">
        {/* UP arrows at top of footer */}
        <Link
          href="#home"
          className="up-button cursor-pointer"
          aria-label="Scroll to top"
        >
          <Image
            src={arrows}
            alt=""
            width={70}
            height={70}
            className="up-arrow h-16 w-16"
          />
        </Link>
        {/*  Flex container for all items  */}
        <div className="flex flex-col items-center justify-between space-y-24 md:flex-row md:space-y-0">
          {/*  Copy  */}
          <div className="mt-14">
            <div className="flex space-x-3 text-center md:-mt-10">
              <div>&copy; 2025, Giorgio Savron Development</div>
            </div>
          </div>

          {/*  Social  */}
          <div className="!mt-10 flex items-center space-x-8 pb-10">
            <div>
              <a
                href="https://www.linkedin.com/in/giorgio-savron/"
                target="_blank"
                rel="noreferrer"
                aria-label="Go to my linkedin"
              >
                <Image
                  src={linkedin}
                  alt="Linkedin"
                  width={40}
                  height={40}
                  className="ficon h-[30px] w-[30px]"
                />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/gsavr"
                target="_blank"
                rel="noreferrer"
                aria-label="Go to my github"
              >
                <Image
                  src={githubC}
                  alt="github"
                  width={40}
                  height={40}
                  className="ficon h-[30px] w-[30px]  "
                />
              </a>
            </div>
            <div>
              <Image
                src={gsLogo}
                alt="Linkedin"
                width={40}
                height={40}
                className="ficon h-[30px] w-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
