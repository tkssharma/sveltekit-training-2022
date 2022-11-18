import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { S as SEO } from "../../chunks/SEO.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Todo App",
      description: "To do Application"
    },
    {},
    {}
  )}

<div class="${"flex justify-center align-middle items-center"}"><div class="${"p-4 m-2 border border-gray-200 dark:border-gray-500 rounded shadow bg-white dark:bg-gray-600"}"></div></div>`;
});
export {
  Page as default
};
