import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
        price,
        description,
        name,
        "slug": slug.current,
        "categoryName": category->name,
        images
    }`;

  const data = await client.fetch(query);

  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);
  return (
    <div className="my-5 md:my-8 xl:my-12">
      <div className="mx-auto max-w-3xl px-4">
        <div className="grid sm:grid-cols-2 gap-7">
          <ImageGallery images={data.images} />
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-black tracking-tighter text-lg text-t-color uppercase">
                {data.name}
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-sm underline">{data.categoryName}</p>
                <p className="text-sm font-black">${data.price}</p>
              </div>
            </div>
            <p className="text-lg text-zinc-500 tracking-tighter text-s-color">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
