# JuanaBin PH — Website Redesign & Development

A modern, professional React application for JuanaBin PH featuring AI-driven waste management and artisan empowerment through a circular economy model.

## 🌿 Overview

JuanaBin PH is a full-featured ecommerce and content platform that combines:
- **Sustainable waste management** through AI-powered systems
- **Artisan empowerment** by connecting recycled materials to Filipino craftspeople
- **Community engagement** via gamified waste tracking and impact metrics
- **Editorial content** showcasing circular economy principles

## 🛠️ Tech Stack

- **React 18** — UI library
- **Vite** — Build tool & dev server
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animation library
- **Lucide React** — Icon system
- **React Router** — Client-side routing
- **localStorage** — Cart persistence

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Sticky navigation with mobile menu
│   ├── Footer.tsx      # Footer with company info
│   └── ProductCard.tsx # Product card with animations
├── context/            # React Context
│   └── CartContext.tsx # Cart state management
├── data/               # Application data
│   ├── products.js     # 9 products with details
│   └── blogPosts.js    # 3 featured blog posts
├── pages/              # Page components
│   ├── Home.tsx        # Hero, mission, artisan impact
│   ├── Shop.tsx        # Product grid with filters
│   ├── Cart.tsx        # Shopping cart
│   ├── Blog.tsx        # Blog listing
│   ├── Article.tsx     # Article detail
│   ├── Donate.tsx      # Donation page
│   └── Subscriptions.tsx # Newsletter management
├── App.tsx             # Main app with routing
├── index.css           # Tailwind & global styles
└── main.tsx            # React entry point

index.html             # HTML entry point
package.json           # Dependencies
vite.config.js         # Vite configuration
tailwind.config.js     # Tailwind customization
postcss.config.js      # PostCSS setup
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ (with npm or yarn)

### Installation

1. **Navigate to project directory**
   ```bash
   cd juanabin-ph
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   - The app opens automatically at `http://localhost:5173`
   - Hot module replacement (HMR) enabled for live edits

### Build for Production

```bash
npm run build
# or
yarn build
```

Output: `dist/` directory ready for deployment

## 🎨 Design Principles

### Color Palette
- **Primary Green (Eco)** — `#16a34a` — Used selectively as accent
- **Warm Neutrals** — `#fafaf8`, `#f5f5f2` — Base backgrounds
- **Text** — `#1f2017` warm grey for readability

### Typography
- **Font Family** — Inter (modern, tech-forward)
- **Hierarchy** — Clear scale with semantic HTML
- **Line Length** — Optimized for readability (<80 characters)

### Motion & Animation
- **Orchestrated Moments** — Hero reveals, section transitions
- **Card Interactions** — Subtle hover effects with Framer Motion
- **Navigation** — Smooth drawer and menu transitions
- **Responsiveness** — No jank, 60fps animations

## 📦 Features

### Pages

#### **Home**
- Hero with journey visualization (Waste → AI Sorting → Products)
- Intelligent segregation feature cards
- Mission statement with 3-step process
- Artisan impact showcase (reclaimed wood, plastic textiles, recycled glass)
- Contact form for partnerships

#### **Shop**
- 9 curated products across 3 categories
- Advanced filtering (type, price, capacity, mounting, etc.)
- Sorting (price, name, recommended)
- Real-time product count updates
- Search by product name, category, or type
- Mobile filter drawer
- Responsive grid (1-3 columns)

#### **Cart**
- Add/remove products
- Quantity adjustment
- Real-time subtotal & tax calculation (12% VAT)
- localStorage persistence
- Empty state with CTA
- Checkout button (placeholder)

#### **Blog**
- 3 featured articles (Technology, Artisan Impact, Community)
- Category filtering
- Article search
- Featured post highlight
- Responsive card grid
- Reading time & view counts

#### **Article**
- Full-width editorial layout
- Comfortable typography
- Related posts sidebar
- Author & metadata
- Call-to-action section

#### **Donate**
- Impact-driven messaging
- Multiple donation tiers (₱100–₱5000)
- Custom amount input
- Trust indicators (95% efficiency, 500+ artisans, 2.5M kg waste diverted)
- Environmental, social, tech benefit areas

#### **Subscriptions**
- Active subscriptions management
- Available subscriptions to add
- Email notification preferences
- Unsubscribe functionality

### Components

#### **Navbar**
- Fixed positioning with scroll animation (shrink, blur, shadow)
- Desktop horizontal menu
- Mobile hamburger drawer
- Cart item count badge
- Notification icon
- Responsive logo

#### **Footer**
- Company mission statement
- Quick navigation links
- Social media (Facebook, Instagram, LinkedIn)
- Copyright & legal links
- Dark theme (`warm-900`)

#### **ProductCard**
- Image with hover zoom
- Category badge
- Name & description (truncated)
- Price
- Add to Cart & Quick View buttons
- Framer Motion hover effect

### Cart System
- Context API state management
- localStorage persistence (auto-save)
- Add/remove/update quantity
- Real-time cart count
- Tax calculation (12% VAT)

## 🎯 Responsive Design

| Breakpoint | Width | Layout |
|-----------|-------|--------|
| Mobile | < 640px | Single column, hamburger menu |
| Tablet | 640px–1024px | 2 columns, filter drawer |
| Desktop | > 1024px | 3 columns, sidebar filters |

**Touch-friendly** controls, **optimized images**, **no horizontal scroll**

## ♿ Accessibility

- **Semantic HTML** — `<nav>`, `<main>`, `<article>`, `<footer>`
- **Heading Hierarchy** — Proper h1–h6 structure
- **Keyboard Navigation** — All interactive elements tab-accessible
- **Focus States** — Visible focus rings (Tailwind `focus:ring-2`)
- **Alt Text** — Images have descriptive alt attributes
- **Color Contrast** — WCAG AA compliant ratios
- **ARIA Labels** — For icon buttons

## 🔧 Customization

### Adding Products
Edit `src/data/products.js`:
```javascript
export const products = [
  {
    id: 10,
    name: 'New Product',
    category: 'Smart Bins',
    price: 500,
    // ... other fields
  }
];
```

### Adding Blog Posts
Edit `src/data/blogPosts.js`:
```javascript
export const blogPosts = [
  {
    id: 4,
    title: 'New Article',
    category: 'Sustainability',
    content: 'Full article content...',
    // ... other fields
  }
];
```

### Tailwind Colors
Customize in `tailwind.config.js`:
```javascript
colors: {
  eco: { 600: '#16a34a' }, // Primary green
  warm: { 900: '#1f2017' }  // Dark text
}
```

## 📱 Mobile Optimization

- ✅ Hamburger menu (Framer Motion drawer)
- ✅ Touch-friendly buttons (min 44px)
- ✅ Mobile filter drawer
- ✅ Responsive images (srcset ready)
- ✅ Single-column layouts
- ✅ No horizontal scrolling
- ✅ Optimized font sizes

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Update `vite.config.js` with base path
2. Run `npm run build`
3. Deploy `dist/` folder

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
```

## 🎬 Performance

- ✅ Code splitting by route
- ✅ Image optimization (external CDN)
- ✅ CSS minification (Tailwind)
- ✅ JS minification (Vite)
- ✅ Lazy loading with Framer Motion
- ✅ Smooth animations (60fps)

## 📊 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- Mobile Safari 15+

## 🤝 Contributing

1. Create a feature branch
2. Make changes
3. Test on mobile & desktop
4. Submit pull request

## 📝 License

© 2026 JuanaBin PH. All rights reserved.

## 📧 Support

For questions or issues:
- Email: info@juanabin.ph
- Website: juanabin.ph

---

**Built with ❤️ for sustainable waste management and artisan empowerment**
