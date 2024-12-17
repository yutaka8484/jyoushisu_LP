import { updateMetaTags } from './meta';
import { updateOGPTags } from './ogp';
import { updateCanonicalLink } from './canonical';

interface SEOConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  author?: string;
  siteName?: string;
}

const BASE_URL = 'https://example.com';
const DEFAULT_KEYWORDS = '情シス代行,IT運用代行,情報システム部門,アウトソーシング,関西,大阪,神戸,京都';
const DEFAULT_AUTHOR = '情シス代行';
const DEFAULT_SITE_NAME = '情シス代行';

export const updateSEO = ({
  title,
  description,
  path,
  keywords = DEFAULT_KEYWORDS,
  author = DEFAULT_AUTHOR,
  siteName = DEFAULT_SITE_NAME
}: SEOConfig): void => {
  // Update page title
  document.title = `${title} | ${siteName}`;

  // Update meta tags
  updateMetaTags({
    title,
    description,
    keywords,
    author
  });

  // Update OGP tags
  updateOGPTags({
    title: `${title} | ${siteName}`,
    description,
    url: `${BASE_URL}${path}`,
    siteName
  });

  // Update canonical link
  updateCanonicalLink(`${BASE_URL}${path}`);
};