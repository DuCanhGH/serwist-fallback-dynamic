export interface ArticleRendererProps {
  type: "fallback" | "default";
  articleId: string;
  // Pass whatever to this component, e.g. RSCs.
}

export function ArticleRenderer({ type, articleId }: ArticleRendererProps) {
  return (
    <>
      Article ID is: {articleId}. Renderer type is {type}.
    </>
  );
}
