import PomesSite from "../PomesSite";

export default async function SitePage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  return <PomesSite initialPath={`/${slug.join("/")}`} />;
}
