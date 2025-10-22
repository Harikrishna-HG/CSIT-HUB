# 🌟 Get Custom URL: csit-hub.github.io

## 🎯 Goal
Transform your URL from:
- ❌ `https://harikrishna-hg.github.io/CSIT-HUB/`
- ✅ `https://csit-hub.github.io/`

## 📋 Two Options to Achieve This

---

## ✨ Option 1: GitHub Organization (Recommended)

### Step 1: Create GitHub Organization (5 minutes)

1. **Go to GitHub**
   - Visit: https://github.com/

2. **Create New Organization**
   - Click your profile picture (top right)
   - Select **"Your organizations"**
   - Click **"New organization"**

3. **Choose Plan**
   - Select **"Create a free organization"**
   - Click **"Continue"**

4. **Setup Organization**
   - **Organization name:** `csit-hub` (exactly this!)
   - **Contact email:** Your email
   - **This organization belongs to:** My personal account
   - Click **"Next"**

5. **Skip Team Members**
   - Click **"Complete setup"**

### Step 2: Create Special Repository

1. **Create New Repository in Organization**
   - Go to: https://github.com/csit-hub
   - Click **"New"** (or **"Create a new repository"**)

2. **Repository Settings**
   - **Repository name:** `csit-hub.github.io` (MUST match organization name!)
   - **Description:** CSIT Hub - Far-Western University
   - **Visibility:** Public ✅
   - Click **"Create repository"**

### Step 3: Update Your Project

**Update `vite.config.js`:**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/', // Changed from '/CSIT-HUB/'
})
```

**Update `package.json`:**
```json
{
  "name": "csit-hub",
  "homepage": "https://csit-hub.github.io"
}
```

### Step 4: Push to New Repository

```bash
# Remove old remote
git remote remove origin

# Add new organization remote
git remote add origin https://github.com/csit-hub/csit-hub.github.io.git

# Push to new repository
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

### Step 5: Configure GitHub Pages

1. Go to: https://github.com/csit-hub/csit-hub.github.io
2. **Settings** → **Pages**
3. **Source:** Deploy from a branch
4. **Branch:** `gh-pages` → `/ (root)` → Save

### 🎉 Result:
Your website will be live at: **`https://csit-hub.github.io/`**

---

## 🔄 Option 2: User/Organization Page (Alternative)

If you don't want to create an organization, you can use your personal account:

### Step 1: Create Special Repository

1. Create new repository named: `harikrishna-hg.github.io`
2. This gives you: `https://harikrishna-hg.github.io/`

### Step 2: Update Configuration

Same as Option 1, but use:
- Repository: `harikrishna-hg.github.io`
- URL: `https://harikrishna-hg.github.io/`

---

## 📊 URL Comparison

| Method | Repository Name | Final URL | Pros |
|--------|----------------|-----------|------|
| **Current** | `CSIT-HUB` | `harikrishna-hg.github.io/CSIT-HUB` | Simple setup |
| **Organization** | `csit-hub.github.io` | `csit-hub.github.io` | Clean, professional |
| **User Page** | `harikrishna-hg.github.io` | `harikrishna-hg.github.io` | One site only |

---

## 🎯 Recommended Setup: Organization Method

### Complete Commands:

```powershell
# 1. Update vite.config.js (change base to '/')
# 2. Update package.json (add homepage)

# 3. Create organization and repository on GitHub
# (Follow steps above)

# 4. Update git remote
cd e:\Project\CSIT-HUB
git remote remove origin
git remote add origin https://github.com/csit-hub/csit-hub.github.io.git

# 5. Push everything
git add .
git commit -m "Migrate to organization repository"
git push -u origin main

# 6. Deploy
npm run deploy
```

### Update Your Code URLs:

**`src/components/SEOHead.jsx`:**
```javascript
const siteUrl = 'https://csit-hub.github.io';
```

**`public/robots.txt`:**
```
Sitemap: https://csit-hub.github.io/sitemap.xml
```

**`public/sitemap.xml`:**
```xml
<loc>https://csit-hub.github.io/</loc>
```

---

## ✅ Benefits of Organization URL

1. **Professional**: `csit-hub.github.io` vs `harikrishna-hg.github.io/CSIT-HUB`
2. **Shorter**: Easy to remember and share
3. **Brandable**: Looks like official CSIT Hub website
4. **Team Ready**: Can add multiple contributors later
5. **SEO Friendly**: Better for search engines

---

## 🚀 Quick Setup Script

After creating the organization on GitHub:

```powershell
# Navigate to project
cd e:\Project\CSIT-HUB

# Update remote
git remote remove origin
git remote add origin https://github.com/csit-hub/csit-hub.github.io.git

# Commit any changes
git add .
git commit -m "Update for organization deployment"

# Push to new repository
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

Wait 2-3 minutes, then visit: **https://csit-hub.github.io/**

---

## 🎊 Final Result

Your website will be accessible at:
```
https://csit-hub.github.io/
```

Much cleaner than:
```
https://harikrishna-hg.github.io/CSIT-HUB/
```

---

**Need help?** Let me know which option you prefer and I'll guide you through it! 🚀
