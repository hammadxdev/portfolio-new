# Quick Start Guide 🚀

## Start Development Server

```bash
npm run dev
# Opens http://localhost:5173
```

## Build for Production

```bash
npm run build
# Creates optimized `dist/` folder
```

## Key File Locations

| Purpose         | File                 |
| --------------- | -------------------- |
| Main Component  | `src/App.tsx`        |
| Global Styles   | `src/index.css`      |
| Layout Styles   | `src/App.css`        |
| UI Components   | `src/components/ui/` |
| Utilities       | `src/lib/utils.ts`   |
| Tailwind Config | `tailwind.config.ts` |
| Vite Config     | `vite.config.ts`     |

## Import Examples

```tsx
// Import Tailwind button component
import { Button } from "@/components/ui/button";

// Import utility function
import { cn } from "@/lib/utils";

// Use in component
<Button className={cn("px-4", isActive && "bg-blue-500")}>Click Me</Button>;
```

## Button Variants

```tsx
<Button variant="default" />    {/* Primary */}
<Button variant="secondary" />  {/* Secondary */}
<Button variant="outline" />    {/* Outline */}
<Button variant="ghost" />      {/* Ghost */}
<Button variant="destructive" />{/* Danger */}
<Button variant="link" />       {/* Link */}
```

## Button Sizes

```tsx
<Button size="sm" />             {/* Small */}
<Button size="default" />        {/* Default */}
<Button size="lg" />             {/* Large */}
<Button size="icon" />           {/* Icon */}
```

## CSS Variables Available

### Light Mode

```css
--text: #6b6375 --text-h: #08060d --bg: #fff --border: #e5e4e7 --accent: #aa3bff;
```

### Dark Mode (automatic)

```css
--text: #9ca3af --text-h: #f3f4f6 --bg: #16171d --border: #2e303a
  --accent: #c084fc;
```

## Common Tailwind Patterns

```tsx
// Responsive Grid
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

// Flexbox Center
<div className="flex items-center justify-center">

// Gradient Background
<div className="bg-gradient-to-r from-purple-600 to-pink-600">

// Dark Mode
<div className="bg-white dark:bg-slate-950">

// Hover State
<button className="hover:bg-purple-700">

// Smooth Transition
<div className="transition-colors duration-300">
```

## Adding Components

### From shadcn/ui Library

1. Visit [ui.shadcn.com](https://ui.shadcn.com/)
2. Find a component (Dialog, Card, Input, etc.)
3. Copy the code
4. Save to `src/components/ui/component-name.tsx`
5. Import and use!

### Example: Adding Card

```tsx
// src/components/ui/card.tsx
import { cn } from "@/lib/utils";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-white dark:bg-slate-950 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
```

```tsx
// Use in component
import { Card } from "@/components/ui/card";

<Card className="p-6">
  <h3>My Card</h3>
</Card>;
```

## Customizing Colors

Edit `tailwind.config.ts`:

```ts
export default {
  theme: {
    extend: {
      colors: {
        primary: "#your-color",
        secondary: "#your-color",
      },
    },
  },
};
```

Then use:

```tsx
<div className="bg-primary text-white">Content</div>
```

## Tips & Tricks

✅ Use `@/lib/utils` for the `cn()` function  
✅ Tailwind handles responsive with `md:`, `lg:`, `sm:`  
✅ Dark mode works automatically  
✅ Path alias `@/` works everywhere in `src/`  
✅ Components auto-import with proper setup  
✅ View transitions already configured

---

**Happy coding! 🎉**
