import type { HTMLDivAttributes, Transition } from "$lib/internal/index.js";
import type { CustomEventHandler } from "$lib/index.js";

import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
import type * as T from "./_types.js";

type Props = T.Props;

type CheckboxItemProps = T.CheckboxItemProps & HTMLDivAttributes;

type RadioGroupProps = T.RadioGroupProps & HTMLDivAttributes;

type RadioItemProps = T.RadioItemProps & HTMLDivAttributes;

type ContentProps<
	T extends Transition = Transition,
	In extends Transition = Transition,
	Out extends Transition = Transition
> = T.ContentProps<T, In, Out> & HTMLDivAttributes;

type GroupProps = T.GroupProps & HTMLDivAttributes;

type AnchorElement = HTMLAnchorAttributes & {
	href?: HTMLAnchorAttributes["href"];
};

type DivElement = HTMLDivAttributes & {
	href?: never;
};

type ItemProps = T.ItemProps & (AnchorElement | DivElement);

type CheckboxItemIndicatorProps = T.CheckboxItemIndicatorProps & HTMLDivAttributes;
type LabelProps = T.LabelProps & HTMLDivAttributes;
type SeparatorProps = T.SeparatorProps & HTMLDivAttributes;
type SubProps = T.SubProps;

type SubContentProps<
	T extends Transition = Transition,
	In extends Transition = Transition,
	Out extends Transition = Transition
> = T.SubContentProps<T, In, Out> & HTMLDivAttributes;

type SubTriggerProps = T.SubTriggerProps & HTMLDivAttributes;

type TriggerProps = T.TriggerProps & HTMLButtonAttributes;

type ArrowProps = T.ArrowProps & HTMLDivAttributes;

type ItemEvents<T extends Element = HTMLDivElement> = {
	click: CustomEventHandler<MouseEvent, T>;
	keydown: CustomEventHandler<KeyboardEvent, T>;
	focusin: CustomEventHandler<FocusEvent, T>;
	focusout: CustomEventHandler<FocusEvent, T>;
	pointerdown: CustomEventHandler<PointerEvent, T>;
	pointerleave: CustomEventHandler<PointerEvent, T>;
	pointermove: CustomEventHandler<PointerEvent, T>;
};

type CheckboxItemEvents = ItemEvents;
type RadioItemEvents = ItemEvents;
type SubTriggerEvents = Omit<ItemEvents, "pointerdown">;

type TriggerEvents<T extends Element = HTMLButtonElement> = {
	click: CustomEventHandler<MouseEvent, T>;
	keydown: CustomEventHandler<KeyboardEvent, T>;
};

type ContentEvents<T extends Element = HTMLDivElement> = {
	keydown: CustomEventHandler<KeyboardEvent, T>;
};

type SubContentEvents<T extends Element = HTMLDivElement> = {
	keydown: CustomEventHandler<KeyboardEvent, T>;
	focusout: CustomEventHandler<FocusEvent, T>;
	pointermove: CustomEventHandler<PointerEvent, T>;
};

export type {
	ArrowProps,
	CheckboxItemEvents,
	CheckboxItemIndicatorProps,
	CheckboxItemProps,
	ContentEvents,
	ContentProps,
	ArrowProps as DropdownMenuArrowProps,
	CheckboxItemEvents as DropdownMenuCheckboxItemEvents,
	CheckboxItemIndicatorProps as DropdownMenuCheckboxItemIndicatorProps,
	CheckboxItemProps as DropdownMenuCheckboxItemProps,
	ContentEvents as DropdownMenuContentEvents,
	ContentProps as DropdownMenuContentProps,
	GroupProps as DropdownMenuGroupProps,
	ItemEvents as DropdownMenuItemEvents,
	ItemProps as DropdownMenuItemProps,
	LabelProps as DropdownMenuLabelProps,
	//
	Props as DropdownMenuProps,
	RadioGroupProps as DropdownMenuRadioGroupProps,
	RadioItemEvents as DropdownMenuRadioItemEvents,
	RadioItemProps as DropdownMenuRadioItemProps,
	SeparatorProps as DropdownMenuSeparatorProps,
	SubContentEvents as DropdownMenuSubContentEvents,
	SubContentProps as DropdownMenuSubContentProps,
	SubProps as DropdownMenuSubProps,
	SubTriggerEvents as DropdownMenuSubTriggerEvents,
	SubTriggerProps as DropdownMenuSubTriggerProps,
	//,
	TriggerEvents as DropdownMenuTriggerEvents,
	TriggerProps as DropdownMenuTriggerProps,
	GroupProps,
	ItemEvents,
	ItemProps,
	LabelProps,
	Props,
	RadioGroupProps,
	RadioItemEvents,
	RadioItemProps,
	SeparatorProps,
	SubContentEvents,
	SubContentProps,
	SubProps,
	SubTriggerEvents,
	SubTriggerProps,
	//
	TriggerEvents,
	TriggerProps
};
