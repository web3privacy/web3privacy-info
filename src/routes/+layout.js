
//import markdownStaticUrl from '$static/README.md';

async function loadMarkdown (host, fetch) {
    let url = "https://raw.githubusercontent.com/Msiusko/web3privacy/main/README.md"
    if (host !== 'web3privacy.info') {
        url = "/README.md"
    }
    const resp = await fetch(url)
    return resp.text()
}

export async function load({ params, url, fetch }) {
	return {
		markdown: await loadMarkdown(url.hostname, fetch)
	};
}