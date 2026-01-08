// Import các kiểu dữ liệu vừa định nghĩa
import type { ArticleData, ContentBlock, InlineNode } from "../types/article";

// 1. Component render Inline Node
const RenderInline = ({ node }: { node: InlineNode }) => {
  switch (node.type) {
    case "text":
      return <>{node.value}</>;

    case "bold":
      return <strong>{node.value}</strong>;

    case "italic":
      return <em>{node.value}</em>;

    case "image":
      return (
        <figure className="my-6">
          <img
            src={node.src}
            alt={node.alt}
            className="max-w-full h-auto rounded"
          />
          {node.caption && (
            <figcaption className="text-sm text-center text-gray-500 mt-2">
              {node.caption}
            </figcaption>
          )}
        </figure>
      );

    case "link":
      return (
        <a
          href={node.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {node.children.map((child, idx) => (
            <RenderInline key={idx} node={child} />
          ))}
        </a>
      );

    default:
      return null;
  }
};

const renderContent = (children: InlineNode[]) =>
  children.map((node, i) => <RenderInline key={i} node={node} />);

// 2. Component render Block Node
const RenderBlock = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case "heading2":
      return (
        <h2 className="text-2xl font-bold mt-6 mb-4 ml-4 text-amber-100">
          {block.children.map((node, i) => (
            <RenderInline key={i} node={node} />
          ))}
        </h2>
      );

    case "heading3":
      return (
        <h3 className="text-xl font-semibold mt-4 mb-2 ml-8 text-amber-100">
          {block.children.map((node, i) => (
            <RenderInline key={i} node={node} />
          ))}
        </h3>
      );

    case "paragraph":
      return (
        <p className="mb-4 leading-relaxed">
          {block.children.map((node, i) => (
            <RenderInline key={i} node={node} />
          ))}
        </p>
      );

    case "image":
      return (
        <figure className="my-6">
          <img
            src={block.src}
            alt={block.alt}
            className="max-w-full h-auto rounded"
          />
          {block.caption && (
            <figcaption className="text-sm text-center text-gray-500 mt-2">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "unordered_list":
      return (
        <ul className="list-disc list-inside ml-4 my-3">
          {" "}
          {/* Dùng className cho styling */}
          {block.children.map((listItem, index) => (
            // Mỗi list_item sẽ được render thành một thẻ <li>
            <li key={index} className="mb-1">
              {renderContent(listItem.children)}
            </li>
          ))}
        </ul>
      );

    case "code":
      return (
        <div className="mb-4 px-5 pt-2 bg-gray-900">
          {block.children.map((i) => (
            <RenderBlock block={i} />
          ))}
        </div>
      );

    // Xử lý trường hợp không khớp (fallback)
    default:
      return null;
  }
};

// 3. Component chính
interface ArticleRendererProps {
  article: ArticleData;
}

export default function ArticleRenderer({ article }: ArticleRendererProps) {
  return (
    <article className="block max-w-5xl m-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-6 text-amber-500">
        {article.title}
      </h1>

      {article.content.map((block, index) => (
        <RenderBlock key={index} block={block} />
      ))}
    </article>
  );
}
