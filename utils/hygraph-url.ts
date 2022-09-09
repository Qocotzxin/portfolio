export function getHygraphUrl(locale?: string) {
  const protocol = process.env.VERCEL_ENV === "local" ? "http" : "https";
  return `${protocol}://${process.env.VERCEL_URL}/api/hygraph?locale=${locale}`;
}
