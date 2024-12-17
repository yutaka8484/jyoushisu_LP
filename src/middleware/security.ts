import { sanitizeHtml } from 'sanitize-html';

// CSRFトークン生成
export const generateCSRFToken = (): string => {
  const token = crypto.getRandomValues(new Uint8Array(32))
    .reduce((acc, val) => acc + val.toString(16).padStart(2, '0'), '');
  sessionStorage.setItem('csrfToken', token);
  return token;
};

// XSS対策のためのテキストサニタイズ
export const sanitizeInput = (input: string): string => {
  return sanitizeHtml(input, {
    allowedTags: [],
    allowedAttributes: {},
    disallowedTagsMode: 'recursiveEscape'
  });
};

// Content Security Policy設定
export const CSP_HEADER = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.emailjs.com https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: https: blob:",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://api.emailjs.com https://www.google-analytics.com",
  "frame-ancestors 'none'",
  "form-action 'self'"
].join('; ');

// セキュリティヘッダー設定
export const SECURITY_HEADERS = {
  'Content-Security-Policy': CSP_HEADER,
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
};