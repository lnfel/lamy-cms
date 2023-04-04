# Lamy CMS Contributing Guide

## Preparing

Make sure you have done the development environment setup. If not please read the README.md at the root of this repo before continuing with forking the project.

1. [Fork](https://github.com/lnfel/lamy-cms/fork) the repo.
2. Clone the fork.

```sh
git clone https://github.com/your-username/lamy-cms.git
cd lamy-cms
```

3. Do not make the changes on the main branch, please create another branch based on main. Then make the pull request using the branch you have created with the changes on it.

```sh
git checkout -b your-branch-name main
```

It is recommended to name your feature branch based on what changes you are going to make. Otherwise, make sure to have a summary of what is changed when doing a pull request.

4. This project uses pnpm by default but you are free to use npm for managing dependencies.

```sh
# Install dependencies using pnpm
pnpm install
# or npm
# --legacy-peer-deps is required since packages from twind has typescript below version 5 as dependency
npm install --legacy-peer-deps
```

You can run the dev server by using either of the following:

```sh
# npm
npm run tauri dev
# pnpm
pnpm tauri dev
```

The first time you run the above command, the Rust package manager takes several minutes to download and build all the required packages. Since they are cached, subsequent builds are much faster, as only your code needs rebuilding.
