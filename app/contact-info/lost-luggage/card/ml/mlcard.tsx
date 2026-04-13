"use client";
import { Location } from "../../../../components/Location";
import Image from "next/image";
import { img } from "../../../../assets/contactCard-img";

export const MLCard: React.FC = () => {
  return (
    <>
      <Location email="matthewland@me.com" />
      <div className="flex h-screen w-screen justify-center bg-slate-100">
        <div className="container m-3 flex h-fit w-96 flex-col items-center rounded-xl bg-white p-4 shadow-xl">
          <div>
            <Image
              width={175}
              height={175}
              className="rounded-full shadow-lg"
              src={img.matthew}
              alt={"profile-picture"}
            />
          </div>
          <div className="text-center">
            <div color="blue-gray" className="mb-2 mt-4 text-xl font-semibold">
              Matthew Land
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
                <a href="tel:+18504453428">+1 (850) 445-3428</a> /{" "}
              </div>
              <div className="flex items-center">
                <Image
                  width={20}
                  height={20}
                  src={img.email}
                  alt={"email"}
                  className="mr-2"
                />
                <a href="mailto:matthewland@me.com">matthewland@me.com</a>
              </div>
            </div>
            <div color="blue-gray" className="m-2 font-medium">
              <p>1724 Connecticut Ave NW Apt 2</p>
              <p>Washington, DC 20009</p>
            </div>
            <div className="text-sm">If found, please contact me.</div>
          </div>
        </div>
      </div>
    </>
  );
};
