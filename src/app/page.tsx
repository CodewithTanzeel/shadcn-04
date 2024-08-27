
import Image from "next/image";
import CalenderDemo from "./calender";
import TypoDemo from "./typography";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-3xl pt-5">Shadcn ui</h1>
      <div className="grid grid-cols-2 gap-4 p-5 m-7">
        {/* Heading div */}
        <div className="flex justify-center p-5 items-center "><TypoDemo/></div>
        {/* CalenderDiv */}
        <div className="justify-center items-center p-5 flex"> <CalenderDemo />

        </div>
      </div>
    </div>
  );
}
