<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { getCtx } from "../ctx.js";
	import type { TriggerEvents, TriggerProps } from "../index.js";
	import { createDispatcher } from "$lib/internal/events.js";

	type $$Props = TriggerProps;
	type $$Events = TriggerEvents;

	export let asChild: $$Props["asChild"] = false;
	export let el: $$Props["el"] = undefined;

	const {
		elements: { trigger },
		getAttrs,
	} = getCtx();

	const dispatch = createDispatcher();
	const attrs = getAttrs("trigger");

	$: builder = $trigger;
	$: Object.assign(builder, attrs);
</script>

{#if asChild}
	<slot {builder} />
{:else}
	<button bind:this={el} use:melt={builder} type="button" {...$$restProps} on:m-click={dispatch}>
		<slot {builder} />
	</button>
{/if}
