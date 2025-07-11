import { Link } from 'react-router-dom'

import styles from './Navigation.module.css'

export const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/event-loop'>Event Loop</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	)
}
