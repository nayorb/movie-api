import React from 'react'

const getArray = n => new Array(n).fill().map((_, i) => i + 1)

const buttonStyle = {
	marginRight: 2,
}

export default function Pagination({ totalPages, activePage, setPage }) {
	return totalPages && totalPages > 0 ? (
		<>
			<button
				style={buttonStyle}
				onClick={() => setPage(activePage - 1)}
				disabled={activePage <= 1}
			>
				{'<'}
			</button>
			{getArray(totalPages).map(n => (
				<button
					style={buttonStyle}
					onClick={() => setPage(n)}
					disabled={n === activePage}
					key={n}
				>
					{n}
				</button>
			))}
			<button
				style={buttonStyle}
				onClick={() => setPage(activePage + 1)}
				disabled={activePage >= totalPages}
			>
				{'>'}
			</button>
		</>
	) : null
}
