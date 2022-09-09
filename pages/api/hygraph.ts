import { ApiResponse } from "@models/api";
import { HygraphData } from "@models/hygraph";
import { gql } from "graphql-request";
import type { NextApiRequest, NextApiResponse } from "next";
import hygraphClient from "@services/hygraphClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<HygraphData>>
) {
  if (req.method !== "GET") {
    return res.status(405).json({
      ok: false,
      data: null,
      message: "Could not retrieve Hygraph data.",
      description: "Method not allowed",
    });
  }

  const locale = String(req.query.locale) || "en";

  try {
    const data = await hygraphClient.request<HygraphData>(gql`{
      ariaLabels(locales: ${locale}) {
        component
        content
        metadata
      }
      navLinks(locales: ${locale}) {
        text
        url
        order
      }
      skipLinks(locales: ${locale}) {
        text
      }
    }
    `);

    return res.status(200).json({
      ok: true,
      data,
      message: "Successfully retrieved Hygraph data.",
    });
  } catch (error: unknown) {
    return res.status(500).json({
      ok: false,
      data: null,
      message: "Could not retrieve Hygraph data.",
      description: (error as Error).message,
    });
  }
}
