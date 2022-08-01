import {
  DocumentRenderer,
  DocumentRendererProps
} from "@keystone-6/document-renderer";

export default function Post({ data }) {
  const { content } = data;

  return (
    <>
      <DocumentRenderer document={content.document} />
    </>
  );
}
