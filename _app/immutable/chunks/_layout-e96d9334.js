async function loadMarkdown(host, fetch) {
  let url = "https://raw.githubusercontent.com/Msiusko/web3privacy/main/README.md";
  if (host !== "web3privacy.info") {
    url = "/README.md";
  }
  const resp = await fetch(url);
  return resp.text();
}
async function load({ params, url, fetch }) {
  return {
    markdown: await loadMarkdown(url.hostname, fetch)
  };
}
const _layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load
}, Symbol.toStringTag, { value: "Module" }));
export {
  _layout as _,
  load as l
};
