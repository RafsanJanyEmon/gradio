import { SvelteComponentDev, init, safe_not_equal, dispatch_dev, validate_slots, getContext, tick, create_component, mount_component, transition_in, transition_out, destroy_component, text, insert_dev, set_data_dev, detach_dev } from './svelte/svelte-internal.js';
import { U as UploadButton } from './UploadButton-e351c051.js';
import { u as upload_files } from './index-30423ace.js';
import { b as blobToBase64 } from './Button-153ea7e7.js';

/* Users/peterallen/Projects/gradio/js/uploadbutton/interactive/InteractiveUploadButton.svelte generated by Svelte v4.0.0 */

// (47:0) <UploadButton  {elem_id}  {elem_classes}  {visible}  {file_count}  {file_types}  {size}  {scale}  {min_width}  {variant}  {label}  on:click={() => gradio.dispatch("click")}  on:load={handle_upload} >
function create_default_slot(ctx) {
	let t_value = /*gradio*/ ctx[10].i18n(/*label*/ ctx[3]) + "";
	let t;

	const block = {
		c: function create() {
			t = text(t_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*gradio, label*/ 1032 && t_value !== (t_value = /*gradio*/ ctx[10].i18n(/*label*/ ctx[3]) + "")) set_data_dev(t, t_value);
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
		source: "(47:0) <UploadButton  {elem_id}  {elem_classes}  {visible}  {file_count}  {file_types}  {size}  {scale}  {min_width}  {variant}  {label}  on:click={() => gradio.dispatch(\\\"click\\\")}  on:load={handle_upload} >",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let uploadbutton;
	let current;

	uploadbutton = new UploadButton({
			props: {
				elem_id: /*elem_id*/ ctx[0],
				elem_classes: /*elem_classes*/ ctx[1],
				visible: /*visible*/ ctx[2],
				file_count: /*file_count*/ ctx[4],
				file_types: /*file_types*/ ctx[5],
				size: /*size*/ ctx[6],
				scale: /*scale*/ ctx[7],
				min_width: /*min_width*/ ctx[8],
				variant: /*variant*/ ctx[9],
				label: /*label*/ ctx[3],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	uploadbutton.$on("click", /*click_handler*/ ctx[14]);
	uploadbutton.$on("load", /*handle_upload*/ ctx[11]);

	const block = {
		c: function create() {
			create_component(uploadbutton.$$.fragment);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(uploadbutton, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const uploadbutton_changes = {};
			if (dirty & /*elem_id*/ 1) uploadbutton_changes.elem_id = /*elem_id*/ ctx[0];
			if (dirty & /*elem_classes*/ 2) uploadbutton_changes.elem_classes = /*elem_classes*/ ctx[1];
			if (dirty & /*visible*/ 4) uploadbutton_changes.visible = /*visible*/ ctx[2];
			if (dirty & /*file_count*/ 16) uploadbutton_changes.file_count = /*file_count*/ ctx[4];
			if (dirty & /*file_types*/ 32) uploadbutton_changes.file_types = /*file_types*/ ctx[5];
			if (dirty & /*size*/ 64) uploadbutton_changes.size = /*size*/ ctx[6];
			if (dirty & /*scale*/ 128) uploadbutton_changes.scale = /*scale*/ ctx[7];
			if (dirty & /*min_width*/ 256) uploadbutton_changes.min_width = /*min_width*/ ctx[8];
			if (dirty & /*variant*/ 512) uploadbutton_changes.variant = /*variant*/ ctx[9];
			if (dirty & /*label*/ 8) uploadbutton_changes.label = /*label*/ ctx[3];

			if (dirty & /*$$scope, gradio, label*/ 66568) {
				uploadbutton_changes.$$scope = { dirty, ctx };
			}

			uploadbutton.$set(uploadbutton_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(uploadbutton.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(uploadbutton.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(uploadbutton, detaching);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('InteractiveUploadButton', slots, []);
	let { elem_id = "" } = $$props;
	let { elem_classes = [] } = $$props;
	let { visible = true } = $$props;
	let { label } = $$props;
	let { value } = $$props;
	let { file_count } = $$props;
	let { file_types = [] } = $$props;
	let { root } = $$props;
	let { size = "lg" } = $$props;
	let { scale = null } = $$props;
	let { min_width = undefined } = $$props;
	let { variant = "secondary" } = $$props;
	let { gradio } = $$props;
	const upload_files$1 = getContext("upload_files") ?? upload_files;

	async function handle_upload({ detail }) {
		$$invalidate(12, value = detail);
		await tick();
		let files = (Array.isArray(detail) ? detail : [detail]).map(file_data => file_data.blob);

		upload_files$1(root, files).then(async response => {
			if (response.error) {
				(Array.isArray(detail) ? detail : [detail]).forEach(async (file_data, i) => {
					file_data.data = await blobToBase64(file_data.blob);
					file_data.blob = undefined;
				});
			} else {
				(Array.isArray(detail) ? detail : [detail]).forEach((file_data, i) => {
					if (response.files) {
						file_data.orig_name = file_data.name;
						file_data.name = response.files[i];
						file_data.is_file = true;
						file_data.blob = undefined;
					}
				});
			}

			gradio.dispatch("change", value);
			gradio.dispatch("upload", detail);
		});
	}

	$$self.$$.on_mount.push(function () {
		if (label === undefined && !('label' in $$props || $$self.$$.bound[$$self.$$.props['label']])) {
			console.warn("<InteractiveUploadButton> was created without expected prop 'label'");
		}

		if (value === undefined && !('value' in $$props || $$self.$$.bound[$$self.$$.props['value']])) {
			console.warn("<InteractiveUploadButton> was created without expected prop 'value'");
		}

		if (file_count === undefined && !('file_count' in $$props || $$self.$$.bound[$$self.$$.props['file_count']])) {
			console.warn("<InteractiveUploadButton> was created without expected prop 'file_count'");
		}

		if (root === undefined && !('root' in $$props || $$self.$$.bound[$$self.$$.props['root']])) {
			console.warn("<InteractiveUploadButton> was created without expected prop 'root'");
		}

		if (gradio === undefined && !('gradio' in $$props || $$self.$$.bound[$$self.$$.props['gradio']])) {
			console.warn("<InteractiveUploadButton> was created without expected prop 'gradio'");
		}
	});

	const writable_props = [
		'elem_id',
		'elem_classes',
		'visible',
		'label',
		'value',
		'file_count',
		'file_types',
		'root',
		'size',
		'scale',
		'min_width',
		'variant',
		'gradio'
	];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<InteractiveUploadButton> was created with unknown prop '${key}'`);
	});

	const click_handler = () => gradio.dispatch("click");

	$$self.$$set = $$props => {
		if ('elem_id' in $$props) $$invalidate(0, elem_id = $$props.elem_id);
		if ('elem_classes' in $$props) $$invalidate(1, elem_classes = $$props.elem_classes);
		if ('visible' in $$props) $$invalidate(2, visible = $$props.visible);
		if ('label' in $$props) $$invalidate(3, label = $$props.label);
		if ('value' in $$props) $$invalidate(12, value = $$props.value);
		if ('file_count' in $$props) $$invalidate(4, file_count = $$props.file_count);
		if ('file_types' in $$props) $$invalidate(5, file_types = $$props.file_types);
		if ('root' in $$props) $$invalidate(13, root = $$props.root);
		if ('size' in $$props) $$invalidate(6, size = $$props.size);
		if ('scale' in $$props) $$invalidate(7, scale = $$props.scale);
		if ('min_width' in $$props) $$invalidate(8, min_width = $$props.min_width);
		if ('variant' in $$props) $$invalidate(9, variant = $$props.variant);
		if ('gradio' in $$props) $$invalidate(10, gradio = $$props.gradio);
	};

	$$self.$capture_state = () => ({
		getContext,
		tick,
		UploadButton,
		default_upload_files: upload_files,
		blobToBase64,
		elem_id,
		elem_classes,
		visible,
		label,
		value,
		file_count,
		file_types,
		root,
		size,
		scale,
		min_width,
		variant,
		gradio,
		upload_files: upload_files$1,
		handle_upload
	});

	$$self.$inject_state = $$props => {
		if ('elem_id' in $$props) $$invalidate(0, elem_id = $$props.elem_id);
		if ('elem_classes' in $$props) $$invalidate(1, elem_classes = $$props.elem_classes);
		if ('visible' in $$props) $$invalidate(2, visible = $$props.visible);
		if ('label' in $$props) $$invalidate(3, label = $$props.label);
		if ('value' in $$props) $$invalidate(12, value = $$props.value);
		if ('file_count' in $$props) $$invalidate(4, file_count = $$props.file_count);
		if ('file_types' in $$props) $$invalidate(5, file_types = $$props.file_types);
		if ('root' in $$props) $$invalidate(13, root = $$props.root);
		if ('size' in $$props) $$invalidate(6, size = $$props.size);
		if ('scale' in $$props) $$invalidate(7, scale = $$props.scale);
		if ('min_width' in $$props) $$invalidate(8, min_width = $$props.min_width);
		if ('variant' in $$props) $$invalidate(9, variant = $$props.variant);
		if ('gradio' in $$props) $$invalidate(10, gradio = $$props.gradio);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		elem_id,
		elem_classes,
		visible,
		label,
		file_count,
		file_types,
		size,
		scale,
		min_width,
		variant,
		gradio,
		handle_upload,
		value,
		root,
		click_handler
	];
}

class InteractiveUploadButton extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			elem_id: 0,
			elem_classes: 1,
			visible: 2,
			label: 3,
			value: 12,
			file_count: 4,
			file_types: 5,
			root: 13,
			size: 6,
			scale: 7,
			min_width: 8,
			variant: 9,
			gradio: 10
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "InteractiveUploadButton",
			options,
			id: create_fragment.name
		});
	}

	get elem_id() {
		throw new Error("<InteractiveUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set elem_id(value) {
		throw new Error("<InteractiveUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get elem_classes() {
		throw new Error("<InteractiveUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set elem_classes(value) {
		throw new Error("<InteractiveUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get visible() {
		throw new Error("<InteractiveUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set visible(value) {
		throw new Error("<InteractiveUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get label() {
		throw new Error("<InteractiveUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set label(value) {
		throw new Error("<InteractiveUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value() {
		throw new Error("<InteractiveUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<InteractiveUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get file_count() {
		throw new Error("<InteractiveUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set file_count(value) {
		throw new Error("<InteractiveUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get file_types() {
		throw new Error("<InteractiveUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set file_types(value) {
		throw new Error("<InteractiveUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get root() {
		throw new Error("<InteractiveUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set root(value) {
		throw new Error("<InteractiveUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get size() {
		throw new Error("<InteractiveUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set size(value) {
		throw new Error("<InteractiveUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get scale() {
		throw new Error("<InteractiveUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set scale(value) {
		throw new Error("<InteractiveUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get min_width() {
		throw new Error("<InteractiveUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set min_width(value) {
		throw new Error("<InteractiveUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get variant() {
		throw new Error("<InteractiveUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set variant(value) {
		throw new Error("<InteractiveUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get gradio() {
		throw new Error("<InteractiveUploadButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set gradio(value) {
		throw new Error("<InteractiveUploadButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

const InteractiveUploadButton$1 = InteractiveUploadButton;

export { InteractiveUploadButton$1 as default };
//# sourceMappingURL=index-89e54dc5.js.map
