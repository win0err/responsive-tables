/*
 * SSK Responsive Tables (https://github.com/win0err/ssk-tables)
 * Copyright (c) 2017 Sergei Kolesnikov
 *
 * Licensed under the MIT license (https://github.com/win0err/ssk-tables/blob/master/LICENSE)
 */

"use strict";

NodeList.prototype.forEach = Array.prototype.forEach;

document.querySelectorAll('.ssk-table').forEach(function (table) {

	// If the first row is table header
	if (table.rows[0].cells[0].tagName == "TH") {

		var tableHeaders = [];

		for (var j = 0, col; col = table.rows[0].cells[j]; j++) {
			tableHeaders.push((col.innerText || col.textContent).trim());
		}for (var i = 1, row; row = table.rows[i]; i++) {
			for (var _j = 0, _col; _col = row.cells[_j]; _j++) {
				_col.setAttribute("data-label", tableHeaders[_j]);
			}
		}
	}
});