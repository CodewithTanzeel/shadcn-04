import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-3xl pt-5">Shadcn ui</h1>
      <div className="grid grid-cols-2 gap-4 p-5 m-7">
        <div className="bg-blue-500 h-5">Heading</div>
        <div className="bg-red-600 h-5">Calender</div>
      </div>
    </div>
  );
}
