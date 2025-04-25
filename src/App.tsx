import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'

import { Header } from '@/components/Header/Header'
import { PageTransition } from '@/components/PageTransition/PageTransition'
import { About } from '@/pages/About'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import './App.css'

export const App = () => {
	const location = useLocation()

	return (
		<div className='app'>
			<Header />
			<main className='main-content'>
				<AnimatePresence mode='wait'>
					<Routes key={location.pathname} location={location}>
						<Route
							path='/'
							element={
								<PageTransition>
									<Home />
								</PageTransition>
							}
						/>
						<Route
							path='/about'
							element={
								<PageTransition>
									<About />
								</PageTransition>
							}
						/>
						<Route
							path='*'
							element={
								<PageTransition>
									<NotFound />
								</PageTransition>
							}
						/>
					</Routes>
				</AnimatePresence>
			</main>
		</div>
	)
}
