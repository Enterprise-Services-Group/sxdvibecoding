# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.0.0] - 2026-04-09

### Added

- **15 learning sections** covering the full GitHub Copilot feature set in VS Code:
  - Getting Started & Setup (sign in, `/init` command)
  - Inline Suggestions (ghost text, Tab/partial accept, cycling alternatives)
  - Next Edit Suggestions (NES gutter navigation, typo fixes, refactoring propagation)
  - Chat View (multi-turn conversations, session types, context mechanisms, checkpoints)
  - Inline Chat & Quick Chat (editor, terminal, lightweight popup)
  - Agents (Agent/Plan/Ask, local/CLI/cloud/third-party, permission levels, hand-off)
  - Smart Actions (commit messages, merge conflicts, docs, tests, fix errors, rename, semantic search)
  - Slash Commands (24 commands including `/init`, `/plan`, `/create-agent`, `/yolo`)
  - Chat Participants (`@github`, `@terminal`, `@vscode`)
  - Context & Tools (all `#`-variables and built-in tool sets)
  - Customization (instructions, custom agents, MCP servers, prompt files, skills, hooks)
  - Best Practices & Prompt Engineering (tool selection, prompt crafting, plan→implement→review)
  - Keyboard Shortcuts Cheat Sheet (interactive, filterable, macOS/Win toggle)
  - Resources & Next Steps (12 links to official docs and community)

- **Interactive features:**
  - Progress tracking with per-section checkboxes (persisted in localStorage)
  - Dual progress bars (scroll position + learning completion)
  - Searchable/filterable keyboard shortcuts table with macOS/Windows toggle
  - Dark/light theme toggle with localStorage persistence
  - Collapsible/expandable sub-sections for dense content
  - Copy-to-clipboard buttons on all code blocks
  - Scroll-triggered reveal animations (IntersectionObserver)
  - Active navigation highlighting on scroll
  - Mobile-responsive hamburger menu
  - "Try It" exercise callouts in every section

- **Design:**
  - Dark theme (default) inspired by VS Code / Catppuccin Mocha
  - Light theme based on Catppuccin Latte
  - Fully responsive layout (320px–1920px+)
  - CSS custom properties for easy theming
  - Inter + JetBrains Mono typography

- **Zero dependencies** — pure HTML, CSS, and vanilla JavaScript
