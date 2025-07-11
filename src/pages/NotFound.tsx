import { Link } from 'react-router-dom'

export const NotFound = () => {
	return (
		<div className='not-found-page'>
			<h1>404 - Page Not Found</h1>
			<p>The page you are looking for does not exist.</p>
			<Link to='/'>
				<button>Return to Home</button>
			</Link>
		</div>
	)
}
