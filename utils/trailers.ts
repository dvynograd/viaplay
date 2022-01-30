import { getTrailersFromImdbId } from "./moviedb";
import { getImbdIdFromResourceUrl } from "./viaplay";

export const getTrailers = async (resourceUrl: string): Promise<string[]> => {
  const imbdId = await getImbdIdFromResourceUrl(resourceUrl);

  if (imbdId === null) {
    return [];
  }

  return getTrailersFromImdbId(imbdId);
};
