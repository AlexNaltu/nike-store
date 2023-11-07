import Image from "next/image";
import { client } from "../lib/sanity";
import Link from "next/link";
import product from "@/sanity/schemas/product";

async function getData() {
  const query = `*[_type == "product" && best == "Best"][0...4] {
        _id,
        name,
        "imageUrl": images[0].asset->url,
        price,
        "categoryName":category->name,
       "slug": slug.current
     }`;

  const data = await client.fetch(query);

  return data;
}

export default async function TopSeller() {
  const data: menCollection[] = await getData();
  return (
    <div className="mt-40 mb-28 max-w-5xl mx-auto">
      <div className="flex items-center justify-center gap-x-3 px-2">
        <div className="flex flex-col items-center gap-y-1">
          <h1 className="font-black  text-xl tracking-tighter uppercase text-p-color">
            Best Selling Product
          </h1>

          <div className="flex gap-x-3">
            {data.map((item) => (
              <div key={item._id}>
                <Image
                  src={item.imageUrl}
                  alt="shoe images"
                  width={250}
                  height={200}
                  className="w-full h-full object-contain object-center"
                />
                <Link
                  href={`/product/${item.slug}`}
                  className="text-[0.6rem] sm:text-sm md:text-lg font-bold tracking-tighter text-t-color"
                >
                  {item.name}
                </Link>
                <p className="text-[0.6rem] sm:text-sm font-extralight underline">
                  {item.categoryName}
                </p>
                <p className="text-[0.6rem] sm:text-sm md:text-lg  font-extralight">
                  ${item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
