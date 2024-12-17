interface SEOProps {
  title: string;
  description: string;
  path: string;
}

export const updateSEO = ({ title, description, path }: SEOProps): void => {
  // ページタイトルの更新
  document.title = `${title} | 情シス代行`;
  
  // メタ情報の更新
  const metaTags: { [key: string]: string } = {
    'description': description,
    'keywords': '情シス代行,IT運用代行,情報システム部門,アウトソーシング,関西,大阪,神戸,京都',
    'robots': 'index, follow',
    'author': '情シス代行',
    'viewport': 'width=device-width, initial-scale=1.0'
  };

  Object.entries(metaTags).forEach(([name, content]) => {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  });

  // OGPの更新
  const ogTags: { [key: string]: string } = {
    'og:title': `${title} | 情シス代行`,
    'og:description': description,
    'og:type': 'website',
    'og:url': `https://example.com${path}`,
    'og:site_name': '情シス代行',
    'og:locale': 'ja_JP'
  };

  Object.entries(ogTags).forEach(([property, content]) => {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  });

  // canonical linkの更新
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', `https://example.com${path}`);
};