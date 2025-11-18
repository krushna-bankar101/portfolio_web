# Design Guidelines: Dynamic 3D Developer Portfolio

## Design Approach
**Reference-Based Approach** drawing from modern developer portfolios with immersive 3D experiences (e.g., Bruno Simon's portfolio, Awwwards winners). This portfolio demands visual impact with scroll-driven 3D interactions while maintaining professional credibility for a Computer Engineering student.

## Core Design Principles
1. **Immersive Depth**: Multi-layered 3D elements that respond to scroll position
2. **Neon Cyberpunk Aesthetic**: Dark backgrounds with glowing neon blue (#00D9FF) and purple (#B026FF) accents
3. **Performance-First**: Smooth 60fps animations despite 3D complexity
4. **Developer Identity**: Terminal-inspired typography, code-like details, tech-forward visuals

---

## Typography System

**Headings**: JetBrains Mono (monospace, developer aesthetic)
- H1: text-6xl md:text-7xl lg:text-8xl, font-bold, with neon glow effect
- H2: text-4xl md:text-5xl, font-semibold, gradient text treatment
- H3: text-2xl md:text-3xl, font-medium

**Body**: Inter (clean, modern readability)
- Large: text-lg md:text-xl, leading-relaxed
- Regular: text-base, leading-relaxed
- Small: text-sm, for metadata

**Accent Elements**: Use monospace for code snippets, terminal prompts, numerical data

---

## Layout & Spacing System

**Spacing Primitives**: Use Tailwind units of 4, 8, 16, 24, 32 for consistency
- Component padding: p-8 to p-16
- Section spacing: py-24 md:py-32 lg:py-40
- Content max-width: max-w-7xl for full sections, max-w-4xl for text content

**Section Structure**:
- Hero: Full viewport (100vh) with 3D background
- Content sections: Natural height with generous py-32
- No forced viewport heights beyond hero

---

## 3D Scroll Animation Framework

**Hero Section 3D Background**:
- Floating geometric shapes (icosahedrons, toruses, cubes) that slowly rotate and move with parallax
- Shapes use wireframe/outline style with neon gradient strokes
- Mouse parallax on hero: subtle 3D tilt following cursor movement
- Scroll-triggered depth: shapes move at different Z-axis speeds creating depth

**Parallax Scroll Layers** (Throughout Site):
- Background layer: Slowest movement (0.3x scroll speed) - particle grid or wave mesh
- Mid layer: Medium speed (0.6x) - glassmorphism cards
- Foreground: Normal speed (1x) - text content
- Creates sense of depth without motion sickness

**Skill Network Visualization**:
- 3D node graph with interconnected skill bubbles
- Nodes glow with neon colors, connections pulse with energy
- Animates into view on scroll with staggered node appearance
- Interactive: nodes gently float and rotate

**Project Cards 3D Effects**:
- Cards tilt in 3D space on hover (perspective transform)
- Scroll-triggered: cards slide in from different angles with rotation
- Depth shadows: multiple colored shadow layers for 3D appearance
- Staggered animation cascade as user scrolls

**Background 3D Elements**:
- Animated particle field that reacts to scroll progress (density/movement changes)
- Grid lines with perspective vanishing point that shifts with scroll
- Gradient orbs that float and change intensity based on scroll position

---

## Component Library

### Navigation
- Sticky glassmorphism header with backdrop blur
- Animated underline indicator following active section
- Neon glow on hover states

### Hero Section
- Full viewport with 3D canvas background
- Large animated name with typing effect or glitch animation
- Dual CTAs: primary neon button + outlined secondary
- Floating geometric 3D shapes behind text
- **Image**: No traditional hero image - replaced with 3D canvas elements

### About Section
- Two-column layout: text + animated skill orbit/radar visualization
- Glassmorphism card with gradient border
- Terminal-style prompt prefix for headings (">_")

### Skills Grid
- 3-4 column grid (responsive: 1 col mobile, 2 tablet, 4 desktop)
- Each skill as neon-bordered card with icon
- 3D depth with layered shadows
- Hover: card lifts with increased glow

### Projects Showcase
- Masonry or staggered grid layout (not uniform rows)
- Large preview cards with 3D tilt on hover
- Scroll-triggered reveal with rotation animation
- Each card: project image, tech stack tags, description
- Neon gradient borders that pulse on hover

### Achievements Timeline
- Vertical timeline with 3D depth perspective
- Achievement cards slide in from alternating sides
- Glowing connection lines between items
- Certificate icons with neon outline

### Contact Form
- Glassmorphism container with 3D depth shadow
- Animated input fields: neon underline expands on focus
- Floating labels with smooth transitions
- Submit button with ripple effect and glow

### Footer
- Multi-column (3 cols desktop, stack mobile)
- Social icons with neon hover glow
- Gradient divider line with animated pulse
- Background: subtle 3D grid fading into distance

---

## Visual Treatment

**Glassmorphism Cards**:
- Background: rgba(15, 15, 35, 0.7) with backdrop-filter blur(20px)
- Border: 1px solid with gradient (neon blue to purple)
- Box shadow: Multiple layers including colored glow

**Neon Glow Effects**:
- Primary glow: 0 0 20px rgba(0, 217, 255, 0.6)
- Secondary glow: 0 0 30px rgba(176, 38, 255, 0.4)
- Apply to buttons, borders, headings, and interactive elements

**Gradient Treatments**:
- Text gradients: linear from cyan to purple
- Border gradients: animated shifting hue
- Background gradients: radial dark blue to black

**3D Depth Indicators**:
- Multiple shadow layers offset in Z-space
- Perspective transforms on hover (rotateX, rotateY)
- Transform-style: preserve-3d for nested elements

---

## Animation Specifications

**Scroll Animations** (Use GSAP ScrollTrigger):
- Fade + slide combinations with rotation
- Stagger children by 0.1s delay
- Ease: power3.out for smooth deceleration
- Trigger: when 20% of element enters viewport

**3D Transforms**:
- Smooth transitions (transition-all duration-500)
- Preserve-3d on container elements
- Subtle continuous animations (floating, rotating) at 0.5-1s intervals

**Performance Constraints**:
- Limit simultaneous 3D elements to essential features
- Use will-change sparingly
- Implement intersection observers to pause off-screen animations
- Lazy load Three.js scenes below fold

---

## Images

**Profile/About Section**: Professional headshot or avatar with neon border treatment, 300x300px minimum

**Project Screenshots**: High-quality mockups of projects, 800x600px minimum, placed within project cards with subtle 3D tilt

**Achievement Icons**: Certification badges or trophy icons with neon outline treatment

**Background Textures**: Optional: subtle circuit board pattern or hex grid as overlay on dark sections

**No traditional hero image** - hero uses 3D canvas with geometric shapes instead

---

## Responsive Behavior

**Desktop (1280px+)**: Full 3D effects, multi-column layouts, complex parallax
**Tablet (768-1279px)**: Reduced 3D complexity, 2-column grids, simpler parallax
**Mobile (<768px)**: Minimal 3D (performance), single column, scroll-triggered fades only

**Critical**: All 3D elements must gracefully degrade on mobile - replace with 2D animated alternatives if needed for performance.