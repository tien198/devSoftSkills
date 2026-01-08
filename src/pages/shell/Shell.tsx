import type { ArticleData } from "../../types/article";
import ArticleRenderer from "../../components/ArticleRender";
import { useLoaderData } from "react-router";

export default function Shell() {
  const articleData = useLoaderData<ArticleData>();

  if (!articleData) {
    return <div>Loading ...</div>;
  }
  return <ArticleRenderer article={articleData} />;
}
