/* empty css                                */
import { a as createComponent, r as renderTemplate, d as renderComponent, e as renderHead, b as addAttribute, f as renderTransition, g as fade } from '../chunks/astro/server_C3zFspLA.mjs';
import { $ as $$BaseHead, a as $$ViewTransitions, b as $$Header, c as $$Footer } from '../chunks/ViewTransitions_BKn5jE1E.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_w-uKcef5.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="font-Montserrat"> <section class="h-screen grid grid-layout"> ${renderComponent($$result, "Header", $$Header, {})} <main class="grid place-items-center"${addAttribute(renderTransition($$result, "p6ohglvk", fade({ duration: 1e3 })), "data-astro-transition-scope")}> <section class="lg:w-3/4 h-full grid bg-salmon"> <section class="grid grid-rows-1 h-fit row-start-2"> <section class="px-5 hidden lg:block"> <svg width="685.72" height="100.802" viewBox="0 0 685.72 100.802" xmlns="http://www.w3.org/2000/svg"> <g id="hlg-logo" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#2337ff" stroke-width="0.25mm" fill="#2337ff" style="stroke:#2337ff;stroke-width:0.25mm;fill:#2337ff"> <g id="her"><path d="M 0 99.401 L 0 1.401 L 15.4 1.401 L 15.4 41.301 L 31.92 41.301 L 31.92 1.401 L 47.32 1.401 L 47.32 99.401 L 31.92 99.401 L 31.92 55.301 L 15.4 55.301 L 15.4 99.401 L 0 99.401 Z" id="0" vector-effect="non-scaling-stroke"></path> <path d="M 58.8 99.401 L 58.8 1.401 L 100.8 1.401 L 100.8 15.401 L 74.2 15.401 L 74.2 41.301 L 95.34 41.301 L 95.34 55.301 L 74.2 55.301 L 74.2 85.401 L 100.8 85.401 L 100.8 99.401 L 58.8 99.401 Z" id="1" vector-effect="non-scaling-stroke"></path> <path d="M 109.62 99.401 L 109.62 1.401 L 132.44 1.401 A 40.692 40.692 0 0 1 138.624 1.838 Q 145.876 2.956 149.8 6.931 A 17.049 17.049 0 0 1 153.696 13.358 Q 155.26 17.797 155.26 23.941 L 155.26 29.961 Q 155.26 45.221 145.18 49.281 L 145.18 49.561 A 12.915 12.915 0 0 1 149.707 51.905 A 12.083 12.083 0 0 1 153.09 56.421 Q 154.757 60.159 155.221 65.72 A 54.96 54.96 0 0 1 155.4 70.281 L 155.4 87.501 Q 155.4 91.701 155.68 94.291 A 16.987 16.987 0 0 0 157.011 99.243 A 19.015 19.015 0 0 0 157.08 99.401 L 141.4 99.401 A 25.413 25.413 0 0 1 140.666 96.951 A 19.523 19.523 0 0 1 140.28 94.921 A 20.937 20.937 0 0 1 140.159 93.684 Q 140.007 91.578 140 87.733 A 206.306 206.306 0 0 1 140 87.361 L 140 69.441 Q 140 62.721 137.83 60.061 A 6.378 6.378 0 0 0 135.217 58.196 Q 134.141 57.761 132.783 57.564 A 17.044 17.044 0 0 0 130.34 57.401 L 125.02 57.401 L 125.02 99.401 L 109.62 99.401 Z M 125.02 43.401 L 130.62 43.401 A 14.265 14.265 0 0 0 133.251 43.174 Q 135.953 42.667 137.55 41.021 A 6.862 6.862 0 0 0 138.98 38.727 Q 139.796 36.659 139.855 33.536 A 26.12 26.12 0 0 0 139.86 33.041 L 139.86 25.481 A 23.741 23.741 0 0 0 139.719 22.791 Q 139.4 20.004 138.36 18.336 A 5.964 5.964 0 0 0 137.97 17.781 A 5.934 5.934 0 0 0 134.961 15.794 Q 133.952 15.487 132.724 15.42 A 12.903 12.903 0 0 0 132.02 15.401 L 125.02 15.401 L 125.02 43.401 Z" id="2" vector-effect="non-scaling-stroke"></path> </g> <g id="lego"> <path d="M 188.44 99.401 L 188.44 1.401 L 203.84 1.401 L 203.84 85.401 L 229.18 85.401 L 229.18 99.401 L 188.44 99.401 Z" id="4" vector-effect="non-scaling-stroke"></path> <path d="M 236.6 99.401 L 236.6 1.401 L 278.6 1.401 L 278.6 15.401 L 252 15.401 L 252 41.301 L 273.14 41.301 L 273.14 55.301 L 252 55.301 L 252 85.401 L 278.6 85.401 L 278.6 99.401 L 236.6 99.401 Z" id="5" vector-effect="non-scaling-stroke"></path> <path d="M 286.3 76.161 L 286.3 24.641 Q 286.3 12.741 292.18 6.371 Q 297.737 0.351 308.046 0.02 A 37.879 37.879 0 0 1 309.26 0.001 A 31.402 31.402 0 0 1 316.037 0.687 Q 322.389 2.091 326.34 6.371 A 20.627 20.627 0 0 1 330.84 14.41 Q 331.789 17.481 332.085 21.165 A 43.363 43.363 0 0 1 332.22 24.641 L 332.22 33.041 L 317.66 33.041 L 317.66 23.661 A 17.081 17.081 0 0 0 317.318 20.075 Q 316.008 14.001 309.68 14.001 A 9.335 9.335 0 0 0 306.236 14.586 Q 301.7 16.378 301.7 23.661 L 301.7 77.281 A 16.598 16.598 0 0 0 302.042 80.815 Q 303.352 86.801 309.68 86.801 Q 317.093 86.801 317.62 78.586 A 20.407 20.407 0 0 0 317.66 77.281 L 317.66 58.101 L 309.96 58.101 L 309.96 44.101 L 332.22 44.101 L 332.22 76.161 Q 332.22 88.061 326.34 94.431 Q 320.783 100.451 310.474 100.782 A 37.879 37.879 0 0 1 309.26 100.801 A 31.402 31.402 0 0 1 302.483 100.115 Q 296.131 98.711 292.18 94.431 A 20.627 20.627 0 0 1 287.68 86.392 Q 286.731 83.321 286.435 79.637 A 43.363 43.363 0 0 1 286.3 76.161 Z" id="6" vector-effect="non-scaling-stroke"></path> <path d="M 341.04 76.161 L 341.04 24.641 Q 341.04 15.844 344.409 10.024 A 19.614 19.614 0 0 1 347.06 6.441 A 19.397 19.397 0 0 1 356.372 0.984 Q 359.99 0.001 364.42 0.001 A 31.94 31.94 0 0 1 371.289 0.694 Q 377.735 2.114 381.78 6.441 A 21.048 21.048 0 0 1 386.564 15.076 Q 387.491 18.253 387.723 22.045 A 42.563 42.563 0 0 1 387.8 24.641 L 387.8 76.161 Q 387.8 84.958 384.431 90.778 A 19.614 19.614 0 0 1 381.78 94.361 A 19.397 19.397 0 0 1 372.468 99.818 Q 368.85 100.801 364.42 100.801 A 31.94 31.94 0 0 1 357.551 100.108 Q 351.105 98.688 347.06 94.361 A 21.048 21.048 0 0 1 342.276 85.726 Q 341.349 82.549 341.117 78.757 A 42.563 42.563 0 0 1 341.04 76.161 Z M 372.4 77.141 L 372.4 23.661 A 17.081 17.081 0 0 0 372.058 20.075 Q 370.748 14.001 364.42 14.001 A 9.335 9.335 0 0 0 360.976 14.586 Q 356.44 16.378 356.44 23.661 L 356.44 77.141 A 17.081 17.081 0 0 0 356.782 80.727 Q 358.092 86.801 364.42 86.801 A 9.335 9.335 0 0 0 367.864 86.216 Q 372.4 84.424 372.4 77.141 Z" id="7" vector-effect="non-scaling-stroke"></path> </g> <g id="house"> <path d="M 420.56 99.401 L 420.56 1.401 L 435.96 1.401 L 435.96 41.301 L 452.48 41.301 L 452.48 1.401 L 467.88 1.401 L 467.88 99.401 L 452.48 99.401 L 452.48 55.301 L 435.96 55.301 L 435.96 99.401 L 420.56 99.401 Z" id="9" vector-effect="non-scaling-stroke"></path> <path d="M 478.24 76.161 L 478.24 24.641 Q 478.24 15.844 481.609 10.024 A 19.614 19.614 0 0 1 484.26 6.441 A 19.397 19.397 0 0 1 493.572 0.984 Q 497.19 0.001 501.62 0.001 A 31.94 31.94 0 0 1 508.489 0.694 Q 514.935 2.114 518.98 6.441 A 21.048 21.048 0 0 1 523.764 15.076 Q 524.691 18.253 524.923 22.045 A 42.563 42.563 0 0 1 525 24.641 L 525 76.161 Q 525 84.958 521.631 90.778 A 19.614 19.614 0 0 1 518.98 94.361 A 19.397 19.397 0 0 1 509.668 99.818 Q 506.05 100.801 501.62 100.801 A 31.94 31.94 0 0 1 494.751 100.108 Q 488.305 98.688 484.26 94.361 A 21.048 21.048 0 0 1 479.476 85.726 Q 478.549 82.549 478.317 78.757 A 42.563 42.563 0 0 1 478.24 76.161 Z M 509.6 77.141 L 509.6 23.661 A 17.081 17.081 0 0 0 509.258 20.075 Q 507.948 14.001 501.62 14.001 A 9.335 9.335 0 0 0 498.176 14.586 Q 493.64 16.378 493.64 23.661 L 493.64 77.141 A 17.081 17.081 0 0 0 493.982 80.727 Q 495.292 86.801 501.62 86.801 A 9.335 9.335 0 0 0 505.064 86.216 Q 509.6 84.424 509.6 77.141 Z" id="10" vector-effect="non-scaling-stroke"></path> <path d="M 534.8 76.161 L 534.8 1.401 L 550.2 1.401 L 550.2 77.281 Q 550.2 82.038 552.008 84.3 A 5.518 5.518 0 0 0 552.23 84.561 A 6.576 6.576 0 0 0 555.648 86.536 Q 556.724 86.797 557.999 86.801 A 12.753 12.753 0 0 0 558.04 86.801 A 10.203 10.203 0 0 0 560.382 86.548 Q 562.2 86.12 563.45 84.965 A 6.4 6.4 0 0 0 563.85 84.561 Q 565.8 82.409 565.877 77.672 A 24.221 24.221 0 0 0 565.88 77.281 L 565.88 1.401 L 580.72 1.401 L 580.72 76.161 Q 580.72 88.061 574.84 94.431 Q 569.283 100.451 558.974 100.782 A 37.879 37.879 0 0 1 557.76 100.801 A 31.402 31.402 0 0 1 550.983 100.115 Q 544.631 98.711 540.68 94.431 A 20.627 20.627 0 0 1 536.18 86.392 Q 535.231 83.321 534.935 79.637 A 43.363 43.363 0 0 1 534.8 76.161 Z" id="11" vector-effect="non-scaling-stroke"></path> <path d="M 588.98 76.161 L 588.98 70.561 L 603.54 70.561 L 603.54 77.281 A 16.598 16.598 0 0 0 603.882 80.815 Q 605.192 86.801 611.52 86.801 A 10.589 10.589 0 0 0 613.883 86.554 Q 615.479 86.188 616.634 85.283 A 6.23 6.23 0 0 0 617.47 84.491 A 6.825 6.825 0 0 0 618.707 82.355 Q 619.446 80.383 619.496 77.439 A 25.509 25.509 0 0 0 619.5 77.001 A 23.014 23.014 0 0 0 618.756 71.039 A 19.111 19.111 0 0 0 616.7 66.151 Q 614.185 61.938 607.828 56.199 A 109.736 109.736 0 0 0 606.34 54.881 Q 596.82 46.481 593.04 39.691 A 30.135 30.135 0 0 1 589.372 27.245 A 36.679 36.679 0 0 1 589.26 24.361 A 36.931 36.931 0 0 1 589.893 17.301 Q 590.698 13.17 592.527 9.955 A 19.407 19.407 0 0 1 595.14 6.371 Q 600.697 0.351 611.006 0.02 A 37.879 37.879 0 0 1 612.22 0.001 Q 620.696 0.001 626.006 3.742 A 17.161 17.161 0 0 1 628.95 6.371 Q 634.62 12.741 634.62 24.641 L 634.62 28.701 L 620.06 28.701 L 620.06 23.661 A 20.533 20.533 0 0 0 619.905 21.042 Q 619.537 18.193 618.298 16.558 A 5.756 5.756 0 0 0 618.1 16.311 A 6.309 6.309 0 0 0 614.651 14.251 A 9.851 9.851 0 0 0 612.36 14.001 Q 605.309 14.001 604.715 21.867 A 20.122 20.122 0 0 0 604.66 23.381 Q 604.66 28.701 607.53 33.321 Q 610.4 37.941 617.96 44.521 Q 627.396 52.726 631.088 59.462 A 26.741 26.741 0 0 1 631.26 59.781 A 30.693 30.693 0 0 1 634.388 69.286 A 40.85 40.85 0 0 1 634.9 75.881 A 39.084 39.084 0 0 1 634.29 83.02 Q 633.541 87.046 631.873 90.207 A 19.476 19.476 0 0 1 628.95 94.361 A 19.124 19.124 0 0 1 619.715 99.813 Q 616.609 100.662 612.893 100.781 A 38.404 38.404 0 0 1 611.66 100.801 Q 600.46 100.801 594.72 94.431 Q 589.877 89.056 589.12 79.745 A 44.265 44.265 0 0 1 588.98 76.161 Z" id="12" vector-effect="non-scaling-stroke"></path> <path d="M 643.72 99.401 L 643.72 1.401 L 685.72 1.401 L 685.72 15.401 L 659.12 15.401 L 659.12 41.301 L 680.26 41.301 L 680.26 55.301 L 659.12 55.301 L 659.12 85.401 L 685.72 85.401 L 685.72 99.401 L 643.72 99.401 Z" id="13" vector-effect="non-scaling-stroke"></path> </g> </g> </svg> </section> <section class="px-5 text-5xl leading-none block font-extrabold text-accent lg:hidden">
Her <br> lego<br> house
</section> <section class="px-5 py-10"> <h2 class="text-2xl">Creative development studio</h2> </section> </section> </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </section> </body></html>`;
}, "/Users/amirasalah/Desktop/herLego.house/src/pages/index.astro", "self");

const $$file = "/Users/amirasalah/Desktop/herLego.house/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
