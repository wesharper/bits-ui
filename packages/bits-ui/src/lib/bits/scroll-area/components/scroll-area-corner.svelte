<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import type { CornerProps } from "../index.js";
	import { getCtx } from "../ctx.js";

	type $$Props = CornerProps;

	export let asChild: $$Props["asChild"] = false;
	export let el: $$Props["el"] = undefined;

	const {
		elements: { corner },
		getAttrs,
	} = getCtx();

	const bitsAttrs = getAttrs("corner");

	$: attrs = {
		...$$restProps,
		...bitsAttrs,
	};

	$: builder = $corner;

	$: Object.assign(builder, attrs);
</script>

{#if asChild}
	<slot {builder} />
{:else}
	<div use:melt={builder} bind:this={el}>
		<slot {builder} />
	</div>
{/if}
