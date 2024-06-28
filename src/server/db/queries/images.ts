import "server-only";

import { db } from "..";

export async function getImages({ userId }: { userId: string }) {
  return await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
    where: (model, { eq }) => eq(model.userId, userId),
  });
}
