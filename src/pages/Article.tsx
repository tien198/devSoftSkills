import { use, useEffect, useState } from "react";
import type { ArticleData } from "../types/article";
import { ArticleContext } from "../store/context";
import ArticleRenderer from "../components/ArticleRender";

async function getArticle(id: string) {
  const res = await fetch("http://localhost:5173/" + id);
  return await res.json();
}

export default function App() {
  const [articleData, setAricleData] = useState<ArticleData | null>(null);
  const articleContext = use(ArticleContext!);
  // const [id, setId] = useState(location.pathname.split("/")[2] ?? "1.readme.json");
  const { articleId } = articleContext!;

  useEffect(() => {
    const id = articleId ?? location.pathname.split("/")[2] ?? "1.readme.json";
    getArticle(id).then((article) => setAricleData(article));
  }, [articleId]);

  if (!articleData) {
    return <div>Loading ...</div>;
  }
  return <ArticleRenderer article={articleData} />;
}
