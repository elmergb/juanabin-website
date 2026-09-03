# JuanaBin PH — Deployment Guide

## Quick Start (Local)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# http://localhost:5173
```

## Production Build

```bash
# Build optimized version
npm run build

# Test production build locally
npm run preview
```

## Platform-Specific Deployment

### ✅ Vercel (Best for React)

**Easiest approach — automatic CI/CD**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Or connect GitHub:**
1. Push to GitHub
2. Visit vercel.com
3. Connect repository
4. Auto-deploys on push

### ✅ Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

**Or drag-and-drop:**
1. Run `npm run build`
2. Drag `dist/` folder to Netlify

### ✅ GitHub Pages

```bash
# Update vite.config.js
export default {
  base: '/juanabin-ph/',  // Match your repo name
}

# Build
npm run build

# Deploy using gh-pages
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"deploy": "npm run build && gh-pages -d dist"
```

Then: `npm run deploy`

### ✅ Self-Hosted (Traditional Server)

```bash
# Build
npm run build

# Copy dist/ to server
scp -r dist/* user@yourserver.com:/var/www/juanabin-ph/

# Ensure .htaccess for routing (Apache)
```

**.htaccess** for Apache:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**nginx.conf** for Nginx:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### ✅ Docker

**Dockerfile:**
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runtime stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf:**
```nginx
server {
  listen 80;
  location / {
    root /usr/share/nginx/html;
    try_files $uri $uri/ /index.html;
  }
}
```

**Build & run:**
```bash
docker build -t juanabin-ph .
docker run -p 80:80 juanabin-ph
```

## Environment Variables

Create `.env.local` for local settings (never commit):
```
VITE_API_URL=https://api.juanabin.ph
VITE_SITE_URL=https://juanabin.ph
```

Use in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Pre-Deployment Checklist

- [ ] Run `npm run build` — no errors
- [ ] Run `npm run preview` — works locally
- [ ] Test all pages load
- [ ] Test cart functionality
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Check console for errors
- [ ] Verify images load (external CDN)
- [ ] Test search & filters
- [ ] Test navigation links
- [ ] Check accessibility (keyboard navigation)
- [ ] Verify footer links work
- [ ] Test blog article links

## Performance Optimization

### Before Deploying

1. **Image Optimization**
   ```bash
   # Images already use external URLs
   # For local images, use imagemin
   npm install imagemin imagemin-mozjpeg imagemin-pngquant --save-dev
   ```

2. **Bundle Analysis**
   ```bash
   # Install analyzer
   npm install --save-dev rollup-plugin-visualizer
   
   # Add to vite.config.js
   import { visualizer } from 'rollup-plugin-visualizer';
   plugins: [visualizer()],
   
   # Check dist/stats.html after build
   ```

3. **Lighthouse Audit**
   - Open DevTools → Lighthouse
   - Run performance audit
   - Target scores: 90+

### Monitoring

**Vercel Analytics:**
- Automatic web vitals tracking
- Real user monitoring
- Error tracking

**Netlify Analytics:**
- Built-in site analytics
- Function monitoring
- Bandwidth usage

## Custom Domain Setup

### Vercel
1. `vercel domains add juanabin.ph`
2. Update nameservers at domain registrar
3. Done (auto-HTTPS)

### Netlify
1. Domain settings → Custom domain
2. Add domain name
3. Update nameservers
4. Auto HTTPS via Let's Encrypt

### Traditional Server
1. Point DNS A record to server IP
2. Install SSL certificate (Let's Encrypt)
3. Configure web server

## Continuous Integration / Deployment

### GitHub Actions Example

**.github/workflows/deploy.yml:**
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Troubleshooting

**Routes not working:**
- Ensure `<BrowserRouter>` wraps app
- Check `.htaccess` / nginx config
- Verify `react-router-dom` installed

**Images not loading:**
- Check image URLs (external CDN)
- Verify CORS headers if applicable
- Use network tab to debug

**Styles not applying:**
- Check Tailwind CSS built correctly
- Verify `index.css` imported
- Check for conflicting styles

**Cart not persisting:**
- Check localStorage enabled
- Check for private browsing mode
- Verify CartContext provider wraps app

## Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| Lighthouse Score | 90+ | Chrome DevTools |
| First Contentful Paint (FCP) | < 1.5s | Vercel/Netlify Analytics |
| Largest Contentful Paint (LCP) | < 2.5s | Vercel/Netlify Analytics |
| Cumulative Layout Shift (CLS) | < 0.1 | Vercel/Netlify Analytics |
| Time to Interactive (TTI) | < 3.5s | Lighthouse |

## Rollback Strategy

If deployment fails:

**Vercel:**
- Automatic previews for each PR
- One-click rollback to previous deployment

**Netlify:**
- Version history preserved
- Deploy logs available
- One-click rollback

**Traditional:**
- Keep backup of previous `dist/`
- Symlink to previous version
- Manual rollback

## Support & Maintenance

- Monitor error logs
- Track user issues
- Update dependencies monthly
- Test new browsers/devices
- Collect performance metrics

---

**Recommended: Deploy to Vercel for automatic CI/CD and zero-config HTTPS**
