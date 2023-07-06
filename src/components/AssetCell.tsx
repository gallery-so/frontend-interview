import { Asset } from "@/types";
import { Card } from "@/components/ui/card";

type Props = {
  asset: Asset;
};

export function AssetCell({ asset }: Props) {
  return (
    <Card className="flex flex-col divide-y-2 space-y-3 divide-black pt-4 overflow-hidden">
      <div className="text-sm px-4">
        <span className="font-medium">{asset.title}&nbsp;</span>
        <span>from&nbsp;</span>
        <span className="font-medium">{asset.contractName}</span>
      </div>

      <div className="aspect-square bg-zinc-200"></div>
    </Card>
  );
}
