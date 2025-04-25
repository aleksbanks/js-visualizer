import { useEffect, useState } from 'react'

import styles from './ThemeSwitch.module.css'

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
			root.setAttribute('data-theme', 'light')
			localStorage.setItem('theme', 'light')
		}
	}, [isDark])

	return (
		<button className={styles.themeSwitch} onClick={() => setIsDark(!isDark)}>
			{isDark ? '☀️' : '🌙'}
		</button>
	)
}
