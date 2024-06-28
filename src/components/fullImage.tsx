import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/db/queries/images";

export default async function FullPageImagePreview({ id }: { id: string }) {
  const image = await getImage({ id: parseInt(id) });
  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-full w-full ">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} alt={image.name} className=" object-contain" />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col items-stretch border-l">
        <span className="border-b p-2 text-center text-xl">{image.name}</span>
        <span className="p-4">Uploaded by {uploaderInfo.fullName} </span>
        <span className="p-4">
          Created at {new Date(image.createdAt).toLocaleString()}{" "}
        </span>
      </div>
    </div>
  );
}
