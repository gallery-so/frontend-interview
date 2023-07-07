import { ProfilePicture } from "@/components/ProfilePicture";
import { AssetCell } from "@/components/AssetCell";
import { MOCK_ASSETS } from "@/types";

export default function Home() {
  return (
    <div className="flex flex-col space-y-6 py-4">
      <header className="text-4xl font-bold px-4 py-3 flex items-center justify-between sticky top-0 bg-white">
        <h1>The Gallery</h1>

        <ProfilePicture />
      </header>

      <main className="px-4 grid grid-cols-3 gap-8">
        {MOCK_ASSETS.map((asset, index) => {
          return <AssetCell asset={asset} key={index} />;
        })}
      </main>
    </div>
  );
}
