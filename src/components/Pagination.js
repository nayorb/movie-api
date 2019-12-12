import React from 'react'

const getArray = n => new Array(n).fill().map((_, i) => i + 1)

export default function Pagination({ totalPages, activePage, setPage }) {
	return (
		<>
			<button
				onClick={() => setPage(activePage - 1)}
				disabled={activePage <= 1}
			>
				{'<'}
			</button>
			{getArray(totalPages).map(n => (
				<button onClick={() => setPage(n)} disabled={n === activePage} key={n}>
					{n}
				</button>
			))}
			<button
				onClick={() => setPage(activePage + 1)}
				disabled={activePage >= totalPages}
			>
				{'>'}
			</button>
		</>
	)
}
