import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { ThemeSwitch } from './components/ThemeSwitch'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'
import './App.css'

export const App = () => {
	return (
		<div className='app'>
			<ThemeSwitch />
			<Navigation />
			<main className='main-content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
		</div>
	)
}
