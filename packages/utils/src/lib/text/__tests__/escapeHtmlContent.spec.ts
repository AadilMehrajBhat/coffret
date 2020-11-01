import escapeHtmlContent from '../escapeHtmlContent';

describe('escapeHtmlContent', () => {
  test('no argument returns null', () => {
    expect(escapeHtmlContent()).toBeNull();
  });

  test('escape html anchor brackets', () => {
    expect(escapeHtmlContent('This is a <b>text</b>.')).toBe(
      'This is a &lt;b&gt;text&lt;/b&gt;.'
    );
  });

  test('return already escaped anchor brackets as it is', () => {
    expect(escapeHtmlContent('This is a &lt;b&gt;text&lt;/b&gt;.')).toBe(
      'This is a &lt;b&gt;text&lt;/b&gt;.'
    );
  });
});
