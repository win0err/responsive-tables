# SSK Responsive Tables
A simple set of JavaScript and CSS, through which your tables will look good on mobile devices. See [the demo](https://rawgit.com/win0err/ssk-tables/master/demo/index.html). 

## Installation
First you need to download [ssk-tables.min.js](https://raw.githubusercontent.com/win0err/ssk-tables/master/dist/ssk-tables.min.js) and [ssk-tables.min.css](https://raw.githubusercontent.com/win0err/ssk-tables/master/dist/ssk-tables.min.css) or the archive of [the latest release](https://github.com/win0err/ssk-tables/releases/latest) сontaining these files.

Add a link to the `ssk-tables.min.css` style sheet file inside the `<head>` section of your HTML document:
```html
<head>
	…
	<link rel="stylesheet" type="text/css" href="path/to/ssk-tables.min.css" />
	…
</head>
```

Attach the script before closing `</body>`:
```html
<body>
	…
	<script type="text/javascript" src="path/to/ssk-tables.min.js"></script>
</body>
```

## Usage
Add the `ssk-table` class to your tables to make them responsive. You need to use a `<th>` tags in the first row of the table to determine column names. These names will be used to create labels for each cell in the mobile mode.
```html
<table class="ssk-table">
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
```

---
_Developed by [Sergei Kolesnikov](https://github.com/win0err)_