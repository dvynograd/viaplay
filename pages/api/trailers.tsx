import type { NextApiRequest, NextApiResponse } from "next";
import { getTrailers } from "../../utils/trailers";

interface ErrorMessage {
  error: string;
}

const Trailers = async (
  req: NextApiRequest,
  res: NextApiResponse<string[] | ErrorMessage>
) => {
  const { resource_url: resourceUrl } = req.query as { resource_url: string };

  if (!resourceUrl) {
    res.status(400).json({ error: "resource_url must be specified" });
  }

  res.status(200).json(await getTrailers(resourceUrl));
};

export default Trailers;
