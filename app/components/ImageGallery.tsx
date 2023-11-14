"use client";

import Image from "next/image";
import { useState } from "react";
import { urlFor } from "../lib/sanity";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-2xl">
            <Image
              src={urlFor(image).url()}
              alt="/"
              width={400}
              height={400}
              className="w-full h-full object-contain cursor-pointer object-center"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="/"
          width={700}
          height={700}
          className="w-full h-full object-contain object-center"
        />
      </div>
    </div>
  );
}
