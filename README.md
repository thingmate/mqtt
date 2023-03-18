[![npm (scoped)](https://img.shields.io/npm/v/@thingmate/mqtt.svg)](https://www.npmjs.com/package/@thingmate/mqtt)
![npm](https://img.shields.io/npm/dm/@thingmate/mqtt.svg)
![NPM](https://img.shields.io/npm/l/@thingmate/mqtt.svg)
![npm type definitions](https://img.shields.io/npm/types/@thingmate/mqtt.svg)

## @thingmate/mqtt


## 📦 Installation

```bash
yarn add @thingmate/mqtt
# or
npm install @thingmate/mqtt --save
```

This library supports:

- **common-js** (require): transpiled as es2015, with .cjs extension, useful for old nodejs versions
- **module** (esm import): transpiled as esnext, with .mjs extension (requires node resolution for external packages)

In a **node** environment the library works immediately (no extra tooling required),
however, in a **browser** environment, you'll probably need to resolve external imports thought a bundler like
[snowpack](https://www.snowpack.dev/),
[rollup](https://rollupjs.org/guide/en/),
[webpack](https://webpack.js.org/),
etc...
or directly using [skypack](https://www.skypack.dev/):
[https://cdn.skypack.dev/@thingmate/mqtt](https://cdn.skypack.dev/@thingmate/mqtt)
