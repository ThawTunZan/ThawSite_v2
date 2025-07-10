# Thaw Tun Zan - Portfolio Website (React)

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern React Architecture** - Built with React 18, TypeScript, and Vite
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion for engaging user interactions
- **SEO Optimized** - React Helmet for meta tags and SEO
- **Interactive Projects** - Search and filter functionality
- **Contact Form** - Functional contact form with validation
- **Dark Theme** - Professional dark theme with accent colors
- **Performance Optimized** - Fast loading with Vite build system

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Forms**: React Hook Form
- **SEO**: React Helmet Async
- **Scroll Animations**: React Intersection Observer

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   ├── HeroSection.tsx # Hero section
│   ├── FeaturedProjects.tsx # Featured projects
│   └── ProjectCard.tsx # Project card component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── Projects.tsx    # Projects page
│   └── About.tsx       # About page
├── App.tsx             # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio_Website_New
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f8fafc',
    // ... other shades
    900: '#0f172a',
  },
  accent: {
    50: '#eff6ff',
    // ... other shades
    900: '#1e3a8a',
  }
}
```

### Content
- Update project information in the respective page components
- Modify personal information in `src/pages/About.tsx`
- Add new projects in `src/pages/Projects.tsx`

### Images
Place your images in the `public/images/` directory and update the image paths in the components.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Thaw Tun Zan**
- Email: thawtunzan@gmail.com
- LinkedIn: [Thaw Tun Zan](https://sg.linkedin.com/in/thaw-tun-zan-b25370205)
- GitHub: [@ThawTunZan](https://github.com/ThawTunZan)

## 🙏 Acknowledgments

- Original portfolio design inspiration
- React and TypeScript communities
- Tailwind CSS for the styling framework
- Framer Motion for animations 