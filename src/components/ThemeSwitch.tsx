import { useEffect, useState } from 'react'

export const ThemeSwitch = () => {
	const [isDark, setIsDark] = useState(() => {
		const savedTheme = localStorage.getItem('theme')
		return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
	})

	useEffect(() => {
		const root = document.documentElement
		if (isDark) {
			root.setAttribute('data-theme', 'dark')
			localStorage.setItem('theme', 'dark')
		} else {
			root.removeAttribute('data-theme')
			localStorage.setItem('theme', 'light')
		}
	}, [isDark])

	return (
		<button
			className='theme-switch'
			onClick={() => setIsDark(!isDark)}
			aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
		>
			{isDark ? '☀️' : '🌙'}
		</button>
	)
}
