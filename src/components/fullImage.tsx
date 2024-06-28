import { getImage } from "~/server/db/queries/images";

export default async function FullPageImagePreview({ id }: { id: string }) {
  const image = await getImage({ id: parseInt(id) });
  return (
    <img src={image.url} alt={image.name} className="w-36 object-contain" />
  );
}
