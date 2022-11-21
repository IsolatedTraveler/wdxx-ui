# z-vuestrap2
Bootstrap components for Vue 2

This package allows you to use the famous bootstrap3 Components with Vue.js (2.x).

First of all, you should put the default styling to your webpack alias, so thaat webpack knows where to find 
the css for Bootstrap components:

```
var path = require('path');

...

mix.webpackConfig({
	resolve: {
		alias: {
			'vuestrapStyle.less': path.resolve(__dirname, 'node_modules/z-vuestrap2/less/style.less')
		}
	}
});
```

Of course you may change this path to a less file outside of the package to change the default styling.

## Popovers

A call to the component could look like this:
```
<popover :content="error" title="Something went wrong." look="danger">
    <button class="btn btn-primary">Whoops</button>
</popover>
```

### Properties
**look**  
Change the look of the popover. The class "popover-{look}" is assigned.

**Title**  
The title of the popover

**Content**  
The content of the popover (HTML allowed)

### Adding custom styles
You may add a custom popover style inside you application easily. First of all, include the "mixins/mixins.less", then
create the popover:

```
@import "z-vuestrap2/mixins/mixins.less"

.popover-custom {
  .v-popover-variant(@popover-custom-bg, @popover-custom-border, @popover-custom-text);
}
```

When you applied this style, you can change the look to "custom":
```
<popover :content="error" title="Something went wrong." look="custom">
    <button class="btn btn-primary">Whoops</button>
</popover>
```

### Events

You can trigger events on a popover easily:

__show__  
Trigger the show event to display the popover:
```
popover.$emit('show');
```
