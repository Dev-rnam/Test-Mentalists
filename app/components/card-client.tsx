import Image from "next/image";
import { CLIENT } from "../constants";

type CardClient = {
  title: string;
  description: string;
};

export const CardClient = () => {
  return (
    <div className="w-[200px] box-card h-[180px] z-30    rounded-xl bg-black flex items-center flex-col p-4">
      <h2 className=" text-xl text-white font-semibold mb">5000+</h2>
      <p className="text-white mt-4 mb-6">Total Client</p>
      <div className=" flex justify-center -gap-8">
        {CLIENT.map((data) => (
          <img
            key={data.id}
            src={data.image}
            alt=""
            className=" rounded-full object-cover border-white border-solid h-[50px] w-[50px] bord -ml-4"
          />
        ))}
      </div>
    </div>
  );
};
