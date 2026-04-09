# GitHub Copilot Learning Hub

An interactive, single-page website that teaches every GitHub Copilot feature in VS Code — from inline suggestions to autonomous agents, MCP servers, and custom instructions.

![Dark theme screenshot](https://img.shields.io/badge/theme-dark%20%2F%20light-blue) ![Static site](https://img.shields.io/badge/stack-HTML%20%2B%20CSS%20%2B%20JS-orange) ![No dependencies](https://img.shields.io/badge/dependencies-zero-green)

## Features

- **15 learning sections** covering every Copilot capability in VS Code
- **Progress tracking** — check off sections as you complete them (persisted in localStorage)
- **Searchable keyboard shortcuts** with macOS / Windows+Linux toggle
- **Dark & light themes** with system-preference-aware toggle
- **Collapsible sub-sections** for dense reference material
- **"Try It" exercises** in every section with hands-on prompts
- **Copy-to-clipboard** on all code blocks
- **Scroll-triggered animations** and active nav highlighting
- **Fully responsive** — works on mobile, tablet, and desktop
- **Zero dependencies** — pure HTML, CSS, and vanilla JavaScript

## Content Covered

| Section | Topics |
|---------|--------|
| Setup | Sign in, open chat, `/init` command |
| Inline Suggestions | Ghost text, Tab/partial accept, cycling alternatives, code comments |
| Next Edit Suggestions | NES gutter navigation, typo fixes, intent changes, refactoring |
| Chat View | Multi-turn conversations, session config, context (#/@ mentions), reviewing changes, checkpoints |
| Inline Chat | Editor inline chat, terminal inline chat, Quick Chat |
| Agents | Agent/Plan/Ask, local/CLI/cloud/third-party, permission levels, hand-off, parallel sessions |
| Smart Actions | Commit messages, merge conflicts, docs, tests, fix errors, code review, rename, semantic search |
| Slash Commands | 24 commands: `/init`, `/plan`, `/fix`, `/tests`, `/create-agent`, `/yolo`, and more |
| Chat Participants | `@github`, `@terminal`, `@vscode` |
| Context & Tools | All `#`-variables and built-in tool sets |
| Customization | Custom instructions, agents, MCP servers, prompt files, skills, hooks |
| Best Practices | Tool selection, prompt engineering, plan→implement→review workflow, session management |
| Keyboard Shortcuts | Interactive filterable table with OS toggle |
| Resources | Links to official docs, tutorials, YouTube, community |

## Getting Started

No build step required. Just open the HTML file:

```bash
# Clone the repo
git clone https://github.com/Enterprise-Services-Group/sxdvibecoding.git
cd sxdvibecoding

# Open in browser
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

Or deploy to any static hosting (GitHub Pages, Netlify, Vercel, etc.).

### Deploy to GitHub Pages

1. Go to **Settings → Pages** in your repository
2. Set source to **Deploy from a branch**
3. Select `main` branch and `/ (root)` folder
4. Your site will be live at `https://enterprise-services-group.github.io/sxdvibecoding/`

## Project Structure

```
sxdvibecoding/
├── index.html    # All 18 content sections, semantic HTML5
├── styles.css    # CSS custom properties, dark/light themes, responsive
├── script.js     # Interactivity (scroll, progress, search, theme, clipboard)
├── CHANGELOG.md  # Release notes
├── LICENSE        # MIT license
└── README.md      # This file
```

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). No polyfills needed.

## Content Source

All content is sourced from the [official VS Code Copilot documentation](https://code.visualstudio.com/docs/copilot/overview) as of April 2026. This project is not affiliated with GitHub or Microsoft.

## License

[MIT](LICENSE)
