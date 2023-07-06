import * as fs from "fs";
import { NextResponse } from "next/server";
import { MOCK_ASSETS } from "@/types";

type Data = {
  profilePictureAssetId: string | null;
};

function getData(): Data {
  try {
    const rawContents = fs.readFileSync("./data.json", "utf-8");
    return JSON.parse(rawContents);
  } catch {
    return { profilePictureAssetId: null };
  }
}

function writeData(data: Data) {
  fs.writeFileSync("./data.json", JSON.stringify(data), "utf-8");
}

export function GET(request: Request) {
  const { profilePictureAssetId } = getData();

  const foundAsset = MOCK_ASSETS.find(
    (asset) => asset.id === profilePictureAssetId
  );

  return NextResponse.json(foundAsset ?? null);
}

export async function POST(request: Request) {
  const { assetId } = await request.json();

  const data = getData();
  data.profilePictureAssetId = assetId;
  writeData(data);

  const foundAsset = MOCK_ASSETS.find((asset) => asset.id === assetId);

  return NextResponse.json(foundAsset ?? null);
}
