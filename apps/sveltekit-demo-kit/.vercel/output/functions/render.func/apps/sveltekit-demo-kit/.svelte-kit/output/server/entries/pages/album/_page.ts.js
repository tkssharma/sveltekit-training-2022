const prerender = true;
async function load({ fetch }) {
  let photos = [];
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
    photos = await res.json();
    console.log(photos);
  } catch (e) {
    console.log(e);
  }
  return {
    photos
  };
}
export {
  load,
  prerender
};
