import { ArticleRenderer } from "./article-renderer";

export default async function Page({
  params: paramsPromise,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const params = await paramsPromise;
  return <ArticleRenderer type="default" articleId={params.articleId} />;
}
