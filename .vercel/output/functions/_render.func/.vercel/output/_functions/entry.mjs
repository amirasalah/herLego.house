import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DAxaXTug.mjs';
import { manifest } from './manifest_zDvDvHox.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/studio/_---params_.astro.mjs');
const _page2 = () => import('./pages/hire.astro.mjs');
const _page3 = () => import('./pages/post/_slug_.astro.mjs');
const _page4 = () => import('./pages/posts.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.14.2_@types+node@20.14.15_rollup@4.20.0_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/@sanity+astro@3.1.4_@sanity+client@6.21.2_@sanity+visual-editing@2.1.9_@sanity+client@6.21.2__mr6uv2ls5nyas47a62jmc552se/node_modules/@sanity/astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/hire.astro", _page2],
    ["src/pages/post/[slug].astro", _page3],
    ["src/pages/posts.astro", _page4],
    ["src/pages/index.astro", _page5]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "81219755-f7f7-4925-b483-f79f5f4361b8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
