import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderComponent } from './astro/server_C3zFspLA.mjs';
/* empty css                        */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://herlego.house/");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', `><script type="text/javascript">
	(window.heapReadyCb = window.heapReadyCb || []),
		(window.heap = window.heap || []),
		(heap.load = function (e, t) {
			(window.heap.envId = e),
				(window.heap.clientConfig = t = t || {}),
				(window.heap.clientConfig.shouldFetchServerConfig = !1);
			var a = document.createElement('script');
			(a.type = 'text/javascript'),
				(a.async = !0),
				(a.src = 'https://cdn.us.heap-api.com/config/' + e + '/heap_config.js');
			var r = document.getElementsByTagName('script')[0];
			r.parentNode.insertBefore(a, r);
			var n = [
					'init',
					'startTracking',
					'stopTracking',
					'track',
					'resetIdentity',
					'identify',
					'getSessionId',
					'getUserId',
					'getIdentity',
					'addUserProperties',
					'addEventProperties',
					'removeEventProperty',
					'clearEventProperties',
					'addAccountProperties',
					'addAdapter',
					'addTransformer',
					'addTransformerFn',
					'onReady',
					'addPageviewProperties',
					'removePageviewProperty',
					'clearPageviewProperties',
					'trackPageview',
				],
				i = function (e) {
					return function () {
						var t = Array.prototype.slice.call(arguments, 0);
						window.heapReadyCb.push({
							name: e,
							fn: function () {
								heap[e] && heap[e].apply(heap, t);
							},
						});
					};
				};
			for (var p = 0; p < n.length; p++) heap[n[p]] = i(n[p]);
		});
	heap.load('4172365793');
<\/script>`])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"));
}, "/Users/amirasalah/Desktop/herLego.house/src/components/BaseHead.astro", void 0);

const $$CityWeather = createComponent(async ($$result, $$props, $$slots) => {
  const baseURL = "http://api.weatherapi.com/v1/current.json?key=f231b963d90d4620be781716240508";
  const myCities = {
    cairo: "Cairo",
    berlin: "Berlin"
  };
  const cairoResponse = await fetch(`${baseURL}&q=${myCities.cairo}&aqi=no`);
  const berlinResponse = await fetch(`${baseURL}&q=${myCities.berlin}&aqi=no`);
  const cairoData = await cairoResponse.json();
  const berlinData = await berlinResponse.json();
  return renderTemplate`${maybeRenderHead()}<section class="grid grid-cols-2 gap-2"> <p class="flex items-center"> ${myCities.cairo}: ${cairoData?.current.temp_c} °C
<img width="30px" height="30px"${addAttribute(cairoData?.current.condition.icon, "src")}${addAttribute(cairoData?.current.condition.text, "alt")}> </p> <p class="flex items-center"> ${myCities.berlin}: ${berlinData?.current.temp_c} °C
<img width="30px" height="30px"${addAttribute(berlinData?.current.condition.icon, "src")}${addAttribute(berlinData?.current.condition.text, "alt")}> </p> </section>`;
}, "/Users/amirasalah/Desktop/herLego.house/src/components/CityWeather.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="py-3 text-sm w-screen border-t-black border-2 lg:grid grid-cols-2"> <nav class="grid place-items-center"> <ul class="gap-5 flex"> <li> <a target="_blank" href="https://www.linkedin.com/in/amerasalah/">Linkedin</a> </li> <li> <a target="_blank" href="https://github.com/amirasalah12">Github</a> </li> <li> <a target="_blank" href="mailto:amira.salah.rahim@gmail.com">Email</a> </li> </ul> <p>© ${(/* @__PURE__ */ new Date()).getFullYear()}</p> </nav> <section class="grid place-items-center"> <p>Designed and developed by Amira Salah</p> ${renderComponent($$result, "CityWeather", $$CityWeather, {})} </section> </footer>`;
}, "/Users/amirasalah/Desktop/herLego.house/src/components/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="py-3 border-b-black border-b-2 grid lg:grid-cols-2 lg:justify-items-start justify-items-center h-fit"> <a href="/"> <img src="/logo.svg" alt="logo" class="flex lg:items-start items-center" width="150px" height="50px"> </a> <nav class="px-3 grid lg:justify-items-end lg:place-items-center justify-items-center w-full"> <ul class="gap-5 text-s grid grid-cols-3"> <!-- <li>Writings</li> --> <!-- <li>Projects</li> --> <li><a href="/hire"> Hire me</a></li> </ul> </nav> </header>`;
}, "/Users/amirasalah/Desktop/herLego.house/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://herlego.house/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/amirasalah/Desktop/herLego.house/node_modules/.pnpm/astro@4.13.3_@types+node@20.14.15_typescript@5.5.4/node_modules/astro/components/ViewTransitions.astro", void 0);

export { $$BaseHead as $, $$ViewTransitions as a, $$Header as b, $$Footer as c };
