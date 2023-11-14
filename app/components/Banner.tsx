import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex justify-center my-2 p-2">
      <Link href="/Men">
        <Image
          src="/banner.jpg"
          alt="Banner Image"
          width={700}
          height={500}
          className="p-2 custom-shadow max-w-[300px] sm:max-w-[500px] lg:max-w-5xl 2xl:max-w-6xl"
        />
      </Link>
    </div>
  );
}
