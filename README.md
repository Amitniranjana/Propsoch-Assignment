# Propsoch Frontend Landing Page

This repository contains the improved landing page for Propsoch, built as part of the Frontend Intern Assignment.

## 🚀 Live Demo
https://propsoch-assignment-ten.vercel.app/

## 🛠️ Technical Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: Lucide React
- **Fonts**: Geist Sans / Geist Mono

## ✨ Improvements & Rationale

### 1. Modern & Premium Aesthetic
**Goal**: Create a trustworthy, high-end first impression.
- **Change**: Replaced flat colors with "glassmorphism" (backdrop-blur), gradient text, and deep translucent overlays.
- **Why**: Real estate buying is an emotional decision. A premium look builds confidence (Trust Signals) and aligns with the "Data-Driven" value proposition.

### 2. Performance Optimization
**Goal**: Improve Core Web Vitals (LCP/CLS).
- **Change**: Implemented `next/image` with `priority` for the Hero background to prevent layout shift.
- **Why**: Large banner images are the biggest drag on performance. Next.js automatic optimization handles resizing and format conversion (WebP/AVIF).

### 3. Responsive UX
**Goal**: Seamless experience across devices.
- **Change**:
    - **Navbar**: Sticky glass effect that adapts scroll state; fully mobile-responsive hamburger menu.
    - **Grids**: Responsive grid systems (1 col mobile -> 4 col desktop) for properties and content.
- **Why**: +50% of traffic is likely mobile. The original site had rigid tables/grids that broke on small screens.

### 4. Interactive Feedback
**Goal**: Make the interface feel "alive".
- **Change**: Added `hover`, `active`, and `focus` states to all interactive elements. Added smooth transitions (`transition-all duration-300`).
- **Why**: Micro-interactions guide the user and improve perceived performance.

## 🏃‍♂️ How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/Amitniranjana/Propsoch-Assignment.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure
- `/components`: Reusable UI components (Hero, Navbar, PropertyCard, etc.)
- `/app`: Next.js App Router pages and global layouts
- `Analysis.md`: Detailed analysis of the original site UX/UI and Lighthouse scores.

Contact details:
- Name: Amit Niranjan
- Email: yamitniranjan1234@gmail.com
<<<<<<< HEAD
- Phone: +91 8542935871
=======
- Phone: +91 8542935871
>>>>>>> d8220ac4aea03e9c1f2772ee76394c37597deb8d
