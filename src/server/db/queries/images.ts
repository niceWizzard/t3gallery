import "server-only";

import { db } from "..";
import { auth } from "@clerk/nextjs/server";

export async function getImages({ userId }: { userId: string }) {
  return await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
    where: (model, { eq }) => eq(model.userId, userId),
  });
}


export async function getImage({ id }: { id: number }) {
  const user = auth();
  if (!user.userId) throw new Error("No user");
  const image =await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if(!image) throw new Error("No image");

  if(image.userId !== user.userId) throw new Error("Not your image");

  return image
}