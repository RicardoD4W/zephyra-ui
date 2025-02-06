export const WcWrapper = ({ html, tw }: { html: string; tw?: string }) => {
  return (
    <div
      style={{ backgroundColor: 'var(--bg-content-box-color)' }}
      className={`p-4 rounded-lg ${tw}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
