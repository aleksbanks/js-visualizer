import { useEffect } from 'react'

import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

import { useEventLoopStore } from '@/store/eventLoopStore'

import styles from './CodeDisplay.module.css'

/**
 * Component for displaying the current example's code
 *
 * This component shows the JavaScript code for the current example,
 * with the currently executing line highlighted. The code is displayed
 * in a monospace font with proper formatting and syntax highlighting.
 */
export const CodeDisplay = () => {
	const { currentExample, currentStep } = useEventLoopStore()

	useEffect(() => {
		Prism.highlightAll()
	}, [currentExample])

	if (!currentExample) return null

	const lines = currentExample.code.split('\n')
	const currentTask = currentExample.steps[currentStep]
	const currentLineIndex = currentTask ? lines.findIndex(line => line.includes(currentTask.content)) : -1

	// TODO: Add an output section that shows the output of the current task as it executes
	return (
		<div className={styles.container}>
			<div className={styles.title}>Current Code Example</div>
			<div className={styles.code}>
				{lines.map((line, index) => {
					const highlightedCode = Prism.highlight(line, Prism.languages.javascript, 'javascript')
					return (
						<div className={`${styles.line} ${index === currentLineIndex ? styles.highlight : ''}`} key={index}>
							<span className={styles.lineNumber}>{index + 1}</span>
							<code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
						</div>
					)
				})}
			</div>
		</div>
	)
}
