# svelte-autosize

Svelte action to automatically adjust textarea height to match its contents.

Simply wraps [autosize by Jack Moore](https://github.com/jackmoore/autosize) in a Svelte action.

See [the autosize website](http://www.jacklmoore.com/autosize/) for additional documentation.

## Install via NPM

```
npm install svelte-autosize
```

## Usage

```html
<script>
import autosize from 'svelte-autosize';
</script>

<textarea use:autosize></textarea>
```

If you need to reset the textarea height, you can use `autosize.update(textarea)`. For example:

```html
<script>
import {tick} from 'svelte';
import autosize from 'svelte-autosize';

let textarea;
let value = '';
	
async function reset() {
  value = '';
  await tick();
  autosize.update(textarea);
}
</script>

<textarea use:autosize bind:this={textarea} bind:value></textarea>
<button on:click={reset}>Reset</button>
```

## License

[MIT](https://opensource.org/licenses/mit-license.php)
