/*
 * Responsive Tables (https://github.com/win0err/responsive-tables)
 * Copyright (c) 2017—2018 Sergei Kolesnikov
 *
 * Licensed under the MIT license (https://github.com/win0err/responsive-tables/blob/master/LICENSE)
 */
import styles from './responsive-tables.css'

const isTableNode    = node => node.tagName && 'table' === node.tagName.toLowerCase()
const isNotEmpty     = table => table.rows && table.rows.length > 0
const hasTableHeader = table => table.rows[ 0 ].cells[ 0 ] && 'th' === table.rows[ 0 ].cells[ 0 ].tagName.toLowerCase()

const collectHeadersFromTable = table =>
	[ ...table.rows[ 0 ].cells ]
		.map(
			cell => String(cell.innerText || cell.textContent).trim()
		)

class ResponsiveTables {
	static applyTo(elements) {
		if ('string' === typeof elements) {
			elements = document.querySelectorAll(elements)
		}

		// if elements is a result of jQuery's selector
		if ('function' === elements.toArray) {
			elements = elements.toArray()
		}

		let tables = [ ...elements ]
			.filter(isTableNode)
			.filter(isNotEmpty)
			.filter(hasTableHeader)

		tables.forEach(ResponsiveTables.applyToTable)
		tables.forEach(table => table.classList.add(styles['responsive-table-js']))
	}

	static applyToTable(table) {
		if('object' !== typeof table || !isTableNode(table)) {
			throw new Error(table + ' must be a table node')
		}

		let headers = collectHeadersFromTable(table)

		const applyHeaders = row =>
			[ ...row.cells ]
				.map((cell, i) => cell.dataset.responsiveTablesLabel = headers[ i ] || '')

		for (let i = 1; i < table.rows.length; ++i) {
			applyHeaders(table.rows[i])
		}
	}
}