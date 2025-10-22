# 📊 Analytics & Visitor Tracking Guide

## 🔍 How to Check Cookie Data (Current Implementation)

### Method 1: Browser DevTools
1. Open your website: http://localhost:5173
2. Press **F12** (or Right-click → Inspect)
3. Go to **Application** tab (Chrome) or **Storage** tab (Firefox)
4. Click **Cookies** → `http://localhost:5173`
5. You'll see:
   - `csit_hub_cookie_consent` → accepted/declined
   - `csit_hub_theme` → dark/light
   - `csit_hub_last_page` → last URL visited

### Method 2: Console
1. Press **F12** → Console tab
2. Type: `document.cookie`
3. See all cookies as a string

### Method 3: Check in Code
Open browser console and run:
```javascript
// Check consent status
Cookies.get('csit_hub_cookie_consent')  // Returns: 'accepted' or 'declined'

// Check theme
Cookies.get('csit_hub_theme')  // Returns: 'dark' or 'light'

// Check last page
Cookies.get('csit_hub_last_page')  // Returns: '/bsc-csit' etc.
```

---

## 📈 To Track Visitor Count & Analytics

**⚠️ Important:** Cookies are stored locally on each user's browser. To see visitor statistics, you need a real analytics service.

---

## 🚀 Option 1: Google Analytics 4 (GA4) - Recommended

### Step 1: Create Google Analytics Account
1. Go to https://analytics.google.com/
2. Click **Start measuring**
3. Create Account → Enter "CSIT Hub FWU"
4. Create Property → Enter "CSIT Hub Website"
5. Select Industry & Time Zone
6. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)

### Step 2: Add GA4 to Your Website

Add this code to `index.html` **before the closing `</head>` tag**:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Replace `G-XXXXXXXXXX` with your actual Measurement ID!**

### Step 3: Update analytics.js

Edit `src/utils/analytics.js` and replace `G-XXXXXXXXXX` with your ID:

```javascript
export const initAnalytics = (enabled = false) => {
  analyticsEnabled = enabled;
  
  if (analyticsEnabled && typeof window !== 'undefined') {
    window.gtag('config', 'G-YOUR-ACTUAL-ID');  // 👈 Add your ID here
    console.log('Analytics initialized with GA4');
  }
};
```

### Step 4: View Analytics Dashboard

1. Go to https://analytics.google.com/
2. Select your property
3. **Realtime** → See live visitors
4. **Reports** → See:
   - Total visitors
   - Page views
   - Popular pages
   - User locations
   - Device types
   - Traffic sources

### What You'll See:
- ✅ **Total visitors** (daily, weekly, monthly)
- ✅ **Active users** right now
- ✅ **Page views** per page
- ✅ **Popular content** (which syllabus is viewed most)
- ✅ **User demographics** (location, device)
- ✅ **Custom events** (syllabus downloads, theme changes)

---

## 🔒 Option 2: Plausible Analytics (Privacy-Friendly)

**Pros:** No cookies needed, GDPR compliant, simple

### Setup:
1. Go to https://plausible.io/ (Paid: $9/month, 30-day free trial)
2. Add your website
3. Copy the script tag
4. Add to `index.html`:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

### Features:
- ✅ Lightweight (< 1KB script)
- ✅ No cookies or personal data
- ✅ GDPR/CCPA compliant
- ✅ Simple, clean dashboard
- ❌ Paid service (but privacy-focused)

---

## 📊 Option 3: Simple Visitor Counter (Free, Self-hosted)

For a basic visitor count without external services:

### Using a Simple Counter API:

1. **Use CountAPI** (Free):
   ```javascript
   // Add to your main page
   fetch('https://api.countapi.xyz/hit/csithub-fwu/visits')
     .then(res => res.json())
     .then(data => console.log('Total visits:', data.value));
   ```

2. **Display on Footer:**
   ```jsx
   const [visitCount, setVisitCount] = useState(0);
   
   useEffect(() => {
     fetch('https://api.countapi.xyz/hit/csithub-fwu/visits')
       .then(res => res.json())
       .then(data => setVisitCount(data.value));
   }, []);
   
   return <div>Visitors: {visitCount}</div>;
   ```

**⚠️ Limitation:** Only counts total hits, no detailed analytics.

---

## 🎯 Recommended Solution for CSIT Hub:

### **Use Google Analytics 4** because:
1. ✅ **Completely FREE** forever
2. ✅ Detailed analytics dashboard
3. ✅ Real-time visitor tracking
4. ✅ Mobile app available
5. ✅ Industry standard
6. ✅ Easy to set up (5 minutes)

---

## 📱 How to View Your Analytics:

### Desktop:
- Visit https://analytics.google.com/
- Sign in with your Google account
- Select CSIT Hub property

### Mobile:
- Download **Google Analytics** app (iOS/Android)
- Check stats on the go

### What You Can Track:

**Automatic Tracking:**
- Total visitors (unique & returning)
- Page views per page
- Session duration
- Bounce rate
- Geographic location
- Device types (mobile/desktop/tablet)
- Browser & OS
- Traffic sources (Google, direct, referral)

**Custom Events (Already Implemented):**
- Syllabus viewed (per program/semester)
- Syllabus downloaded
- Updates viewed
- Theme changed (dark/light)

---

## 🔧 Testing Analytics:

### 1. Install GA4 (steps above)
### 2. Open your website
### 3. Accept cookies
### 4. Navigate around
### 5. Open Google Analytics → **Realtime**
### 6. You'll see yourself as a live visitor! 🎉

---

## 💡 Pro Tips:

1. **Wait 24-48 hours** after installing GA4 for full data to populate
2. **Realtime view** shows visitors immediately
3. **Use UTM parameters** in links to track campaigns
4. **Set up goals** for important actions (syllabus downloads)
5. **Export reports** to Excel/PDF for presentations

---

## Summary:

| Feature | Current (Cookies Only) | Google Analytics 4 |
|---------|----------------------|-------------------|
| Track own preferences | ✅ | ✅ |
| See total visitors | ❌ | ✅ |
| Page view stats | ❌ | ✅ |
| Real-time visitors | ❌ | ✅ |
| Demographics | ❌ | ✅ |
| Free | ✅ | ✅ |
| Setup time | Done | 5 minutes |

**Recommendation:** Install Google Analytics 4 now! It's free and gives you everything you need. 📊✨
