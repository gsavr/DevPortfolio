"use client";
import Image from "next/image";
import { img } from "../../../../assets/contactCard-img";

export const GSCard: React.FC = () => {
  return (
    <div className="container m-2 w-96 rounded-xl p-4 shadow-lg">
      <div className="mb-6 h-80">
        <Image
          width={400}
          height={400}
          className="picture rounded-xl"
          src={img.giorgio}
          alt={"profile-picture"}
        />
      </div>
      <div className="text-center">
        <div color="blue-gray" className="mb-2 text-xl font-semibold">
          Giorgio Savron
        </div>
        <div color="blue-gray" className="font-medium">
          <a href="tel:+18502256786">+1 (850) 225-6786</a> /{" "}
          <a href="mailto:giorgiosav@me.com">giorgiosav@me.com</a>
        </div>
        <div color="blue-gray" className="m-2 font-medium">
          <p>1724 Connecticut Ave NW Apt 2</p>
          <p>Washington, DC 20009</p>
        </div>
        <div className="text-sm">If found, please contact me.</div>
      </div>
    </div>
  );
};
