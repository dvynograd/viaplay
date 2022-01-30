import { getImbdIdFromResourceUrl } from "../utils/viaplay";
import { arrival } from "./viaplay.mocked";

beforeAll(() => {
  global.fetch = (): Promise<any> =>
    Promise.resolve({
      json: () => Promise.resolve(arrival),
    });
});

test("check getImbdIdFromResourceUrl", () => {
  return getImbdIdFromResourceUrl(
    "https://content.viaplay.se/pc-se/film/arrival-2016"
  ).then((data) => expect(data).toBe("tt2543164"));
});
