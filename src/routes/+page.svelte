<script>
    import SvelteMarkdown from 'svelte-markdown';
    import HeaderRenderer from '$lib/HeaderRenderer.svelte';
    import LinkRenderer from '$lib/LinkRenderer.svelte';
	export let data;

</script>

<svelte:head>
    <title>web3privacy now</title>
</svelte:head>

<div class="markdown-body">
    <SvelteMarkdown source={data.markdown} renderers={{ heading: HeaderRenderer, link: LinkRenderer }} />
</div>