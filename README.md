# CSIT Hub | Far-Western University

A complete, SEO-optimized, responsive React application providing syllabus, academic updates, and announcements for BSc.CSIT, BIT, and MSc.CSIT programs under the Central Department of CSIT at Far-Western University.

🌐 **Official Reference:** [cdcsit.fwu.edu.np](https://cdcsit.fwu.edu.np/)

## ✨ Features

### Core Functionality
- 📚 **Comprehensive Syllabus Display** - Semester-wise syllabus for all programs
- 📰 **Updates & Announcements** - Latest news and department updates
- 🌓 **Dark/Light Mode** - Persistent theme preference using cookies
- 🍪 **Cookie Consent Banner** - GDPR-compliant cookie management
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- 🔍 **SEO Optimized** - Meta tags, Open Graph, sitemap, and robots.txt

### Technical Features
- ⚡ Built with **Vite** for blazing fast development
- ⚛️ **React 19** with modern hooks
- 🎨 **Tailwind CSS** for beautiful, responsive design
- 🧭 **React Router** for smooth navigation
- 🎯 **SEO with react-helmet-async**
- 📊 **Analytics Ready** (Google Analytics/Plausible)
- 🍪 **Cookie Management** with js-cookie

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Harikrishna-HG/CSIT-HUB.git
   cd CSIT-HUB
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
CSIT-HUB/
├── public/
│   ├── robots.txt          # SEO robots file
│   └── sitemap.xml         # XML sitemap
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SyllabusCard.jsx
│   │   ├── CookieBanner.jsx
│   │   └── SEOHead.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── BscCsit.jsx
│   │   ├── Bit.jsx
│   │   ├── MscCsit.jsx
│   │   ├── Updates.jsx
│   │   └── CookiePolicy.jsx
│   ├── data/               # JSON data files
│   │   ├── bscCsit.json
│   │   ├── bit.json
│   │   ├── mscCsit.json
│   │   └── updates.json
│   ├── utils/              # Utility functions
│   │   ├── cookies.js      # Cookie management
│   │   └── analytics.js    # Analytics tracking
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Entry point
│   └── index.css           # Tailwind styles
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite configuration
└── package.json
```

## 🎓 Programs Covered

### BSc.CSIT (Bachelor of Science in CSIT)
- 4 years (8 semesters)
- 126 credit hours
- Comprehensive computer science curriculum

### BIT (Bachelor in Information Technology)
- 4 years (8 semesters)
- 126 credit hours
- Practical IT-focused program

### MSc.CSIT (Master of Science in CSIT)
- 2 years (4 semesters)
- 60 credit hours
- Advanced topics: AI, ML, Cloud Computing, Big Data

## 🔧 Configuration

### Analytics Setup

To enable Google Analytics, update `src/utils/analytics.js`:

```javascript
export const initAnalytics = (enabled = true) => {
  analyticsEnabled = enabled;
  
  if (analyticsEnabled && typeof window !== 'undefined') {
    window.gtag('config', 'G-XXXXXXXXXX'); // Add your GA4 ID
  }
};
```

### Cookie Configuration

Cookie settings can be modified in `src/utils/cookies.js`. By default, cookies expire after 365 days for preferences and 30 days for last visited page.

### SEO Configuration

Update the site URL in `src/components/SEOHead.jsx`:

```javascript
const siteUrl = 'https://your-domain.com';
```

Also update `public/robots.txt` and `public/sitemap.xml` with your domain.

## 📊 SEO Keywords

The application is optimized for:
- BSc.CSIT FWU syllabus
- BIT Far-Western University
- MSc.CSIT FWU
- CSIT syllabus Nepal
- Far-Western University CSIT Department
- Computer Science Far-Western University

## 🍪 Cookie Usage

The application uses cookies for:
- **Theme Preference** - Remembers dark/light mode choice
- **Last Visited Page** - Improves navigation experience
- **Cookie Consent** - Stores user's consent choice
- **Analytics** (optional) - Only with user consent

## 🎨 Customization

### Colors
Modify the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

### Data Updates
Update syllabus and announcements by editing JSON files in `src/data/`:
- `bscCsit.json` - BSc.CSIT syllabus
- `bit.json` - BIT syllabus
- `mscCsit.json` - MSc.CSIT syllabus
- `updates.json` - Department updates

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👥 Authors

- **Harikrishna HG** - [GitHub](https://github.com/Harikrishna-HG)

## 🙏 Acknowledgments

- Central Department of CSIT, Far-Western University
- All contributors and maintainers
- Far-Western University community

## 📞 Contact

For inquiries about the programs, visit the [official CSIT department website](https://cdcsit.fwu.edu.np/).

---

**Made with ❤️ for the CSIT community at Far-Western University**

