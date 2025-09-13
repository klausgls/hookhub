# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build**: `npm run build` (production build with Turbopack)
- **Start production server**: `npm run start`
- **Lint**: `npm run lint` (ESLint with Next.js configuration)

## Project Architecture

This is a Next.js 15.5.3 application using the App Router architecture with TypeScript and Tailwind CSS v4.

### Key Technologies
- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 via PostCSS
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Build tool**: Turbopack (enabled in dev and build scripts)

### Project Structure
- `src/app/` - App Router pages and layouts
- `public/` - Static assets
- TypeScript path alias `@/*` maps to project root

### Configuration
- ESLint extends Next.js core web vitals and TypeScript rules
- TypeScript configured for ES2017 target with strict mode
- Tailwind CSS v4 integrated via PostCSS plugin
- Module resolution set to "bundler" for modern bundling