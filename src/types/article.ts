// --- 1. INLINE NODES (Các thành phần nhỏ trong dòng văn bản) ---

// Node văn bản thuần
export type TextNode = {
  type: "text";
  value: string;
};

// Node định dạng văn bản (In đậm, In nghiêng)
// Lưu ý: Trong JSON mẫu, bold/italic chứa 'value' trực tiếp
export type StyleNode = {
  type: "bold" | "italic";
  value: string;
};

// Node liên kết (Link) - Có thể chứa text bên trong
export type LinkNode = {
  type: "link";
  href: string;
  children: TextNode[]; // Link thường bọc text
};

// Tổng hợp các loại Inline Node có thể xuất hiện trong 1 dòng
export type InlineNode = TextNode | StyleNode | LinkNode;

// --- 2. BLOCK NODES (Các khối cấu trúc trang) ---

// Khối đoạn văn
export type ParagraphBlock = {
  type: "paragraph";
  children: InlineNode[];
};

// Khối tiêu đề (H2, H3)
export type HeadingBlock = {
  type: "heading2" | "heading3";
  children: InlineNode[];
};

// (Mở rộng) Khối ảnh - Ví dụ để bạn thấy tính mở rộng
export type ImageBlock = {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
};

// KHỐI DANH SÁCH (MỚI)
export type ListItemBlock = {
  type: "list_item";
  children: InlineNode[]; // Nội dung của <li>
};

export type ListBlock = {
  type: "unordered_list"; // Thẻ <ul>
  children: ListItemBlock[]; // Chứa các thẻ <li>
};

export type CodeBlock = {
  type: "code";
  children: ParagraphBlock[];
};

// Tổng hợp các loại Block có thể xuất hiện trong bài viết
// Đây là Union Type quan trọng nhất để dùng trong switch case
export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | ImageBlock
  | ListBlock
  | CodeBlock;

// --- 3. ROOT OBJECT (Cấu trúc dữ liệu tổng thể của CMS) ---

export interface ArticleData {
  slug: string;
  title: string; // Dùng cho thẻ <title> và H1
  metaDescription: string; // Dùng cho thẻ meta description SEO
  author?: string; // (Tuỳ chọn) Tên tác giả
  publishedAt?: string; // (Tuỳ chọn) Ngày đăng
  content: ContentBlock[]; // Mảng các khối nội dung
}
