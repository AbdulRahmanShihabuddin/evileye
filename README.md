# Dynamic Evil Eye Component

A fully customizable, highly interactive WebGL Evil Eye component for React, powered by **OGL**.

> **Credit & Customization Notice:**
> The original base component structure is sourced from **[React Bits](https://reactbits.dev)**. It has been extensively customized and enhanced to feature advanced mouse distance detection, reactive uniform scaling, continuous flame accumulation, and screen-presence handling.

> Deployed link: https://abdulrahmanshihabuddin.github.io/evileye/

## ✨ Features & Enhancements

- **Interactive Cursor Tracking**: The pupil intelligently follows the cursor position across the screen.
- **Dynamic Proximity Adaptation**:
  - **Color Interpolation**: Smoothly transitions the iris color from `#F97316` (outer) to `#EF4444` (inner) as the mouse gets closer to the pupil center.
  - **Flame Velocity Scaling**: Dynamically adjusts the shader flame simulation speed from `1` to `3` as the cursor approaches the pupil.
- **Screen Presence Detection**: Seamlessly detects when the cursor enters or leaves the screen. When the cursor is off screen, the eye glides back to its default center position, resetting beautifully to the base `#F97316` color and `1x` flame speed.
- **Continuous Shader Timing**: Accumulates internal time deltas seamlessly to ensure there are no abrupt noise texture shifts or visual flickers when speed variables fluctuate.

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js installed. The component uses `ogl` for rendering custom GLSL shaders.

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Running Locally

Start the Vite development server:

```bash
npm run dev
```

Open your browser to the URL provided in your terminal to see the interactive Evil Eye in action!
