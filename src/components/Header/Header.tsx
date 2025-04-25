import { Navigation } from '@/components/Navigation/Navigation'
import { ThemeSwitch } from '@/components/ThemeSwitch/ThemeSwitch'

import styles from './Header.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Navigation />
			<ThemeSwitch />
		</header>
	)
}
