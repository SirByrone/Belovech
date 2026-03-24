# Development Guide

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # React components
│   ├── layout/         # Header, Footer
│   ├── sections/        # Page sections
│   └── ui/             # Reusable UI components
└── lib/                # Utilities
```

## Key Features Implemented

✅ **Project Setup**
- Next.js 14 with App Router
- TypeScript configuration
- Tailwind CSS with custom design system
- Essential dependencies installed

✅ **Theme System**
- Dark/Light theme toggle
- System preference detection
- Smooth transitions
- Persistent theme storage

✅ **Layout Components**
- Responsive header with navigation
- Mobile-friendly hamburger menu
- Comprehensive footer with links
- Theme toggle integration

✅ **Home Page Sections**
- Hero section with animations
- Why Belovech section
- Services preview
- Global presence map
- Statistics display
- Client testimonials
- Call-to-action section

✅ **Design System**
- Custom color palette
- Typography system
- Component variants
- Animation patterns
- Responsive breakpoints

## Next Steps

The foundation is complete! You can now:

1. **Run the project** to see the current implementation
2. **Customize content** by editing the section components
3. **Add new pages** following the existing patterns
4. **Extend functionality** with additional features

## Customization Tips

- **Colors**: Modify `tailwind.config.js` for brand colors
- **Content**: Update text in section components
- **Images**: Replace placeholder images with real assets
- **Animations**: Adjust timing in Framer Motion components
- **Layout**: Modify grid systems in Tailwind classes

## Performance Notes

- All images are optimized with Next.js
- Animations use GPU acceleration
- Code is automatically split by route
- CSS is purged for minimal bundle size
