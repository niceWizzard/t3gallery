import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((v) => (
          <div key={v.id.toString() + v.url} className="w-48">
            <img src={v.url} alt="image" />
            <span>{v.name}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
