import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  if (req.method !== "GET") {
    res.status(405).end();
    return;
  }
  const response = await fetch(
    "https://gist.githubusercontent.com/janithl/6bfbd787a0361c170ac760e8fb5ba0fd/raw/a0ffacb7c0fc21a0266371f632cf4107f80362f4/itemlist.json"
  );
  const json: Data[] = await response.json();
  res.status(200).json(json);
}
