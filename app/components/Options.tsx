import Image from "next/image";
import { OptionsData } from "../data/optionsdata";

export default function Options() {
  return (
    <div className="flex justify-center my-4 lg:my-10 2xl:my-14">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {OptionsData.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center max-w-xs p-4">
            <Image src={item.icon} alt="photos" width={50} height={50} />
            <h1 className="font-black text-xs lg:text-sm text-center">{item.title}</h1>
            <p className="text-center text-[0.5rem] lg:text-xs font-extralight tracking-tighter">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
