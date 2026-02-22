/**
 * Determines the current page name based on pathname
 * Used for navbar active state highlighting
 */
export function getPageName(pathname: string): string {
  if (pathname.includes('/frontmatter-generator')) return 'frontmatter-generator';
  if (pathname.includes('/wordpress-quiz')) return 'wordpress-quiz';
  if (pathname.includes('/regex-tester')) return 'regex-tester';
  if (pathname.includes('/color-palette-generator')) return 'color-palette-generator';
  if (pathname.includes('/blog')) return 'blog';
  if (pathname.includes('/about')) return 'about';
  if (pathname.includes('/contact')) return 'contact';
  return 'index';
}
