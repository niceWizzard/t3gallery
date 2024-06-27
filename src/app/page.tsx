import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/5ed187d4-d8f8-4f4d-a70b-d999ad79b364-ye995c.png",
  "https://utfs.io/f/79c8b911-6f7b-47d9-acea-46281d2531a8-clvff2.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      {posts.map((v) => (
        <span key={v.id}>{v.name ?? "EMPTY"}</span>
      ))}
      <div className="flex flex-wrap gap-4">
        {[...mockImages].map((v) => (
          <div key={v.id.toString() + v.url} className="w-48">
            <img src={v.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
