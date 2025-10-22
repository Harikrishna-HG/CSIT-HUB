# Deployment Guide - CSIT Hub

This guide will help you deploy the CSIT Hub application to various platforms.

## 📋 Pre-deployment Checklist

Before deploying, make sure to:

1. **Update Site URL** in `src/components/SEOHead.jsx`:
   ```javascript
   const siteUrl = 'https://your-actual-domain.com';
   ```

2. **Update Sitemap and Robots.txt**:
   - Edit `public/sitemap.xml` - replace all instances of `https://csithub-fwu.edu.np/` with your actual domain
   - Edit `public/robots.txt` - update the Sitemap URL

3. **Add Analytics (Optional)**:
   - Get a Google Analytics 4 measurement ID
   - Update `src/utils/analytics.js` with your GA4 ID:
   ```javascript
   window.gtag('config', 'G-YOUR-MEASUREMENT-ID');
   ```
   - Add GA4 script to `index.html`:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-YOUR-ID');
   </script>
   ```

4. **Test Build Locally**:
   ```bash
   npm run build
   npm run preview
   ```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel offers the easiest deployment for Vite projects:

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Vite and configure build settings
   - Click "Deploy"

3. **Deploy via CLI**:
   ```bash
   vercel
   ```

**Build Settings (auto-detected)**:
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install --legacy-peer-deps`

### Option 2: Netlify

1. **Deploy via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

2. **Deploy via GitHub**:
   - Push code to GitHub
   - Go to [netlify.com](https://www.netlify.com)
   - Click "New site from Git"
   - Connect to GitHub and select your repository
   
**Build Settings**:
- Build command: `npm run build`
- Publish directory: `dist`
- Install command: `npm install --legacy-peer-deps`

3. **Create `netlify.toml`** (optional for custom config):
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install -D gh-pages
   ```

2. **Update `vite.config.js`**:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/CSIT-HUB/', // Replace with your repo name
   })
   ```

3. **Add deploy script** to `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Folder: / (root)

### Option 4: Traditional Web Hosting (cPanel, etc.)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your hosting:
   - Via FTP/SFTP client (FileZilla, WinSCP, etc.)
   - Upload all contents of the `dist` folder to `public_html` or your web root

3. **Configure .htaccess** (for Apache):
   Create `.htaccess` in the web root:
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

### Option 5: Docker Deployment

1. **Create `Dockerfile`**:
   ```dockerfile
   FROM node:18-alpine as build
   WORKDIR /app
   COPY package*.json ./
   RUN npm install --legacy-peer-deps
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=build /app/dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/conf.d/default.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Create `nginx.conf`**:
   ```nginx
   server {
     listen 80;
     server_name localhost;
     root /usr/share/nginx/html;
     index index.html;

     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

3. **Build and run**:
   ```bash
   docker build -t csit-hub .
   docker run -p 80:80 csit-hub
   ```

## 🔧 Environment Variables

If you need environment variables:

1. **Create `.env` file**:
   ```env
   VITE_API_URL=https://api.example.com
   VITE_GA_ID=G-XXXXXXXXXX
   ```

2. **Access in code**:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. **Platform-specific**:
   - **Vercel**: Add in Project Settings > Environment Variables
   - **Netlify**: Add in Site Settings > Environment Variables

## 🎯 Custom Domain Setup

### Vercel:
1. Go to Project Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Netlify:
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Configure DNS records

## 📊 Post-Deployment

After deployment:

1. **Test all pages** and links
2. **Verify SEO meta tags** using:
   - [Google Search Console](https://search.google.com/search-console)
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

3. **Submit sitemap** to search engines:
   - Google: https://search.google.com/search-console
   - Bing: https://www.bing.com/webmasters

4. **Enable HTTPS** (usually automatic on Vercel/Netlify)

5. **Set up monitoring**:
   - Google Analytics
   - Uptime monitoring (e.g., UptimeRobot)

## 🔄 Continuous Deployment

For automatic deployments on every push:

1. **Vercel/Netlify**: Automatic when connected to GitHub
2. **GitHub Actions**: Create `.github/workflows/deploy.yml`

## 🆘 Troubleshooting

**Build fails on platform:**
- Make sure to use `--legacy-peer-deps` flag
- Check Node version (should be 18+)

**404 errors on page refresh:**
- Ensure proper routing configuration (SPA fallback)
- Check `.htaccess` or server configuration

**CSS not loading:**
- Check base path in `vite.config.js`
- Verify build output in `dist` folder

## 📞 Support

For deployment issues, check:
- Vite documentation: https://vitejs.dev/guide/static-deploy
- Platform-specific docs (Vercel, Netlify, etc.)

---

**Happy Deploying! 🚀**
