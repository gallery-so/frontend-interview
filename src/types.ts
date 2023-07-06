export type ImageAsset = {
  kind: "image";
  id: string;
  url: string;
  title: string;
  contractName: string;
};

export type SvgAsset = {
  kind: "svg";
  id: string;
  url: string;
  title: string;
  contractName: string;
};

export type VideoAsset = {
  kind: "video";
  id: string;
  url: string;
  title: string;
  contractName: string;
};

export type Asset = ImageAsset | SvgAsset | VideoAsset;

export const MOCK_ASSETS: Asset[] = [
  {
    id: "test-1",
    title: "Test Title",
    contractName: "Test Contract Name",
    kind: "image",
    url: "https://i.imgur.com/5eQp8py.jpeg",
  },
  {
    id: "test-2",
    title: "Test Title",
    contractName: "Test Contract Name",
    kind: "image",
    url: "https://i.imgur.com/5eQp8py.jpeg",
  },
  {
    id: "test-3",
    title: "Test Title",
    contractName: "Test Contract Name",
    kind: "image",
    url: "https://i.imgur.com/5eQp8py.jpeg",
  },
  {
    id: "test-4",
    title: "Test Title",
    contractName: "Test Contract Name",
    kind: "image",
    url: "https://i.imgur.com/5eQp8py.jpeg",
  },
  {
    id: "test-5",
    title: "Test Title",
    contractName: "Test Contract Name",
    kind: "image",
    url: "https://i.imgur.com/5eQp8py.jpeg",
  },
  {
    id: "test-6",
    title: "Test Title",
    contractName: "Test Contract Name",
    kind: "image",
    url: "https://i.imgur.com/5eQp8py.jpeg",
  },
  {
    id: "test-7",
    title: "Test Title",
    contractName: "Test Contract Name",
    kind: "image",
    url: "https://i.imgur.com/5eQp8py.jpeg",
  },
];
