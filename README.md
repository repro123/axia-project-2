# Nexcent Landing Page

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

A modern, accessible landing page featuring dark mode toggle and mobile-responsive navigation. Built with HTML, Tailwind CSS, and Vanilla JavaScript.

## Features ✨

- 🌓 **Dark/Light Mode Toggle** with icon switching
- 📱 **Mobile-First Responsive Design**
- ♿ **WCAG-Compliant Accessibility**
- ⌨️ **Full Keyboard Navigation**
- 🍔 **Animated Mobile Menu**
- 🖼️ **Lazy-Loaded Images**
- 🎨 **Custom Hover Effects & Transitions**

## Technologies Used 🛠️

- **HTML5** Semantic Markup
- **Tailwind CSS** v4.0+
- **Vanilla JavaScript**
- **Google Fonts** (Inter typeface)
- **CSS3** Flexbox/Grid Layouts

## Key Accessibility Features ♿

- **Semantic HTML5 Structure**  
  Proper use of heading hierarchy and landmark elements

- **ARIA Roles & Attributes**

  - `aria-label` for icon buttons
  - `aria-expanded` for mobile menu toggle
  - `aria-controls` for menu relationship
  - `role="list"` for screen reader compatibility

- **Keyboard-Navigable Interface**

  - Tab-through navigation
  - Escape key to close mobile menu
  - Visible focus outlines for interactive elements

- **Accessible Contrast Ratios**

  WCAG 2.1 AA compliant in both light/dark themes

## Responsive Design 📱💻

- **Mobile-First Breakpoints**

  - `< 768px`: Mobile layout
  - `768px - 1024px`: Tablet layout
  - `> 1024px`: Desktop layout

- **Fluid Typography & Spacing**
  Relative units (rem) for scaling

- **Orientation-Adaptive Layouts**
  Adjusts to portrait/landscape modes

- **Touch-Friendly Interactive Elements**
  Minimum 48x48px touch targets

## Dark Mode Implementation 🌓

- **CSS Custom Properties**
  Theme switching using CSS variables

- **Dual-Themed Logo Support**
  Automatic logo switching based on theme:

  ```html
  <img id="lightModeLogo" src="light-logo.png" />
  <img id="darkModeLogo" class="hidden" src="dark-logo.png" />
  ```

## JavaScript Features ⚡

    // Mobile Menu Toggle
    const toggleNav = () => {
    const isExpanded = toggleNavBtn.getAttribute("aria-expanded") === "true";
    toggleNavBtn.setAttribute("aria-expanded", !isExpanded);
    // ...menu visibility logic
    };

    // Theme Toggler
    function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    // ...icon switching logic
    }

    // Event Listeners
    document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
    });

## Testing

- Responsiveness tested with Mobile Simulator chrome extension, fully responsive on all devices
- Site tested on [Page Speed site](https://pagespeed.web.dev/)

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

**Crafted with ♥ by [Bello Ibrahim](https://github.com/repro123/)**  
[![GitHub Stars](https://img.shields.io/github/stars/repro123/nexcent-landing-page?style=social)](https://github.com/repro123/axia-project-2)
