import { SvelteComponentDev, init, safe_not_equal, dispatch_dev, validate_slots, createEventDispatcher, afterUpdate, element, create_component, space, attr_dev, add_location, insert_dev, append_dev, mount_component, set_input_value, listen_dev, prop_dev, to_number, transition_in, transition_out, detach_dev, destroy_component, run_all, binding_callbacks, text, set_data_dev } from './svelte/svelte-internal.js';
import './Button-153ea7e7.js';
import { B as BlockTitle } from './BlockTitle-10d6508b.js';
import './index-30423ace.js';

const Range_svelte_svelte_type_style_lang = '';

/* Users/peterallen/Projects/gradio/js/slider/shared/Range.svelte generated by Svelte v4.0.0 */
const file = "Users/peterallen/Projects/gradio/js/slider/shared/Range.svelte";

// (55:3) <BlockTitle {show_label} {info}>
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text(/*label*/ ctx[5]);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*label*/ 32) set_data_dev(t, /*label*/ ctx[5]);
		},
		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(t);
			}
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(55:3) <BlockTitle {show_label} {info}>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div1;
	let div0;
	let label_1;
	let blocktitle;
	let t0;
	let input0;
	let t1;
	let input1;
	let current;
	let mounted;
	let dispose;

	blocktitle = new BlockTitle({
			props: {
				show_label: /*show_label*/ ctx[7],
				info: /*info*/ ctx[6],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			label_1 = element("label");
			create_component(blocktitle.$$.fragment);
			t0 = space();
			input0 = element("input");
			t1 = space();
			input1 = element("input");
			attr_dev(label_1, "for", /*id*/ ctx[10]);
			add_location(label_1, file, 63, 2, 1352);
			attr_dev(input0, "data-testid", "number-input");
			attr_dev(input0, "type", "number");
			attr_dev(input0, "min", /*minimum*/ ctx[1]);
			attr_dev(input0, "max", /*maximum*/ ctx[2]);
			attr_dev(input0, "step", /*step*/ ctx[3]);
			input0.disabled = /*disabled*/ ctx[4];
			attr_dev(input0, "class", "s-iYuurBJryeUA");
			add_location(input0, file, 67, 2, 1439);
			attr_dev(div0, "class", "head s-iYuurBJryeUA");
			add_location(div0, file, 62, 1, 1331);
			attr_dev(div1, "class", "wrap s-iYuurBJryeUA");
			add_location(div1, file, 61, 0, 1311);
			attr_dev(input1, "type", "range");
			attr_dev(input1, "id", /*id*/ ctx[10]);
			attr_dev(input1, "name", "cowbell");
			attr_dev(input1, "min", /*minimum*/ ctx[1]);
			attr_dev(input1, "max", /*maximum*/ ctx[2]);
			attr_dev(input1, "step", /*step*/ ctx[3]);
			input1.disabled = /*disabled*/ ctx[4];
			attr_dev(input1, "class", "s-iYuurBJryeUA");
			add_location(input1, file, 82, 0, 1665);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, label_1);
			mount_component(blocktitle, label_1, null);
			append_dev(div0, t0);
			append_dev(div0, input0);
			set_input_value(input0, /*value*/ ctx[0]);
			/*input0_binding*/ ctx[15](input0);
			insert_dev(target, t1, anchor);
			insert_dev(target, input1, anchor);
			set_input_value(input1, /*value*/ ctx[0]);
			/*input1_binding*/ ctx[17](input1);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[14]),
					listen_dev(input0, "blur", /*clamp*/ ctx[12], false, false, false, false),
					listen_dev(input0, "pointerup", /*handle_release*/ ctx[11], false, false, false, false),
					listen_dev(input1, "change", /*input1_change_input_handler*/ ctx[16]),
					listen_dev(input1, "input", /*input1_change_input_handler*/ ctx[16]),
					listen_dev(input1, "pointerup", /*handle_release*/ ctx[11], false, false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			const blocktitle_changes = {};
			if (dirty & /*show_label*/ 128) blocktitle_changes.show_label = /*show_label*/ ctx[7];
			if (dirty & /*info*/ 64) blocktitle_changes.info = /*info*/ ctx[6];

			if (dirty & /*$$scope, label*/ 4194336) {
				blocktitle_changes.$$scope = { dirty, ctx };
			}

			blocktitle.$set(blocktitle_changes);

			if (!current || dirty & /*minimum*/ 2) {
				attr_dev(input0, "min", /*minimum*/ ctx[1]);
			}

			if (!current || dirty & /*maximum*/ 4) {
				attr_dev(input0, "max", /*maximum*/ ctx[2]);
			}

			if (!current || dirty & /*step*/ 8) {
				attr_dev(input0, "step", /*step*/ ctx[3]);
			}

			if (!current || dirty & /*disabled*/ 16) {
				prop_dev(input0, "disabled", /*disabled*/ ctx[4]);
			}

			if (dirty & /*value*/ 1 && to_number(input0.value) !== /*value*/ ctx[0]) {
				set_input_value(input0, /*value*/ ctx[0]);
			}

			if (!current || dirty & /*minimum*/ 2) {
				attr_dev(input1, "min", /*minimum*/ ctx[1]);
			}

			if (!current || dirty & /*maximum*/ 4) {
				attr_dev(input1, "max", /*maximum*/ ctx[2]);
			}

			if (!current || dirty & /*step*/ 8) {
				attr_dev(input1, "step", /*step*/ ctx[3]);
			}

			if (!current || dirty & /*disabled*/ 16) {
				prop_dev(input1, "disabled", /*disabled*/ ctx[4]);
			}

			if (dirty & /*value*/ 1) {
				set_input_value(input1, /*value*/ ctx[0]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(blocktitle.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(blocktitle.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(div1);
				detach_dev(t1);
				detach_dev(input1);
			}

			destroy_component(blocktitle);
			/*input0_binding*/ ctx[15](null);
			/*input1_binding*/ ctx[17](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

let _id = 0;

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Range', slots, []);
	let { value = 0 } = $$props;
	let { value_is_output = false } = $$props;
	let { minimum = 0 } = $$props;
	let { maximum = 100 } = $$props;
	let { step = 1 } = $$props;
	let { disabled = false } = $$props;
	let { label } = $$props;
	let { info = undefined } = $$props;
	let { show_label } = $$props;
	let rangeInput;
	let numberInput;
	const id = `range_id_${_id++}`;
	const dispatch = createEventDispatcher();

	function handle_change() {
		dispatch("change", value);

		if (!value_is_output) {
			dispatch("input");
		}
	}

	afterUpdate(() => {
		$$invalidate(13, value_is_output = false);
		setSlider();
	});

	function handle_release(e) {
		dispatch("release", value);
	}

	function clamp() {
		dispatch("release", value);
		$$invalidate(0, value = Math.min(Math.max(value, minimum), maximum));
	}

	function setSlider() {
		setSliderRange();
		rangeInput.addEventListener("input", setSliderRange);
		numberInput.addEventListener("input", setSliderRange);
	}

	function setSliderRange() {
		$$invalidate(8, rangeInput.style.backgroundSize = (Number(rangeInput.value) - Number(rangeInput.min)) / (Number(rangeInput.max) - Number(rangeInput.min)) * 100 + "% 100%", rangeInput);
	}

	$$self.$$.on_mount.push(function () {
		if (label === undefined && !('label' in $$props || $$self.$$.bound[$$self.$$.props['label']])) {
			console.warn("<Range> was created without expected prop 'label'");
		}

		if (show_label === undefined && !('show_label' in $$props || $$self.$$.bound[$$self.$$.props['show_label']])) {
			console.warn("<Range> was created without expected prop 'show_label'");
		}
	});

	const writable_props = [
		'value',
		'value_is_output',
		'minimum',
		'maximum',
		'step',
		'disabled',
		'label',
		'info',
		'show_label'
	];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Range> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		value = to_number(this.value);
		$$invalidate(0, value);
	}

	function input0_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			numberInput = $$value;
			$$invalidate(9, numberInput);
		});
	}

	function input1_change_input_handler() {
		value = to_number(this.value);
		$$invalidate(0, value);
	}

	function input1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			rangeInput = $$value;
			$$invalidate(8, rangeInput);
		});
	}

	$$self.$$set = $$props => {
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('value_is_output' in $$props) $$invalidate(13, value_is_output = $$props.value_is_output);
		if ('minimum' in $$props) $$invalidate(1, minimum = $$props.minimum);
		if ('maximum' in $$props) $$invalidate(2, maximum = $$props.maximum);
		if ('step' in $$props) $$invalidate(3, step = $$props.step);
		if ('disabled' in $$props) $$invalidate(4, disabled = $$props.disabled);
		if ('label' in $$props) $$invalidate(5, label = $$props.label);
		if ('info' in $$props) $$invalidate(6, info = $$props.info);
		if ('show_label' in $$props) $$invalidate(7, show_label = $$props.show_label);
	};

	$$self.$capture_state = () => ({
		_id,
		createEventDispatcher,
		afterUpdate,
		BlockTitle,
		value,
		value_is_output,
		minimum,
		maximum,
		step,
		disabled,
		label,
		info,
		show_label,
		rangeInput,
		numberInput,
		id,
		dispatch,
		handle_change,
		handle_release,
		clamp,
		setSlider,
		setSliderRange
	});

	$$self.$inject_state = $$props => {
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('value_is_output' in $$props) $$invalidate(13, value_is_output = $$props.value_is_output);
		if ('minimum' in $$props) $$invalidate(1, minimum = $$props.minimum);
		if ('maximum' in $$props) $$invalidate(2, maximum = $$props.maximum);
		if ('step' in $$props) $$invalidate(3, step = $$props.step);
		if ('disabled' in $$props) $$invalidate(4, disabled = $$props.disabled);
		if ('label' in $$props) $$invalidate(5, label = $$props.label);
		if ('info' in $$props) $$invalidate(6, info = $$props.info);
		if ('show_label' in $$props) $$invalidate(7, show_label = $$props.show_label);
		if ('rangeInput' in $$props) $$invalidate(8, rangeInput = $$props.rangeInput);
		if ('numberInput' in $$props) $$invalidate(9, numberInput = $$props.numberInput);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*value*/ 1) {
			(handle_change());
		}
	};

	return [
		value,
		minimum,
		maximum,
		step,
		disabled,
		label,
		info,
		show_label,
		rangeInput,
		numberInput,
		id,
		handle_release,
		clamp,
		value_is_output,
		input0_input_handler,
		input0_binding,
		input1_change_input_handler,
		input1_binding
	];
}

class Range extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			value: 0,
			value_is_output: 13,
			minimum: 1,
			maximum: 2,
			step: 3,
			disabled: 4,
			label: 5,
			info: 6,
			show_label: 7
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Range",
			options,
			id: create_fragment.name
		});
	}

	get value() {
		throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value_is_output() {
		throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value_is_output(value) {
		throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get minimum() {
		throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set minimum(value) {
		throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get maximum() {
		throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set maximum(value) {
		throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get step() {
		throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set step(value) {
		throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get disabled() {
		throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set disabled(value) {
		throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get label() {
		throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set label(value) {
		throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get info() {
		throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set info(value) {
		throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get show_label() {
		throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set show_label(value) {
		throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Range as R };
//# sourceMappingURL=Range-9d6c9201.js.map
