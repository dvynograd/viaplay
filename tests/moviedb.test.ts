import { getTrailersFromImdbId } from "../utils/moviedb";
import { trailers } from "./moviedb.mock";

beforeAll(() => {
  global.fetch = (): Promise<any> =>
    Promise.resolve({
      json: () => Promise.resolve(trailers),
    });
});

test("check getImbdIdFromResourceUrl", () => {
  return getTrailersFromImdbId("tt2543164").then((data) =>
    expect(data).toStrictEqual([
      "https://www.youtube.com/v/watch?v=PkYh9e-fvbA",
      "https://www.youtube.com/v/watch?v=xzXYr2gbekU",
      "https://www.youtube.com/v/watch?v=zl7eQbGASF0",
      "https://www.youtube.com/v/watch?v=-SPYdW-qRhg",
      "https://www.youtube.com/v/watch?v=Ffzv6pC5P3I",
      "https://www.youtube.com/v/watch?v=7W1m5ER3I1Y",
      "https://www.youtube.com/v/watch?v=tFMo3UJ4B4g",
      "https://www.youtube.com/v/watch?v=ipUAcZiwvEU",
      "https://www.youtube.com/v/watch?v=gwqSi_ToNPs",
    ])
  );
});
