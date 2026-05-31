# SNG it services - React Replica

A high-fidelity React clone of https://gamicsolutions.com/ built for SNG it services, implemented with Vite, TypeScript, Tailwind CSS, Framer Motion, React Router DOM, and Lucide React.

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide React Icons

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Type Check

```bash
npm run typecheck
```

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── ServiceCards/
│   ├── CTA/
│   ├── Testimonials/
│   ├── Footer/
│   ├── Shared/
├── data/
├── hooks/
├── pages/
├── routes/
├── App.tsx
├── main.tsx
└── index.css
```

## Notes

- Static mock data only.
- Routes are lazy loaded.
- Animations use Framer Motion for hero, section reveal, hover states, and mobile navigation.
- The design intentionally mirrors the reference site’s light hero, blue CTA buttons, stacked content blocks, and dark contrast sections.
