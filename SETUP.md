# Vite 8 + Tailwind v4 + shadcn/ui Setup Guide

## ✅ Project Setup Complete

Your portfolio project has been configured with:

- **Vite 8** - Lightning-fast build tool
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **View Transitions API** - Smooth page transitions

## 📦 Dependencies Installed

### Tailwind CSS & PostCSS

- `tailwindcss` - Core Tailwind framework
- `postcss` - CSS processor
- `autoprefixer` - Vendor prefix tool

### shadcn/ui Components

- `@radix-ui/react-slot` - Component composition primitives
- `@radix-ui/react-dialog` - Dialog/modal component
- `@radix-ui/react-primitive` - UI primitive components
- `class-variance-authority` - CSS class variant library
- `clsx` - Utility for conditional classnames
- `lucide-react` - Icon library
- `tailwind-merge` - Smart Tailwind class merging

## 🛠️ Configuration Files Created

### `postcss.config.js`

- Configures PostCSS to process Tailwind CSS
- Applies autoprefixer for browser compatibility

### `tailwind.config.ts`

- Scans `src/**/*.{js,ts,jsx,tsx}` for Tailwind classes
- Extends base theme for customization
- TypeScript for type safety

### `src/lib/utils.ts`

- Exports `cn()` utility function
- Merges Tailwind classes intelligently
- Used in all shadcn/ui components

## 🎨 CSS Setup

### `src/index.css`

- **Tailwind Directives**: `@tailwind base`, `@tailwind components`, `@tailwind utilities`
- **CSS Variables**: Custom color scheme with light/dark mode support
- **View Transitions**: Smooth 0.25s animations with cubic-bezier easing
- **Typography**: System fonts configured for optimal readability
- **Dark Mode**: Automatic dark color scheme detection

### Color Palette

Light Mode:

- Primary: `#aa3bff` (Purple)
- Background: `#fff`
- Text: `#6b6375`

Dark Mode:

- Primary: `#c084fc` (Light Purple)
- Background: `#16171d`
- Text: `#9ca3af`

## 📁 Project Structure

```
src/
├── components/
│   └── ui/
│       └── button.tsx          (Example shadcn component)
├── lib/
│   └── utils.ts                (cn() utility function)
├── App.tsx
├── main.tsx
└── index.css                   (Tailwind + View Transitions)
```

## 🚀 Usage

### Using Tailwind Classes

```tsx
export function MyComponent() {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
      <h1 className="text-2xl font-bold text-white">Hello World</h1>
    </div>
  );
}
```

### Using shadcn/ui Components

```tsx
import { Button } from "@/components/ui/button";

export function MyApp() {
  return (
    <Button variant="default" size="lg">
      Click me
    </Button>
  );
}
```

### Using the cn() Utility

```tsx
import { cn } from "@/lib/utils";

export function Customizable({ isActive }) {
  return (
    <button
      className={cn("p-2 rounded-md", isActive && "bg-purple-500 text-white")}
    >
      Toggle Button
    </button>
  );
}
```

## 🧩 Adding More shadcn/ui Components

To add more shadcn/ui components:

1. **Option A: Manual Install**

   ```bash
   npm install @radix-ui/<component-name>
   ```

2. **Option B: Copy Component File**
   - Visit [shadcn/ui components](https://ui.shadcn.com/)
   - Copy the component code into `src/components/ui/<component-name>.tsx`

### Example: Card Component

Create `src/components/ui/card.tsx`:

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
```

## 🎭 View Transitions Setup

View Transitions are already configured in `src/index.css`:

```css
::view-transition-group(*),
::view-transition-old(*),
::view-transition-new(*) {
  animation-duration: 0.25s;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
```

**Usage in React Router:**

```tsx
import { useNavigate } from "react-router-dom";

export function Navigation() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(path);
      });
    } else {
      navigate(path);
    }
  };

  return (
    <nav>
      <button onClick={() => handleNavigation("/")}>Home</button>
      <button onClick={() => handleNavigation("/about")}>About</button>
    </nav>
  );
}
```

## 🌙 Dark Mode Setup

Dark mode is automatically detected via CSS media query:

```css
@media (prefers-color-scheme: dark) {
  /* Dark mode colors are applied automatically */
}
```

To manually toggle dark mode, add this to your root element:

```tsx
<html className={darkMode ? 'dark' : ''}>
```

And update CSS variables:

```css
html.dark {
  color-scheme: dark;
  /* Override variables for dark mode */
}
```

## 📝 TypeScript Configuration

TypeScript paths are pre-configured:

```ts
// ✅ Works with alias
import { cn } from "@/lib/utils";

// ❌ Instead of
import { cn } from "../../lib/utils";
```

Update `tsconfig.json` if needed:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 🚀 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run eslint
npm run lint
```

## 🎯 Next Steps

1. **Import Button component** in your App.tsx
2. **Add more shadcn/ui components** as needed
3. **Customize Tailwind config** for your brand colors
4. **Build your portfolio** with these tools!

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
- [Vite Documentation](https://vite.dev/)

---

**Ready to build!** 🚀
