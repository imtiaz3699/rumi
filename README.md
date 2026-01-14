# Copy.ai Clone - React + Vite + TypeScript + Shadcn/UI

A modern recreation of Copy.ai's landing page built with React, Vite, TypeScript, TailwindCSS, and Shadcn/UI components.

## 🚀 Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Latest React with TypeScript
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 🧩 **Shadcn/UI** - High-quality accessible components
- 📱 **Responsive Design** - Mobile-first approach
- 🎯 **Pixel Perfect** - Faithful recreation of Copy.ai design

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Components**: Shadcn/UI
- **Icons**: Lucide React
- **Development**: Hot reload with Vite

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/           # Shadcn/UI components
│   │   ├── Navbar.tsx    # Navigation component
│   │   └── Hero.tsx      # Hero section component
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── tailwind.config.js    # TailwindCSS configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Design Recreation

This project faithfully recreates the Copy.ai landing page including:

### Navbar
- Clean, minimal navigation
- "We're Hiring!" badge
- Dropdown menus for Use Cases and Resources
- Responsive mobile menu
- Teal "Get Started" CTA button

### Hero Section
- Large, bold typography with gradient text
- Subtle background decorative shapes
- Two-tone heading (teal and purple)
- Product Hunt badge integration
- Multiple CTA buttons
- "No credit card required" messaging

### Color Scheme
- **Primary Teal**: `#14b8a6` (teal-500)
- **Primary Purple**: `#581c87` (purple-900)
- **Background**: Soft gray gradients
- **Text**: Various gray shades for hierarchy

## 🧩 Components

### Shadcn/UI Components Used
- **Button**: Customizable button component with variants
- **Utility Functions**: `cn()` for conditional classes

### Custom Components
- **Navbar**: Responsive navigation with mobile menu
- **Hero**: Main landing section with CTAs

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Uses TailwindCSS responsive utilities
- **Navigation**: Collapsible mobile menu
- **Typography**: Scales appropriately across devices

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist` folder contents to web server

## 🔧 Customization

### Colors
Update colors in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    }
  }
}
```

### Components
- Modify components in `src/components/`
- Add new Shadcn/UI components as needed
- Update styling with TailwindCSS classes

## 📄 License

This project is for educational purposes and design recreation. Copy.ai's original design and branding remain their property.

---

Built with ❤️ using modern web technologies