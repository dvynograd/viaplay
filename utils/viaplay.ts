import { ViaplayResponse } from "./viaplay.type";

export const getImbdIdFromResourceUrl = async (
  resourceUrl: string
): Promise<string | null> => {
  try {
    const result = await fetch(resourceUrl);
    const data = (await result.json()) as ViaplayResponse;
    const blocks = data._embedded["viaplay:blocks"];
    if (blocks.length > 0) {
      return blocks[0]._embedded["viaplay:product"].content.imdb.id;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
