import { useEventLoopStore } from '@/store/eventLoopStore'

import styles from './ExamplesTabs.module.css'

/**
 * Component for displaying and selecting different event loop examples
 *
 * This component renders a horizontal list of tabs, each representing
 * a different example of JavaScript event loop behavior. The active
 * example is highlighted, and clicking a tab switches to that example.
 */
export const ExamplesTabs = () => {
	const { examples, currentExample, setCurrentExample } = useEventLoopStore()

	return (
		<div className={styles.container}>
			{examples.map(example => (
				<button
					className={`${styles.tab} ${currentExample?.id === example.id ? styles.tabActive : ''}`}
					key={example.id}
					onClick={() => setCurrentExample(example)}
				>
					{example.tabName}
				</button>
			))}
		</div>
	)
}
