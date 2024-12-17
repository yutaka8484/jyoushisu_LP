interface OGPConfig {
  title: string;
  description: string;
  url: string;
  siteName: string;
  locale?: string;
}

export const updateOGPTags = (config: OGPConfig): void => {
  const ogTags: { [key: string]: string } = {
    'og:title': config.title,
    'og:description': config.description,
    'og:type': 'website',
    'og:url': config.url,
    'og:site_name': config.siteName,
    'og:locale': config.locale || 'ja_JP'
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
};