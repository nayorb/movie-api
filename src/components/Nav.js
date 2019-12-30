import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

export default function Nav() {
	return (
		<AppBar position='static'>
			<Toolbar>
				<Link to='/'>
					<Button>Search</Button>
				</Link>
				<Link to='/fav'>
					<Button style={{ marginLeft: 10 }}>Favourites</Button>
				</Link>
			</Toolbar>
		</AppBar>
	)
}
