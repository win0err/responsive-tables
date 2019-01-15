# Responsive Tables JS
A simple set of JavaScript and CSS, through which your tables will look good on mobile devices. See [the demo](https://win0err.github.io/responsive-tables/). 

## Installation
First you need to download [responsive-tables.min.js](https://raw.githubusercontent.com/win0err/responsive-tables/master/dist/responsive-tables.min.js) and [responsive-tables.min.css](https://raw.githubusercontent.com/win0err/responsive-tables/master/dist/responsive-tables.min.css) or the archive of [the latest release](https://github.com/win0err/responsive-tables/releases/latest) containing these files.

Add a link to the `responsive-tables.min.css` style sheet file inside the `<head>` section of your HTML document:
```html
<head>
	…
	<link rel="stylesheet" type="text/css" href="path/to/responsive-tables.min.css" />
	…
</head>
```

Attach the script before closing `</body>`:
```html
<body>
	…
	<script type="text/javascript" src="path/to/responsive-tables.min.js"></script>
</body>
```

## Usage
Just call `ResponsiveTables.applyTo(selector)` method with tables list or selector as a param. 

You must use a `<th>` tags in the first row of the table to determine column names. These names will be used to create labels for each cell in the mobile mode.
```html
<table>
	<tr>
		<th>Movie</th>
		<th>Genre</th>
		<th>Year</th>
		<th>IMDB rating</th>
	</tr>
	…
	<tr>
		<td>Fight Club</td>
		<td>Drama</td>
		<td>1999</td>
		<td>8,8</td>
	</tr>
</table>
<script>
	// You can pass NodeList as parameter 
	ResponsiveTables.applyTo(document.querySelectorAll('table'))
	// or selector
	ResponsiveTables.applyTo('table#i-love-win0err')
	// or even if you using jQuery you can do this:
	ResponsiveTables.applyTo($('.jquery-tables'))
</script>
```

---
_Developed by [Sergei Kolesnikov](https://github.com/win0err)_
