"use client";
import Image from "next/image";
import { img } from "../../../../assets/contactCard-img";

export const MLCard: React.FC = () => {
  return (
    <div className="container m-3 flex w-96 flex-col items-center rounded-xl p-4 shadow-lg">
      <div className=" h-80">
        <Image
          width={300}
          height={300}
          className="picture rounded-xl "
          src={img.matthew}
          alt={"profile-picture"}
        />
      </div>
      <div className="text-center">
        <div color="blue-gray" className="mb-2 text-xl font-semibold">
          Matthew Land
        </div>
        <div color="blue-gray" className="font-medium">
          <a href="tel:+18504453428">+1 (850) 445-3428</a> /{" "}
          <a href="mailto:matthewland@me.com">matthewland@me.com</a>
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
