<script lang="ts">
	import { hoverReverso, magnetic, ripple } from '@butter/svelte';

	const handleMagnetize = (e: CustomEvent<boolean>) => {
		console.log(e.detail);
	};
</script>

<div>
	<button use:ripple>this is button</button>

	<br />

	<br />
	<div use:hoverReverso>Hover me</div>
</div>

<br />
<br />
<div>
	<div style="width: 100px;" use:magnetic on:magnetized={handleMagnetize}>this is mag</div>
</div>
