import { SvelteComponentDev, init, safe_not_equal, dispatch_dev, validate_slots, svg_element, attr_dev, add_location, insert_dev, append_dev, noop, detach_dev } from './svelte/svelte-internal.js';

/* Users/peterallen/Projects/gradio/js/icons/src/File.svelte generated by Svelte v4.0.0 */

const file = "Users/peterallen/Projects/gradio/js/icons/src/File.svelte";

function create_fragment(ctx) {
	let svg;
	let path;
	let polyline;

	const block = {
		c: function create() {
			svg = svg_element("svg");
			path = svg_element("path");
			polyline = svg_element("polyline");
			attr_dev(path, "d", "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z");
			add_location(path, file, 12, 1, 229);
			attr_dev(polyline, "points", "13 2 13 9 20 9");
			add_location(polyline, file, 13, 1, 302);
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr_dev(svg, "width", "100%");
			attr_dev(svg, "height", "100%");
			attr_dev(svg, "viewBox", "0 0 24 24");
			attr_dev(svg, "fill", "none");
			attr_dev(svg, "stroke", "currentColor");
			attr_dev(svg, "stroke-width", "1.5");
			attr_dev(svg, "stroke-linecap", "round");
			attr_dev(svg, "stroke-linejoin", "round");
			attr_dev(svg, "class", "feather feather-file");
			add_location(svg, file, 0, 0, 0);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, svg, anchor);
			append_dev(svg, path);
			append_dev(svg, polyline);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(svg);
			}
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

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('File', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<File> was created with unknown prop '${key}'`);
	});

	return [];
}

class File extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "File",
			options,
			id: create_fragment.name
		});
	}
}

export { File as F };
//# sourceMappingURL=File-42c5d0dc.js.map
