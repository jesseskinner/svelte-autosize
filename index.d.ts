import type { Action } from "svelte/action";
import type autosize from "autosize";

declare const autosizeAction: Action<HTMLElement> & {
    update: typeof autosize.update;
    destroy: typeof autosize.destroy;
};

export default autosizeAction;
