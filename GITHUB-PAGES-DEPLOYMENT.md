# 🚀 Deploy to GitHub Pages - Complete Guide

## 📋 Prerequisites
- ✅ Git installed on your computer
- ✅ GitHub account (free)
- ✅ Your project is ready (all files saved)

---

## 🎯 Step 1: Install gh-pages Package (1 minute)

Open PowerShell in your project folder and run:

```bash
cd e:\Project\CSIT-HUB
npm install -D gh-pages
```

This will take about 10-20 seconds.

---

## 🎯 Step 2: Initialize Git Repository (2 minutes)

### 2.1 Initialize Git
```bash
git init
```

### 2.2 Add all files
```bash
git add .
```

### 2.3 Create first commit
```bash
git commit -m "Initial commit - CSIT Hub website"
```

---

## 🎯 Step 3: Create GitHub Repository (3 minutes)

### 3.1 Go to GitHub
1. Visit **https://github.com/**
2. Click the **"+"** icon (top right) → **"New repository"**

### 3.2 Fill Repository Details
- **Repository name:** `CSIT-HUB` (exactly this name!)
- **Description:** `CSIT Hub - Far-Western University Syllabus Website`
- **Visibility:** Public ✅
- **DO NOT** check "Add README" or any other files
- Click **"Create repository"**

### 3.3 Copy the repository URL
You'll see something like:
```
https://github.com/Harikrishna-HG/CSIT-HUB.git
```
**📋 Copy this URL!**

---

## 🎯 Step 4: Connect Local Project to GitHub (1 minute)

### 4.1 Add remote repository
```bash
git remote add origin https://github.com/Harikrishna-HG/CSIT-HUB.git
```

### 4.2 Rename branch to main (if needed)
```bash
git branch -M main
```

### 4.3 Push to GitHub
```bash
git push -u origin main
```

**Note:** You may need to sign in to GitHub. Follow the prompts.

---

## 🎯 Step 5: Deploy to GitHub Pages (1 minute)

### 5.1 Run the deploy command
```bash
npm run deploy
```

This will:
1. ✅ Build your project (`npm run build`)
2. ✅ Create a `gh-pages` branch
3. ✅ Upload the built files to GitHub
4. ✅ Takes about 20-30 seconds

You'll see output like:
```
> csit-hub@0.0.0 predeploy
> npm run build

> csit-hub@0.0.0 build
> vite build

✓ built in 3.45s
Published
```

---

## 🎯 Step 6: Enable GitHub Pages (2 minutes)

### 6.1 Go to your repository settings
1. Go to **https://github.com/Harikrishna-HG/CSIT-HUB**
2. Click **"Settings"** tab (top right)
3. Scroll down and click **"Pages"** (left sidebar)

### 6.2 Configure Pages
1. Under **"Source"**: Select **"Deploy from a branch"**
2. Under **"Branch"**: 
   - Select **`gh-pages`**
   - Select **`/ (root)`**
   - Click **"Save"**

### 6.3 Wait for deployment
- GitHub will show: "Your site is live at https://harikrishna-hg.github.io/CSIT-HUB/"
- Wait 1-2 minutes for the first deployment

---

## 🎉 Step 7: Visit Your Live Website!

Your website is now live at:
```
https://harikrishna-hg.github.io/CSIT-HUB/
```

**🎊 Congratulations! Your website is online!** 🎊

---

## 🔄 How to Update Your Website (Future Changes)

Whenever you make changes to your website:

### Method 1: Quick Update
```bash
# 1. Save all your changes
# 2. Add changes to git
git add .

# 3. Commit with a message
git commit -m "Updated syllabus data"

# 4. Push to GitHub
git push

# 5. Deploy to GitHub Pages
npm run deploy
```

### Method 2: One-Line Update (after first setup)
```bash
git add . && git commit -m "Update" && git push && npm run deploy
```

**⏱️ Time to update:** ~30 seconds

---

## 📊 Update Google Analytics Domain

Since your site is now live, update the Analytics configuration:

### Update in Google Analytics Dashboard:
1. Go to https://analytics.google.com/
2. Admin → Data Streams → Your stream
3. Add the URL: `https://harikrishna-hg.github.io`

### Update site URLs in your code:

**File: `src/components/SEOHead.jsx`** (Line 11)
```javascript
// Change from:
const siteUrl = 'https://csithub-fwu.edu.np';

// To:
const siteUrl = 'https://harikrishna-hg.github.io/CSIT-HUB';
```

**File: `public/robots.txt`**
```
Sitemap: https://harikrishna-hg.github.io/CSIT-HUB/sitemap.xml
```

**File: `public/sitemap.xml`** (Replace all instances)
```xml
https://harikrishna-hg.github.io/CSIT-HUB/
```

Then redeploy:
```bash
git add . && git commit -m "Update URLs for GitHub Pages" && git push && npm run deploy
```

---

## 🎯 Custom Domain (Optional)

Want to use a custom domain like `csithub.com.np`?

### Step 1: Buy a domain
- Namecheap, GoDaddy, or local registrars in Nepal

### Step 2: Configure DNS
Add these DNS records:
```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153

Type: CNAME
Host: www
Value: harikrishna-hg.github.io
```

### Step 3: Add domain to GitHub
1. Settings → Pages → Custom domain
2. Enter: `csithub.com.np`
3. Click Save
4. Wait 24 hours for DNS propagation

---

## 🔧 Troubleshooting

### "404 - Page not found" after deployment
1. ✅ Check `vite.config.js` has `base: '/CSIT-HUB/'`
2. ✅ Check GitHub Pages is set to `gh-pages` branch
3. ✅ Wait 2-3 minutes and refresh
4. ✅ Clear browser cache (Ctrl + Shift + R)

### "CSS not loading" or "Blank page"
1. ✅ Verify `base: '/CSIT-HUB/'` in `vite.config.js`
2. ✅ Redeploy: `npm run deploy`
3. ✅ Check browser console for errors (F12)

### "Permission denied" when pushing
```bash
# Use HTTPS with personal access token
# Or set up SSH keys
```

### "gh-pages not found"
```bash
# Make sure gh-pages is installed
npm install -D gh-pages

# Then deploy again
npm run deploy
```

---

## 📱 Share Your Website

Your website is now live! Share it:

### Direct Link:
```
https://harikrishna-hg.github.io/CSIT-HUB/
```

### QR Code:
Generate a QR code at: https://www.qr-code-generator.com/
- People can scan to visit instantly!

### Social Media:
- Post on Facebook, Twitter, LinkedIn
- Share in WhatsApp groups
- Email to students and faculty

---

## 📊 Monitor Your Website

### Check Live Status:
- Visit: https://harikrishna-hg.github.io/CSIT-HUB/
- Check Google Analytics Realtime

### View Deployment History:
- GitHub → Actions tab
- See all deployments and their status

### Check Website Speed:
- PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/

---

## 🎓 Summary - Your Website URLs

| Purpose | URL |
|---------|-----|
| **Live Website** | https://harikrishna-hg.github.io/CSIT-HUB/ |
| **GitHub Repo** | https://github.com/Harikrishna-HG/CSIT-HUB |
| **Analytics** | https://analytics.google.com/ |
| **Local Dev** | http://localhost:5173 |

---

## 🚀 Quick Command Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Update website (after making changes)
git add . && git commit -m "Update" && git push && npm run deploy
```

---

## ✅ Checklist

After deployment, verify:
- [ ] Website loads at GitHub Pages URL
- [ ] All pages work (Home, BSc.CSIT, BIT, MSc.CSIT, Updates)
- [ ] Navigation works
- [ ] Dark/Light theme toggle works
- [ ] Cookie banner appears
- [ ] Syllabus download links work
- [ ] Google Analytics tracking (check Realtime)
- [ ] Mobile responsive (test on phone)
- [ ] Shared link works for others

---

## 🎉 Congratulations!

Your CSIT Hub website is now:
- ✅ **Live on the internet**
- ✅ **Accessible to anyone worldwide**
- ✅ **Free hosting on GitHub Pages**
- ✅ **Tracking visitors with Google Analytics**
- ✅ **Professional and modern design**

**Share it with your classmates and faculty!** 🎊

---

**Need help?** 
- GitHub Pages Docs: https://pages.github.com/
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html
- Contact: Open an issue on GitHub
