import Image from "next/image";
import arrows from "../assets/images/double-angle-up-w.svg";
import githubC from "../assets/images/github-c.png";
import linkedin from "../assets/images/linkedin.png";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#252c38] text-white dark:bg-[#252c38]">
      <div className=" relative mx-auto px-24 md:pb-10 md:pt-12">
        {/* UP arrows at top of footer */}
        <Link href="#home" className="up-button cursor-pointer">
          <Image
            src={arrows}
            alt=""
            width={400}
            height={400}
            className="up-arrow h-16 w-16"
          />
        </Link>
        {/*  Flex container for all items  */}
        <div className="flex flex-col items-center justify-between space-y-24 md:flex-row md:space-y-0">
          {/*  Copy  */}
          <div className="mt-14">
            <div className="flex space-x-3 text-center md:-mt-10">
              <div>&copy; 2024, Giorgio Savron Development</div>
            </div>
          </div>

          {/*  Social  */}
          <div className="!mt-10 flex items-center space-x-8 pb-10">
            <div>
              <a
                href="https://www.linkedin.com/in/giorgio-savron/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={linkedin}
                  alt="Linkedin"
                  width={40}
                  height={40}
                  className="ficon h-[30px] w-[30px]  "
                />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/gsavr"
                target="_blank"
                rel="noreferrer"
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
          </div>
        </div>
      </div>
    </footer>
  );
};
