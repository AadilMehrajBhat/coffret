/**
 * Convert the HTML content to plain text
 *
 * @export
 * @param {string} [htmlContent] - actual html content to be escaped
 * @returns the escaped html content
 */
export default function escapeHtmlContent(htmlContent?: string) {
  if (!htmlContent) return null;

  const escapeHtmlRegex = /(>|<)/g;

  const matcher = (_: string, p1: string) => {
    if (p1 === '<') return '&lt;';
    if (p1 === '>') return '&gt;';

    return p1;
  };

  return htmlContent.replace(escapeHtmlRegex, matcher);
}
