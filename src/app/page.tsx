import { Asset } from "@/types";
import { ProfilePicture } from "@/components/ProfilePicture";
import { AssetCell } from "@/components/AssetCell";

function getAssets(): Promise<Asset[]> {
  return fetch("http://localhost:3000/api/gallery", {
    cache: "no-cache",
  }).then((res) => res.json());
}

export default async function Home() {
  const assets = await getAssets();

  return (
    <div className="flex flex-col space-y-6 py-4">
      <header className="text-4xl font-bold px-4 py-3 flex items-center justify-between sticky top-0 bg-white">
        <h1>The Gallery</h1>

        <ProfilePicture />
      </header>

      <main className="px-4 grid grid-cols-3 gap-8">
        {assets.map((asset, index) => {
          return <AssetCell asset={asset} key={index} />;
        })}
      </main>
    </div>
  );
}
