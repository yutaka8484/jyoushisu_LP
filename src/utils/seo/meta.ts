interface MetaTagsConfig {
  title: string;
  description: string;
  keywords: string;
  author: string;
}

export const updateMetaTags = (config: MetaTagsConfig): void => {
  const metaTags: { [key: string]: string } = {
    'description': config.description,
    'keywords': config.keywords,
    'author': config.author,
    'viewport': 'width=device-width, initial-scale=1.0',
    'robots': 'index, follow'
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
};