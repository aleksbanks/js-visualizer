import { CodeDisplay } from '@/components/CodeDisplay/CodeDisplay'
import { ExamplesTabs } from '@/components/ExamplesTabs/ExamplesTabs'

import styles from './styles/EventLoopPage.module.css'
import { EventLoopDiagram } from '../components/EventLoopDiagram/EventLoopDiagram'

/**
 * Page component for the event loop visualization
 */
export const EventLoopPage = () => {
	return (
		<div className={styles.container}>
			<h1>JavaScript Event Loop Visualization</h1>
			{/* TODO: Add a description of the event loop */}
			<ExamplesTabs />
			<div className={styles.mainContent}>
				<CodeDisplay />
				<EventLoopDiagram />
			</div>
		</div>
	)
}
