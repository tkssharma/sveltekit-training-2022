import { c as create_ssr_component, b as subscribe, e as each, d as add_attribute, f as escape, v as validate_component } from "../../chunks/index.js";
import { e as env, w as writable } from "../../chunks/env-public.js";
import "@firebase/app";
import { GoogleAuthProvider } from "@firebase/auth";
import { p as page } from "../../chunks/stores.js";
const app = "";
({
  apiKey: env.PUBLIC_FIREBASE_API_KEY,
  authDomain: env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.PUBLIC_FIREBASE_APP_ID
});
new GoogleAuthProvider();
const SideBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const routes = [
    {
      href: "/album",
      name: "Photos",
      tooltip: "Photos App"
    }
  ];
  $$unsubscribe_page();
  return `
<nav class="${"bg-gray-900 w-2/12 justify-between flex flex-col h-full"}"><div class="${"mt-5 mb-5"}"><div class="${"mt-10"}"><ul class="${"flex flex-col flex-wrap align-middle items-left text-sm font-semibold justify-around mx-2"}">${each(routes, (route) => {
    return `<li class="${"mb-4 text-center relative cursor-pointer"}"><a data-sveltekit-prefetch${add_attribute("href", route.href, 0)}><div${add_attribute(
      "class",
      `text-xs md:text-sm px-0 sm:px-4 py-1 rounded ${route.href === $page.url.pathname ? "bg-green-700 hover:bg-green-800 text-white" : "bg-gray-800 hover:text-green-500 text-gray-400"}`,
      0
    )}>${escape(route.name)}
							</div></a>
					</li>`;
  })}</ul></div></div></nav>`;
});
const authStore = writable({
  isLoggedIn: false,
  firebaseControlled: false
});
const authStore$1 = {
  subscribe: authStore.subscribe,
  set: authStore.set
};
const darkMode = writable(false);
const modeStore = {
  subscribe: darkMode.subscribe,
  set: darkMode.set,
  update: darkMode.update
};
const SvelteLogoSVG = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg version="${"1.1"}" id="${"Layer_1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" x="${"0px"}" y="${"0px"}" viewBox="${"0 0 98.1 118"}" style="${"enable-background:new 0 0 98.1 118;"}" xml:space="${"preserve"}" height="${"30px"}" width="${"30px"}"><style lang="${"css"}">.st0{fill:#ff3e00}.st1{fill:#fff}</style><path class="${"st0"}" d="${"M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3\n	c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1\n	c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6"}"></path><path class="${"st1"}" d="${"M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1\n	c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72\n	c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7\n	c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5\n	c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1\n	c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1\n	c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5\n	c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9"}"></path></svg>`;
});
const LightModeSVG = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
const DarkModeSVG = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}"></path></svg>`;
});
const SignInSVG = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" class="${"w-6 h-6"}"><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M10 11V8l5 4-5 4v-3H1v-2h9zm-7.542 4h2.124A8.003 8.003 0 0 0 20 12 8 8 0 0 0 4.582 9H2.458C3.732 4.943 7.522 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7z"}" fill="${"#000"}"></path></svg>`;
});
const MobileMenuBtnSVG = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg class="${"block h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modeStore, $$unsubscribe_modeStore;
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_modeStore = subscribe(modeStore, (value) => $modeStore = value);
  $$unsubscribe_authStore = subscribe(authStore$1, (value) => $authStore = value);
  $$unsubscribe_modeStore();
  $$unsubscribe_authStore();
  return `<div class="${"flex items-center justify-between flex-wrap bg-gray-50 dark:bg-gray-900 dark:text-white p-2 align-middle"}"><div class="${"flex items-center flex-no-shrink text-white flex-1 justify-start mr-6"}"><a data-sveltekit-prefetch href="${"/"}" class="${"flex flex-1"}">${validate_component(SvelteLogoSVG, "SvelteLogoSvg").$$render($$result, {}, {}, {})}
			<span class="${"font-semibold tracking-tight text-gray-700 dark:text-gray-100 p-2"}">SvelteKit Experiments</span></a>
		<div class="${"text-gray-700 dark:text-gray-100 p-2 mx-1"}"></div>
		<div class="${"text-gray-700 dark:text-gray-100 mt-2 mx-2"}"><button type="${"button"}"${add_attribute("aria-label", `${modeStore ? "Turn on Light Mode" : "Turn on Dark Mode"}`, 0)}>${$modeStore === true ? `${validate_component(LightModeSVG, "LightModeSvg").$$render($$result, {}, {}, {})}` : `${validate_component(DarkModeSVG, "DarkModeSvg").$$render($$result, {}, {}, {})}`}</button></div>
		
		<div class="${"ml-3 relative hidden md:block"}">${$authStore.isLoggedIn ? `<div class="${"flex justify-end align-middle items-center"}"><p class="${"text-xs text-gray-700 dark:text-gray-100 mx-1"}">${escape($authStore.user.displayName)}</p>
					<button type="${"button"}" class="${"max-w-xs bg-gray-800 dark:bg-gray-100 border-0 rounded-full flex items-center text-sm focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white shadow"}" id="${"user-menu-button"}" aria-expanded="${"false"}" aria-haspopup="${"true"}"><span class="${"sr-only"}">Open user menu</span>

						<img class="${"h-8 w-8 rounded-full"}"${add_attribute("src", `https://ui-avatars.com/api/?font-size=0.33&background=ff3e00&color=fff&name=${$authStore.user.displayName}`, 0)}${add_attribute("alt", $authStore.user.displayName, 0)}></button></div>` : `<div><button type="${"button"}" class="${"max-w-xs bg-green-200 border rounded-full flex items-center text-sm focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white shadow"}" id="${"user-sign-in-sm"}" aria-expanded="${"false"}" aria-haspopup="${"true"}" aria-label="${"Sign In"}">${validate_component(SignInSVG, "SignInSvg").$$render($$result, {}, {}, {})}</button></div>`}
			${``}</div>

		${$authStore.isLoggedIn ? `<div class="${"-mr-2 flex md:hidden"}">
				<button type="${"button"}" class="${"bg-gray-800 relative inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"}" aria-controls="${"mobile-menu"}" aria-expanded="${"false"}"><span class="${"sr-only"}">Open main menu</span>
					${validate_component(MobileMenuBtnSVG, "MobileMenuBtnSvg").$$render($$result, {}, {}, {})}</button></div>` : `<div class="${"-mr-2 flex md:hidden"}"><button type="${"button"}" class="${"max-w-xs bg-green-200 border rounded-full flex items-center text-sm focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white shadow"}" id="${"user-menu-button"}" aria-expanded="${"false"}" aria-haspopup="${"true"}">${validate_component(SignInSVG, "SignInSvg").$$render($$result, {}, {}, {})}</button></div>`}</div></div>

${``}`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"p-2 bg-white dark:bg-gray-900 flex text-gray-600 dark:text-gray-100 text-xs align-middle items-center justify-between shadow-sm border-t border-gray-100 dark:border-gray-700"}"><div>tsukhu@github</div>
	<div><a href="${"https://github.com/tsukhu/sveltekit-demo"}" target="${"_blank"}" rel="${"noreferrer"}" aria-label="${"Github Repo"}" class="${"hover:text-green-700 dark:hover:text-green-200"}">Github Repo</a></div>
	<div>Powered by SvelteKit</div></footer>`;
});
const Shell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col h-screen justify-between"}"><div class="${"flex flex-row flex-1"}">${validate_component(SideBar, "SideBar").$$render($$result, {}, {}, {})}
		<div class="${"flex-1 flex flex-col"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
			<div class="${"flex-1 py-6 sm:px-6 lg:px-8 bg-gray-200 dark:bg-gray-600"}"><div class="${"px-2 py-2 sm:px-0 flex flex-col h-full"}"><div class="${"border border-gray-100 dark:border-gray-500 bg-white dark:bg-gray-500 rounded-lg flex-1 p-2 shadow"}">${slots.default ? slots.default({}) : ``}</div></div></div>
			${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Shell, "Shell").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
