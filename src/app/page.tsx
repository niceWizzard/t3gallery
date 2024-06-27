import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/5ed187d4-d8f8-4f4d-a70b-d999ad79b364-ye995c.png",
  "https://utfs.io/f/79c8b911-6f7b-47d9-acea-46281d2531a8-clvff2.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((v) => (
          <div key={v.id} className="w-48">
            <img src={v.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
