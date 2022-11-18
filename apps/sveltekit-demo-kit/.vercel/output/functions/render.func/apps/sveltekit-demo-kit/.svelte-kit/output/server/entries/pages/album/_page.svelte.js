import { c as create_ssr_component, e as each, d as add_attribute, f as escape, v as validate_component } from "../../../chunks/index.js";
import { S as SEO } from "../../../chunks/SEO.js";
const PhotoAlbum = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { photos = [] } = $$props;
  if ($$props.photos === void 0 && $$bindings.photos && photos !== void 0)
    $$bindings.photos(photos);
  return `<h1 class="${"font-bold dark:text-gray-200"}">Photo album</h1>

<div class="${"w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2"}">${photos.length ? each(photos, (photo) => {
    return `<figure class="${"w-full m-0"}"><img${add_attribute("src", photo.thumbnailUrl, 0)}${add_attribute("alt", photo.title, 0)} class="${"w-full m-0"}">
			<figcaption class="${"text-xs sm:text-sm dark:text-gray-300"}">${escape(photo.title)}</figcaption>
		</figure>`;
  }) : `<p>loading...</p>`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let photos;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ photos } = data);
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Photo Album",
      description: "Photo Album App"
    },
    {},
    {}
  )}

<div class="${"flex justify-center align-middle items-center"}"><div class="${"p-4 m-2 border border-gray-200 dark:border-gray-500 rounded shadow bg-white dark:bg-gray-600"}">${validate_component(PhotoAlbum, "PhotoAlbum").$$render($$result, { photos }, {}, {})}</div></div>`;
});
export {
  Page as default
};
