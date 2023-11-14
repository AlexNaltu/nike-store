import Image from "next/image";
import { client } from "../lib/sanity";
import Link from "next/link";
import product from "@/sanity/schemas/product";
import { simpleProduct } from "../interface";

async function getData() {
  const query = `*[_type == "product" && category->name == "Men"][0...3] {
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

export default async function MenCollection() {
  const data: simpleProduct[] = await getData();
  return (
    <div className="my-2 max-w-5xl mx-auto">
      <div className="flex items-center justify-center gap-x-3 px-2">
        <Image
          src="/blueshoes.webp"
          alt="Shoe Image"
          width={280}
          height={200}
          className="hidden sm:block object-contain object-center w-1/4 xl:w-2/4 mt-10"
        />
        <div className="flex flex-col items-center gap-y-1">
          <h1 className="font-black  text-xl tracking-tighter uppercase text-p-color">
            Men's Collection
          </h1>
          <Link
            href="/Men"
            className="mb-2 font-extralight text-gray-500 underline text-sm"
          >
            Shop All Products
          </Link>
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
