

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1e19ea70.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.aa148a0c.js","_app/immutable/chunks/singletons.d7e9f26d.js","_app/immutable/chunks/index.0378bb41.js"];
export const stylesheets = [];
export const fonts = [];
