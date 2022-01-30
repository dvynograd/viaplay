const API_KEY = "c6c17c46217c1b5f66a6c05d4251df77";

export interface VideosResult {
  id: number;
  results: Result[];
}

export interface Result {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

export const getTrailersFromImdbId = async (id: string): Promise<string[]> => {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
    );
    const data = (await result.json()) as VideosResult;

    if (data.results.length > 0) {
      return data.results.map((result) => {
        return `https://www.youtube.com/v/watch?v=${result.key}`;
      });
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
