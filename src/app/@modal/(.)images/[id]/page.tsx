import React from "react";
import { getImage } from "~/server/db/queries/images";

async function PhotoModal({ params: { id } }: { params: { id: string } }) {
  const image = await getImage({ id: parseInt(id) });
  return (
    <div>
      <img src={image.url} alt={image.name} className="w-36 object-contain" />
    </div>
  );
}

export default PhotoModal;
