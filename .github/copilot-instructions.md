## NeoNova — Copilot Instructions

Concise, actionable guidance for AI coding agents working on the NeoNova LED neon sign builder codebase.

### 1. Architecture Overview

**Tech Stack:**

- React 18 + TypeScript + Vite (SWC compilation for fast builds)
- shadcn-ui components + Radix UI primitives
- Client-side routing: `react-router-dom` v6
- Styling: Tailwind CSS with custom neon design tokens
- State: React hooks + Context API (minimal global state)
- Form handling: `react-hook-form` + `zod` validation
- UI feedback: `sonner` toasts

**Project Structure:**

```
src/
  pages/          # Route components (Home, Builder, Gallery, FAQ, Contact, NotFound)
  components/     # Reusable components (Navigation, NeonPreview)
    ui/           # shadcn-ui primitives (Button, Input, Card, etc.)
  contexts/       # LanguageContext (i18n with lt/en translations)
  lib/            # Utilities (utils.ts with cn() helper)
  hooks/          # Custom hooks (use-mobile, use-toast)
```

**Key Design System Elements:**

- Neon color palette: `neon-pink`, `neon-cyan`, `neon-amber`, `neon-purple`, `neon-green`, `neon-ice`
- Glow effects: `.neon-glow-{color}` utility classes (multi-layered text-shadow, see `src/index.css`)
- Custom fonts: `font-cursive`, `font-script`, `font-dancing`, `font-satisfy` (Pacifico, Great Vibes, etc.)
- All colors use HSL in `src/index.css` CSS variables

### 2. Developer Workflows

```bash
npm i              # Install dependencies (or use bun)
npm run dev        # Start Vite dev server on http://localhost:8080
npm run build      # Production build (also: build:dev for dev mode)
npm run lint       # ESLint check
npm run preview    # Preview production build locally
```

**Hot Reload:** Vite auto-reloads on file changes. Lovable-tagger plugin injects dev tags in development mode.

### 3. Critical Conventions & Patterns

**Path Aliases:**

- Always use `@/` imports (`@/components/ui/button`, `@/lib/utils`) — configured in `vite.config.ts` + `tsconfig.json`

**Translations (i18n):**

```tsx
import { useLanguage } from '@/contexts/LanguageContext';
const { t, language, setLanguage } = useLanguage();
// Use translation keys: t("nav.home"), t("builder.title")
```

All strings are in `src/contexts/LanguageContext.tsx` with nested keys (e.g., `"contact.form.success"`).

**Form Validation Pattern (see `src/pages/Builder.tsx`):**

```tsx
import { z } from 'zod';
import { toast } from 'sonner';

const emailSchema = z.string().email();
const result = emailSchema.safeParse(email);
if (!result.success) {
  toast.error(t('builder.toast.emailError'));
  return;
}
toast.success(t('builder.toast.quote'));
```

**Button Variants:**
Use `variant="neon"`, `variant="neon-cyan"`, or `variant="neon-solid"` from `src/components/ui/button.tsx` for branded buttons.

**Neon Preview Component (`src/components/NeonPreview.tsx`):**
Central component for displaying neon text with dynamic color, font, size props:

```tsx
<NeonPreview text="Dream Big" color="pink" font="cursive" size="lg" className="min-h-[400px]" />
```

**Routing:**
Add new routes in `src/App.tsx` **above** the `<Route path="*" element={<NotFound />} />` catch-all. Export page components as default from `src/pages/*`.

### 4. Styling & Design Tokens

**Neon Glow Classes:**
Apply glow to text: `.neon-glow-pink`, `.neon-glow-cyan`, etc. (defined in `src/index.css` with 4-layer text-shadow).

**Color References:**

```tsx
// In component:
className = 'text-neon-pink border-neon-cyan/30 hover:bg-neon-amber/20';
// Custom colors defined in tailwind.config.ts extend.colors.neon
```

**Transition Utility:**
`.transition-smooth` (250ms cubic-bezier) for consistent animations.

**Background Glow:**
`.bg-glow-subtle` for radial gradient backgrounds on hero sections.

### 5. Integration Points

**No Backend:**

- Forms are UI-only (toasts on submit, no real API calls yet)
- Contact/Builder forms show success toasts but don't send data
- If adding backend: follow `Builder.tsx` patterns with `zod` validation, `@tanstack/react-query` for data fetching

**External Libraries:**

- `lucide-react` for icons (Mail, Phone, Download, etc.)
- `sonner` for toast notifications (import from `@/components/ui/sonner`)
- `react-hook-form` for complex forms
- `class-variance-authority` (cva) for button variant logic

### 6. Common Tasks

**Adding a New Page:**

1. Create `src/pages/NewPage.tsx` with default export
2. Import in `src/App.tsx`: `import NewPage from "./pages/NewPage";`
3. Add route: `<Route path="/new-page" element={<NewPage />} />` (before `*` route)
4. Add navigation link in `src/components/Navigation.tsx`
5. Add translation keys in `src/contexts/LanguageContext.tsx` for lt/en

**Adding a New Neon Color:**

1. Add CSS variable in `src/index.css` (`:root` section): `--neon-orange: 25 100% 60%;`
2. Add to `tailwind.config.ts` `extend.colors.neon`: `orange: "hsl(var(--neon-orange))"`
3. Add glow utility in `src/index.css` `.neon-glow-orange { text-shadow: ... }`
4. Update `NeonPreview.tsx` color union type and `colorClasses` object

**Using shadcn-ui Components:**
Components are in `src/components/ui/*`. Use as-is or extend variants. Example:

```tsx
import { Button } from '@/components/ui/button';
<Button variant="neon-solid" size="lg">
  Click Me
</Button>;
```

### 7. Lovable Integration

Project uses Lovable (lovable.dev) for collaborative development:

- `lovable-tagger` plugin runs in dev mode (adds data attributes for Lovable editor)
- Changes pushed to GitHub sync with Lovable project
- Don't remove Lovable-generated comments unless intentional

### 8. Gotchas & Tips

- **Route order matters:** Always add custom routes before `<Route path="*">` in `App.tsx`
- **Translation keys:** Use dot notation (`"page.section.item"`) and ensure both `lt` and `en` exist
- **Type safety:** TypeScript strict mode enabled — always type component props
- **Color format:** All colors must be HSL (not hex/rgb) for CSS variable system
- **Imports:** Prefer named imports from `@/components/ui` over default exports

### 9. Testing & Debugging

**No test suite configured yet.** Manual testing workflow:

1. Run `npm run dev` and test in browser
2. Check `npm run lint` before commits
3. Build with `npm run build` to catch TypeScript errors
4. Use browser DevTools for runtime debugging

**Common Issues:**

- Port 8080 already in use: Kill process or change port in `vite.config.ts`
- Missing translations: Check console for key errors, add to both languages in `LanguageContext.tsx`
- Styling not applied: Verify Tailwind class names, check `tailwind.config.ts` for custom classes

---

**Questions or unclear patterns?** Check existing pages (`Builder.tsx`, `Contact.tsx`) for reference implementations.
