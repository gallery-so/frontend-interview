import fetch from "node-fetch";
import * as fs from "fs";
import { afterAll, beforeAll, beforeEach, expect, it } from "vitest";
import { MOCK_ASSETS } from "../../../types";

afterAll(() => {
  fs.rmSync("./data.json");
});

it("can get a profile image when nothing is set", async () => {
  const response = await fetch("http://localhost:3000/api/profile-image").then(
    (response) => response.json()
  );

  expect(response).toBeNull();
});

it("can set a profile image", async () => {
  const response = await fetch("http://localhost:3000/api/profile-image", {
    method: "POST",
    body: JSON.stringify({
      assetId: "test-1",
    }),
  }).then((response) => response.json());

  expect(response).toEqual(MOCK_ASSETS[0]);
});
