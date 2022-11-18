import { c as create_ssr_component, f as escape, d as add_attribute } from "./index.js";
const SEO = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Svelte Kit Demo" } = $$props;
  let { description = "Demo Application" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", description, 0)} data-svelte="svelte-zck3ag"><html lang="${"en"}" data-svelte="svelte-zck3ag"></html>`, ""}`;
});
export {
  SEO as S
};
