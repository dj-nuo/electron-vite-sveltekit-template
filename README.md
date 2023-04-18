# electron-vite-sveltekit-template

A minimal Electron application with TypeScript + SvelteKit + Bytenode

# How it works?
Template utilizes [electron-vite](https://github.com/alex8088/electron-vite) for its ability to bundle & compile node.js (main & renderer files) to V8 Bytecode.
Template doesn't use `renderer` part of [electron-vite](https://github.com/alex8088/electron-vite), but rather embeds [SvelteKit](https://kit.svelte.dev/) into the project as sub-project in `src/renderer` directory with it's own dependencies. SvelteKit is configured with [adapter-static](https://kit.svelte.dev/docs/adapter-static) to build SPA (Single Page Application) with static HTML/CSS/JS.
Esentially it gives the best of both worlds:
- Electron (backend) from [electron-vite](https://github.com/alex8088/electron-vite)
- Anything you can think of with SvelteKit (within the limits of [adapter-static](https://kit.svelte.dev/docs/adapter-static))

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install # installs dependencies of `electron-vite`
$ cd src/renderer && npm install # installs dependencies of SvelteKit
$ cd ../../ # gets back to the source directory
```

## Development

### Quick start:
```bash
$ npm run dev # command starts 2 subcommands in parallel using `concurrently` npm package
```
### If you need new dependencies for SvelteKit:
```bash
$ cd src/renderer # navigate to SvelteKit directory & do things from there
```
(!!!) Don't forget to go back to source directory with `cd ../../` after you installed necessary dependencies.

## Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
