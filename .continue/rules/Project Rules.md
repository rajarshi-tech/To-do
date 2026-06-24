You are working on a Next.js project using TypeScript and Tailwind CSS.

PROJECT DETAILS
==============
Project Name: Todo
Description: A standard todo list app which focuses on basic functions
Target users: People looking for a simple application with no fluff and unnecessary features.
Core Features: task scheduling, task editing, task deletion, task completion status, drag and drop for task cards.
Deployment Target: vercel

ARCHITECTURE
============
- Follow existing project patterns before creating new ones.
- Prefer simple, maintainable solutions.
- Avoid unnecessary abstractions.
- Keep code modular and reusable.
- Do not rewrite unrelated code.

NEXT.JS RULES
=============
- Use App Router.
- Prefer Server Components by default.
- Use Client Components only when interactivity requires it.
- Keep pages focused on composition.
- Place reusable UI in components.
- Place business logic in feature-specific modules.
- Keep API and data fetching logic separate from presentation.

TYPESCRIPT RULES
================
- Never use any.
- Use strict typing.
- Explicitly type exported functions.
- Prefer interfaces for extendable object shapes.
- Prefer reusable types over duplication.
- Keep feature-specific types close to the feature.

REACT RULES
===========
- Components should have a single responsibility.
- Prefer composition over large monolithic components.
- Extract repeated UI into reusable components.
- Follow React Hooks rules strictly.
- Create custom hooks for reusable stateful logic.
- Avoid unnecessary memoization.

TAILWIND RULES
==============
- Use Tailwind utilities before custom CSS.
- Use mobile-first responsive design.
- Maintain consistent spacing and sizing.
- Avoid arbitrary values unless necessary.
- Prefer flex and grid utilities over custom layout CSS.
- Keep class lists readable and organized.

UI/UX RULES
===========
- All screens must be responsive.
- Consider accessibility when creating forms and interactive elements.
- Include loading states for async operations.
- Include error states where applicable.
- Avoid layout shifts.
- Maintain visual consistency across pages.

FILE ORGANIZATION
=================
Current structure:

app/
  components/
public/

As the project grows, prefer:

app/
  components/
  features/
  hooks/
  lib/
  types/
  constants/
public/

- Shared UI belongs in components.
- Feature-specific code belongs in features.
- Utility functions belong in lib.
- Custom hooks belong in hooks.
- Shared types belong in types.

CODE QUALITY
============
Before generating code:
- Understand existing architecture.
- Reuse existing components when possible.
- Check for existing utilities before creating new ones.

Before finishing:
- Remove unused imports.
- Remove dead code.
- Remove debugging code and console logs.
- Verify TypeScript types.
- Verify responsive behavior.
- Verify accessibility basics.

PERFORMANCE
===========
- Use Next.js Image where appropriate.
- Minimize client-side JavaScript.
- Lazy load heavy components when useful.
- Avoid unnecessary re-renders.
- Keep bundle size small.

NAMING CONVENTIONS
==================
Components:
- UserCard.tsx
- ProductGrid.tsx

Hooks:
- useAuth.ts
- useProducts.ts

Utilities:
- formatDate.ts
- calculateTax.ts

Constants:
- API_ROUTES.ts
- APP_CONFIG.ts

AI INSTRUCTIONS
===============
- Follow existing patterns first.
- Generate complete working code.
- Explain important architectural decisions briefly.
- Do not introduce dependencies unless justified.
- Ask questions if requirements are ambiguous.
- Maintain strict TypeScript compatibility.
- Prefer reusable and composable solutions.

PROJECT-SPECIFIC CONTEXT (for later)
========================

Design System:

Authentication:

Database:

API Structure:

State Management:

Coding Preferences:

Known Constraints:

Future Plans: