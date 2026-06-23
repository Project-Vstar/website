export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/member-area/',
          '/businesspartner-area/',
          '/press/',
          '/cookies/',
        ],
      },
    ],
    sitemap: 'https://vstarproject.eu/sitemap.xml',
  };
}
