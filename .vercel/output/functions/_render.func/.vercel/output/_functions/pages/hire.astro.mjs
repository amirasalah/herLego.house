/* empty css                                */
import { a as createComponent, r as renderTemplate, d as renderComponent, e as renderHead, b as addAttribute, f as renderTransition, g as fade } from '../chunks/astro/server_C3zFspLA.mjs';
import { $ as $$BaseHead, a as $$ViewTransitions, b as $$Header, c as $$Footer } from '../chunks/ViewTransitions_BKn5jE1E.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_w-uKcef5.mjs';
export { renderers } from '../renderers.mjs';

const $$Hire = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="font-Montserrat"> ${renderComponent($$result, "Header", $$Header, {})} <main${addAttribute(renderTransition($$result, "4duh735q", fade({ duration: 1e3 })), "data-astro-transition-scope")}> <h1>If you have a cool project in mind, please reach out!</h1> <form method="POST" id="emailForm"> <label for="name">Name</label> <input type="text" id="name" name="name" required> <label for="email">Email</label> <input type="email" id="email" name="email" required> <label for="message">Message</label> <textarea id="message" name="message" required></textarea> <button type="submit">Send</button> </form> </main> ${renderComponent($$result, "Footer", $$Footer, {})}  </body></html>`;
}, "/Users/amirasalah/Desktop/herLego.house/src/pages/hire.astro", "self");

const $$file = "/Users/amirasalah/Desktop/herLego.house/src/pages/hire.astro";
const $$url = "/hire";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Hire,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
