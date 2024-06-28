import { getImage } from "~/server/db/queries/images";

export default async function FullPageImagePreview({ id }: { id: string }) {
  const image = await getImage({ id: parseInt(id) });
  return (
    <div className="flex h-full w-full ">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} alt={image.name} className=" object-contain" />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <span className="text-xl font-bold">{image.name}</span>
      </div>
    </div>
  );
}
