
async function loadMarkdown () {
    const resp = await fetch("https://raw.githubusercontent.com/Msiusko/web3privacy/main/README.md")
    return resp.text()
}

export async function load({ params, url }) {
	return {
		markdown: await loadMarkdown()
	};
}