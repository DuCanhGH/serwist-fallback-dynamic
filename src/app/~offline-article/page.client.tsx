"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArticleRenderer } from "../article/[articleId]/article-renderer";

export default function PageClient() {
  // See https://nextjs.org/docs/app/api-reference/functions/use-pathname#avoid-hydration-mismatch-with-rewrites
  const pathname = usePathname();
  const [clientPathname, setClientPathname] = useState("");
  useEffect(() => {
    setClientPathname(pathname);
  }, [pathname]);
  const matches = clientPathname.match(/\/article\/(.*)/i);
  const articleId = matches && !matches[1].includes("/") ? matches[1] : null;
  return (
    <ArticleRenderer
      type="fallback"
      articleId={articleId ?? "invalid or no article"}
    />
  );
}
