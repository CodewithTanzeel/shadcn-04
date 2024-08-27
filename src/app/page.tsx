import Image from "next/image";
import TypoDemo from "./typography";
import ButtonDemo from "./button";
import CalenderDemo from "./calender";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-3xl pt-5">Shadcn ui</h1>
       {/* Main Div */}
      <div className="grid grid-cols-2 gap-4 p-5 m-7">
        {/* heading div */}
        <div className="flex flex-col gap-8 justify-center items-center p-5">
          <TypoDemo/>
          <div className="flex justify-center items-center gap-5">
            <ButtonDemo text={"Search"}/>
            <ButtonDemo text={"Profile"}/>
          </div>
        </div>
        {/* CalenderDiv */}
        <div className="flex justify-center items-center p-5">
          <CalenderDemo/>
        </div>
      </div>
    </div>
  );
}
