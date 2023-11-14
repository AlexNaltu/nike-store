import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();

  if (pathname.startsWith("/Men")) return null;
  if (pathname.startsWith("/Women")) return null;
  if (pathname.startsWith("/Teens")) return null;
  if (pathname.startsWith("/product")) return null;

  return (
    <div className="max-w-7xl flex items-center justify-center gap-3 md:gap-6 p-2 my-2 mx-auto">
      <div className="flex flex-col gap-y-1 md:gap-y-6">
        <h1 className="font-semibold tracking-tighter text-white uppercase text-[0.6rem] sm:text-sm lg:text-2xl ">
          <span className="font-black text-t-color">All in One.</span> <br />
          Quality, Fashion, Comfort.
        </h1>
        <Button className="uppercase text-[0.6rem] px-2 sm:px-4 w-fit bg-white rounded-xl lg:text-base tracking-tight lg:px-6 font-bold transition hover:bg-t-color hover:text-white duration-150">
          Shop Now
        </Button>
      </div>
      <div>
        <Image
          src="/nikepng.png"
          alt="/"
          width={400}
          height={200}
          className="max-w-[200px] sm:max-w-[600px] lg:max-w-[800px] shadow-2xl rounded-xl"
        />
      </div>
    </div>
  );
}
