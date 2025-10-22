# 🚀 Google Analytics 4 Setup - Quick Start

## ✅ Step 1: Get Your Google Analytics ID (5 minutes)

### 1.1 Create Google Analytics Account
1. Go to **https://analytics.google.com/**
2. Click **"Start measuring"** (or sign in if you have an account)
3. Click **"Create Account"**
   - Account name: `CSIT Hub FWU` (or any name)
   - Click **Next**

### 1.2 Create Property
1. Property name: `CSIT Hub Website`
2. Time zone: `(GMT+05:45) Kathmandu`
3. Currency: `Nepalese Rupee (NPR)`
4. Click **Next**

### 1.3 Business Details
1. Industry: `Education`
2. Business size: `Small`
3. Click **Next**

### 1.4 Business Objectives
1. Select: `Examine user behavior`
2. Click **Create**
3. Accept Terms of Service

### 1.5 Setup Data Stream
1. Choose platform: **Web**
2. Website URL: `https://csithub-fwu.edu.np` (or your domain)
3. Stream name: `CSIT Hub Web`
4. Click **Create stream**

### 1.6 Copy Your Measurement ID
You'll see something like:
```
Measurement ID: G-ABC123XYZ
```
**📋 Copy this ID!** You'll need it in the next step.

---

## ✅ Step 2: Add ID to Your Website (2 minutes)

### 2.1 Update index.html
1. Open: `e:\Project\CSIT-HUB\index.html`
2. Find line with: `G-XXXXXXXXXX` (appears **3 times**)
3. Replace **ALL 3 instances** with your actual Measurement ID

**Example:**
```html
<!-- Before -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
gtag('config', 'G-XXXXXXXXXX');

<!-- After (using your actual ID) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
gtag('config', 'G-ABC123XYZ');
```

### 2.2 Update analytics.js
1. Open: `e:\Project\CSIT-HUB\src\utils\analytics.js`
2. Find line 12: `window.gtag('config', 'G-XXXXXXXXXX');`
3. Replace `G-XXXXXXXXXX` with your actual ID

**Example:**
```javascript
// Before
window.gtag('config', 'G-XXXXXXXXXX');

// After
window.gtag('config', 'G-ABC123XYZ');
```

### 2.3 Save all files

---

## ✅ Step 3: Test It's Working (3 minutes)

### 3.1 Restart Dev Server
```bash
# Stop current server (Ctrl+C if running)
npm run dev
```

### 3.2 Open Website
- Visit: `http://localhost:5173`
- Click **"Accept All"** on cookie banner
- Navigate to different pages (Home, BSc.CSIT, BIT, etc.)

### 3.3 Check Browser Console
1. Press **F12** → Console tab
2. You should see: `✅ Analytics initialized with Google Analytics 4`
3. As you navigate, you'll see: `📊 Page View: Home /`

### 3.4 Check Google Analytics Realtime
1. Go to **https://analytics.google.com/**
2. Click **Reports** → **Realtime**
3. You should see **1 active user** (you!) 🎉
4. See which page you're viewing in real-time

---

## 📊 Step 4: View Analytics Dashboard

### What You Can See:

#### **Realtime (Immediate)**
- Live visitors right now
- Pages they're viewing
- Where they're from

#### **Reports (After 24-48 hours)**
- **Acquisition:** How users found you (Google search, direct, etc.)
- **Engagement:** Popular pages, time on site
- **Demographics:** Age, gender, interests
- **Tech:** Devices (mobile/desktop), browsers, OS
- **Locations:** Cities, countries

#### **Custom Events (Already Tracked!)**
- Syllabus views (by program & semester)
- Syllabus downloads
- Update views
- Theme changes (dark/light)

### How to View Events:
1. Go to **Reports** → **Engagement** → **Events**
2. You'll see:
   - `page_view` - Page visits
   - `syllabus_viewed` - When users view syllabi
   - `syllabus_downloaded` - When users download
   - `update_viewed` - When users view updates
   - `theme_changed` - Theme toggle usage

---

## 🎯 Quick Reference

### Your Measurement ID Location:
- `index.html` - Lines with `G-XXXXXXXXXX` (3 places)
- `src/utils/analytics.js` - Line 12

### Analytics Dashboard:
- **URL:** https://analytics.google.com/
- **Mobile App:** Download "Google Analytics" from App Store/Play Store

### Useful Links:
- **GA4 Help:** https://support.google.com/analytics/
- **Realtime Report:** Analytics → Reports → Realtime
- **Events:** Analytics → Reports → Engagement → Events

---

## 🔧 Troubleshooting

### "I don't see any data in Realtime"
1. ✅ Did you replace ALL instances of `G-XXXXXXXXXX`?
2. ✅ Did you accept cookies on the website?
3. ✅ Check browser console for: `✅ Analytics initialized`
4. ✅ Wait 5-10 seconds, then refresh GA dashboard

### "Events not showing"
1. Wait 24 hours - some reports take time to populate
2. Check **Realtime** → **Events** for immediate data
3. Make sure you clicked "Accept" on cookie banner

### "Multiple IDs in different files"
They should all be the **same ID**!
- Check `index.html` (2 places)
- Check `src/utils/analytics.js` (1 place)

---

## ✨ After Setup

Once GA4 is working, you can:
- ✅ Track total visitors (daily, weekly, monthly)
- ✅ See which syllabus is most popular
- ✅ Know where visitors come from (Google, social media, etc.)
- ✅ Understand peak usage times
- ✅ Export reports for presentations
- ✅ Set up email alerts for milestones (e.g., 1000 visitors!)

---

## 📱 Mobile App

Download **Google Analytics** app to check stats on the go:
- 📱 iOS: https://apps.apple.com/app/google-analytics/id881599038
- 🤖 Android: https://play.google.com/store/apps/details?id=com.google.android.apps.giant

---

**Need help?** Check the console logs or visit https://support.google.com/analytics/

**Happy tracking! 📊✨**
