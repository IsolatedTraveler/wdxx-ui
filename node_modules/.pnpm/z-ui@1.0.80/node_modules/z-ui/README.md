# z-ui

First of all, you should add the following webpack alias to you webpack config file to make sure all styles
are loaded properly:

```
mix.webpackConfig({
	resolve: {
		alias: {
			"uiStyle.less": "z-ui/less/style.less",
			'inputmask.dependencyLib': 'vue-inputmask/3rd/inputmask.dependencyLib'
		}
	}
});
```
___
# Table component
___
```
<vf-table :headings="[
	{
		title: 'Nachname',	// Title of column in header
		data: 'lastname'	// Data of obbject to display
		type: 'string'		// Type of column content (not required; default: string)
	},
	{title: 'Vorname', data: 'firstname'},
	{title: 'Adresse', data: 'address'}
]"></vf-table>
```

## headings
Set the Headings for the table - choose between different types

### Types
**icon**  

This should always be 'icon' for icon type  
Each icon in the 'icons'-Array is an object with the color of the displayed icon, the Font-Awesome class (without the'fa-'-Prefix) and the associated value of that icon.  
If the cell value cannot be found in any value Property of the given icons-Array, an empty string is returned.

```
{
	title: 'Gender',
	data: 'gender',
	type: 'icon',
	icons: [	//Icons to choose from
		{
			value: 1,	//Value of the icon - when the cell has this value, the icon is displayed
			icon: 'venus',	//Font-Awesome class - this will be rendered as "fa fa-venus"
			color: 'red'	//Color of the icon (you can specify any CSS-Value, e.g. #f245aa)
		},
		{value: 0, icon: 'mars', color: 'blue'}
	]
},
```

## noactions
```
<vf-table :headings="[{title: 'Vorname', data: 'firstname'}]" :noactions="true"></vf-table>
```
If the noactions-Property is provided and false (it's true by default), no action bar and column is shown at all - only the raw data.

## actions
Set further actions to display. The actions will be displayed in each row in the 'actions column' near the default 'edit' and 'delete' buttons. For each action, you can **either** specify a href **or** a route Prop.
```
actions: [
	{
		icon: 'user',		//Font-Awesome class to choose from
		target: "_BLANK",		//Target for the link - as in the target attr of 'a'-Tag (could be _SELF, _BLANK, etc). Only used when 'target' is set - not when 'route' is set
		route: "user.index",	// Route name to link to
		href: "infoUrl"	// Href Target of property of row object. This will get the value of 'row.infoUrl' - if the object of the row has an 'infoUrl' Property (should be a full normal http-link)
	}
]
```
___
