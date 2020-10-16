export default function escapeHtmlContent(htmlContent?: string) {
  if (!htmlContent) return null;

  const escapeHtmlRegex = /(>|<)/g;

  const matcher = (_, p1) => {
    if (p1 === '<') return '&lt;';
    if (p1 === '>') return '&gt;';

    return p1;
  };

  return htmlContent.replace(escapeHtmlRegex, matcher);
}
