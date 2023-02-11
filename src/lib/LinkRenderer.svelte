<script>
    export let href = ''
    export let title = undefined

    let className = href.match(/^#/) ? 'internal' : ''
    let action = className === 'internal' ? (event) => {
        event.preventDefault()
        const link = event.currentTarget
		const anchorId = new URL(link.href).hash.replace('#', '').toLocaleLowerCase()
		const anchor = document.getElementById(anchorId)
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		})
    } : null
</script>
  
<a {href} class={className} {title} on:click={action}><slot></slot></a>