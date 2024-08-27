import Image from "next/image";
import TypoDemo from "./typography";
import ButtonDemo from "./button";
import CalenderDemo from "./calender";

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-blue-300 to-purple-500 h-full w-full" >
      <h1 className="text-center pt-5 text-white font-extrabold text-5xl  ">Shadcn ui</h1>
      {/* Main Div */}
      <div className="grid grid-cols-2 gap-4 p-5 m-7">
        {/* heading div */}
        <div className="flex flex-col gap-8 justify-center items-center p-5">
          <TypoDemo />
          <div className="flex justify-center items-center gap-5">
            <ButtonDemo text={"Search"} />
            <ButtonDemo text={"Profile"} />
          </div>
        </div>
        {/* CalenderDiv */}
        <div className="flex justify-center items-center p-5">
          <CalenderDemo />
        </div>
      </div>
    </div>
  );
}
