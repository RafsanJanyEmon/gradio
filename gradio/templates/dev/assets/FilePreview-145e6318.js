import { SvelteComponentDev, init, safe_not_equal, dispatch_dev, ensure_array_like_dev, validate_slots, createEventDispatcher, element, attr_dev, add_location, set_style, insert_dev, append_dev, noop, detach_dev, destroy_each, text, space, toggle_class, listen_dev, set_data_dev, HtmlTag } from './svelte/svelte-internal.js';

const prettyBytes = (bytes) => {
  let units = ["B", "KB", "MB", "GB", "PB"];
  let i = 0;
  while (bytes > 1024) {
    bytes /= 1024;
    i++;
  }
  let unit = units[i];
  return bytes.toFixed(1) + "&nbsp;" + unit;
};
const display_file_name = (value) => {
  var str;
  str = value.orig_name || value.name;
  const max_length = 30;
  if (str.length > max_length) {
    const truncated_name = str.substring(0, max_length);
    const file_extension_index = str.lastIndexOf(".");
    if (file_extension_index !== -1) {
      const file_extension = str.slice(file_extension_index);
      return `${truncated_name}..${file_extension}`;
    }
    return truncated_name;
  }
  return str;
};
const display_file_size = (value) => {
  var total_size = 0;
  if (Array.isArray(value)) {
    for (var file of value) {
      if (file.size !== void 0)
        total_size += file.size;
    }
  } else {
    total_size = value.size || 0;
  }
  return prettyBytes(total_size);
};

const FilePreview_svelte_svelte_type_style_lang = '';

/* Users/peterallen/Projects/gradio/js/file/shared/FilePreview.svelte generated by Svelte v4.0.0 */
const file = "Users/peterallen/Projects/gradio/js/file/shared/FilePreview.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	child_ctx[8] = i;
	return child_ctx;
}

// (41:6) {:else}
function create_else_block(ctx) {
	let t_value = /*i18n*/ ctx[3]("file.uploading") + "";
	let t;

	const block = {
		c: function create() {
			t = text(t_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*i18n*/ 8 && t_value !== (t_value = /*i18n*/ ctx[3]("file.uploading") + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(t);
			}
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(41:6) {:else}",
		ctx
	});

	return block;
}

// (31:6) {#if file.data}
function create_if_block(ctx) {
	let a;
	let html_tag;
	let raw_value = display_file_size(/*file*/ ctx[6]) + "";
	let t;
	let a_href_value;
	let a_download_value;

	const block = {
		c: function create() {
			a = element("a");
			html_tag = new HtmlTag(false);
			t = text(" ⇣");
			html_tag.a = t;
			attr_dev(a, "href", a_href_value = /*file*/ ctx[6].data);
			attr_dev(a, "target", "_blank");

			attr_dev(a, "download", a_download_value = window.__is_colab__
			? null
			: /*file*/ ctx[6].orig_name || /*file*/ ctx[6].name);

			attr_dev(a, "class", "s-KgJBTe2-TwDs");
			add_location(a, file, 37, 7, 775);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			html_tag.m(raw_value, a);
			append_dev(a, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*value*/ 1 && raw_value !== (raw_value = display_file_size(/*file*/ ctx[6]) + "")) html_tag.p(raw_value);

			if (dirty & /*value*/ 1 && a_href_value !== (a_href_value = /*file*/ ctx[6].data)) {
				attr_dev(a, "href", a_href_value);
			}

			if (dirty & /*value*/ 1 && a_download_value !== (a_download_value = window.__is_colab__
			? null
			: /*file*/ ctx[6].orig_name || /*file*/ ctx[6].name)) {
				attr_dev(a, "download", a_download_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(a);
			}
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(31:6) {#if file.data}",
		ctx
	});

	return block;
}

// (16:3) {#each Array.isArray(value) ? value : [value] as file, i}
function create_each_block(ctx) {
	let tr;
	let td0;
	let t0_value = display_file_name(/*file*/ ctx[6]) + "";
	let t0;
	let t1;
	let td1;
	let t2;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (/*file*/ ctx[6].data) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	function click_handler() {
		return /*click_handler*/ ctx[5](/*file*/ ctx[6], /*i*/ ctx[8]);
	}

	const block = {
		c: function create() {
			tr = element("tr");
			td0 = element("td");
			t0 = text(t0_value);
			t1 = space();
			td1 = element("td");
			if_block.c();
			t2 = space();
			attr_dev(td0, "class", "s-KgJBTe2-TwDs");
			add_location(td0, file, 31, 5, 670);
			attr_dev(td1, "class", "download s-KgJBTe2-TwDs");
			add_location(td1, file, 35, 5, 724);
			attr_dev(tr, "class", "file s-KgJBTe2-TwDs");
			toggle_class(tr, "selectable", /*selectable*/ ctx[1]);
			add_location(tr, file, 22, 4, 498);
		},
		m: function mount(target, anchor) {
			insert_dev(target, tr, anchor);
			append_dev(tr, td0);
			append_dev(td0, t0);
			append_dev(tr, t1);
			append_dev(tr, td1);
			if_block.m(td1, null);
			append_dev(tr, t2);

			if (!mounted) {
				dispose = listen_dev(tr, "click", click_handler, false, false, false, false);
				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*value*/ 1 && t0_value !== (t0_value = display_file_name(/*file*/ ctx[6]) + "")) set_data_dev(t0, t0_value);

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(td1, null);
				}
			}

			if (dirty & /*selectable*/ 2) {
				toggle_class(tr, "selectable", /*selectable*/ ctx[1]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(tr);
			}

			if_block.d();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(16:3) {#each Array.isArray(value) ? value : [value] as file, i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let table;
	let tbody;

	let each_value = ensure_array_like_dev(Array.isArray(/*value*/ ctx[0])
	? /*value*/ ctx[0]
	: [/*value*/ ctx[0]]);

	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");
			table = element("table");
			tbody = element("tbody");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr_dev(tbody, "class", "s-KgJBTe2-TwDs");
			add_location(tbody, file, 20, 2, 425);
			attr_dev(table, "class", "file-preview s-KgJBTe2-TwDs");
			add_location(table, file, 19, 1, 394);
			attr_dev(div, "class", "file-preview-holder s-KgJBTe2-TwDs");

			set_style(div, "max-height", typeof /*height*/ ctx[2] === undefined
			? 'auto'
			: /*height*/ ctx[2] + 'px');

			add_location(div, file, 15, 0, 280);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, table);
			append_dev(table, tbody);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(tbody, null);
				}
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*selectable, dispatch, Array, value, window, display_file_size, i18n, display_file_name*/ 27) {
				each_value = ensure_array_like_dev(Array.isArray(/*value*/ ctx[0])
				? /*value*/ ctx[0]
				: [/*value*/ ctx[0]]);

				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(tbody, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*height*/ 4) {
				set_style(div, "max-height", typeof /*height*/ ctx[2] === undefined
				? 'auto'
				: /*height*/ ctx[2] + 'px');
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(div);
			}

			destroy_each(each_blocks, detaching);
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
	validate_slots('FilePreview', slots, []);
	const dispatch = createEventDispatcher();
	let { value } = $$props;
	let { selectable = false } = $$props;
	let { height = undefined } = $$props;
	let { i18n } = $$props;

	$$self.$$.on_mount.push(function () {
		if (value === undefined && !('value' in $$props || $$self.$$.bound[$$self.$$.props['value']])) {
			console.warn("<FilePreview> was created without expected prop 'value'");
		}

		if (i18n === undefined && !('i18n' in $$props || $$self.$$.bound[$$self.$$.props['i18n']])) {
			console.warn("<FilePreview> was created without expected prop 'i18n'");
		}
	});

	const writable_props = ['value', 'selectable', 'height', 'i18n'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<FilePreview> was created with unknown prop '${key}'`);
	});

	const click_handler = (file, i) => dispatch("select", {
		value: file.orig_name || file.name,
		index: i
	});

	$$self.$$set = $$props => {
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('selectable' in $$props) $$invalidate(1, selectable = $$props.selectable);
		if ('height' in $$props) $$invalidate(2, height = $$props.height);
		if ('i18n' in $$props) $$invalidate(3, i18n = $$props.i18n);
	};

	$$self.$capture_state = () => ({
		display_file_name,
		display_file_size,
		createEventDispatcher,
		dispatch,
		value,
		selectable,
		height,
		i18n
	});

	$$self.$inject_state = $$props => {
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('selectable' in $$props) $$invalidate(1, selectable = $$props.selectable);
		if ('height' in $$props) $$invalidate(2, height = $$props.height);
		if ('i18n' in $$props) $$invalidate(3, i18n = $$props.i18n);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [value, selectable, height, i18n, dispatch, click_handler];
}

class FilePreview extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			value: 0,
			selectable: 1,
			height: 2,
			i18n: 3
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "FilePreview",
			options,
			id: create_fragment.name
		});
	}

	get value() {
		throw new Error("<FilePreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<FilePreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get selectable() {
		throw new Error("<FilePreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selectable(value) {
		throw new Error("<FilePreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get height() {
		throw new Error("<FilePreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set height(value) {
		throw new Error("<FilePreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get i18n() {
		throw new Error("<FilePreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set i18n(value) {
		throw new Error("<FilePreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { FilePreview as F };
//# sourceMappingURL=FilePreview-145e6318.js.map
