"use client";
import Image from "next/image";
import { img } from "../../../../assets/contactCard-img";

export const GSCard: React.FC = () => {
  return (
    <div className="container m-3 flex w-96 flex-col items-center rounded-xl p-4 shadow-xl">
      <div className="h-72">
        <Image
          width={300}
          height={300}
          className="rounded-xl shadow-md"
          src={img.giorgio}
          alt={"profile-picture"}
        />
      </div>
      <div className="mt-2 text-center">
        <div color="blue-gray" className="mb-2 text-xl font-semibold">
          Giorgio Savron
        </div>
        <div
          color="blue-gray"
          className="flex flex-col items-center justify-center font-medium"
        >
          <div className="flex items-center">
            <Image
              width={20}
              height={20}
              src={img.phone}
              alt={"phone"}
              className="mr-2"
            />
            <a href="tel:+18502256786">+1 (850) 225-6786</a>{" "}
          </div>
          <div className="flex items-center">
            <Image
              width={20}
              height={20}
              src={img.email}
              alt={"email"}
              className="mr-2"
            />
            <a href="mailto:giorgiosav@me.com">giorgiosav@me.com</a>{" "}
          </div>
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
