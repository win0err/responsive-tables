/*
 * SSK Responsive Tables (https://github.com/win0err/ssk-tables)
 * Copyright (c) 2017 Sergei Kolesnikov
 *
 * Licensed under the MIT license (https://github.com/win0err/ssk-tables/blob/master/LICENSE)
 */

"use scrict";

NodeList.prototype.forEach = Array.prototype.forEach;

document.querySelectorAll('.ssk-table').forEach(table => {

	console.log(table.rows[0].cells[0].tagName);

	// If the first row is table header
	if(table.rows[0].cells[0].tagName == "TH") {

		let tableHeaders = [];
 
		for (let j = 0, col; col = table.rows[0].cells[j]; j++)
			tableHeaders.push( (col.innerText || col.textContent).trim() );


		for (let i = 1, row; row = table.rows[i]; i++) 
		   	for (let j = 0, col; col = row.cells[j]; j++)
		     	col.setAttribute("data-label", tableHeaders[j]);
	}
});