<p align="center">
    <a href="https://lnfel.github.io/lamy-cms/" target="_blank">
        <img src="https://raw.githubusercontent.com/lnfel/lamy-debugbar/main/src/lib/assets/lamy-logo.png" height="100">
    </a>
    <h1 align="center">Lamy CMS</h1>
</p>

<div align="center">
  <p>
    Quicky manage content and deploy static websites within just a few clicks.
  </p>
</div>

## About

Lamy CMS is a cross-platform desktop app for managing website content powered by [SvelteKit](https://kit.svelte.dev/) and [Tauri](https://tauri.app/).

## Development environment setup

Lamy CMS is built using [Tauri](https://tauri.app/). The first step is to install Rust and system dependencies.

1. Install Rust using rustup

```s
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

For more information about rust setup see [Notes about Rust installation](https://www.rust-lang.org/tools/install)

2. Head to Tauri [Prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites) page to see other requirements based on your system.

3. Install [Node.js](https://nodejs.org/) v18+ from official website, or use nvm.

```s
# With nvm
nvm install --lts
nvm list
# Replace 18.14.2 with the version you have installed
nvm use 18.14.2
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for information on how to develop Lamy CMS locally.
