import { useEffect, useRef } from 'react'

import { motion } from 'framer-motion'

import { useEventLoopStore } from '@/store/eventLoopStore'

import { EventLoopControls } from './EventLoopControls'
import styles from './EventLoopDiagram.module.css'
import { TaskComponent } from './TaskComponent'

/**
 * Component for rendering a single task in the event loop visualization
 * @param task - The task to render
 */

/**
 * Main component for visualizing the JavaScript event loop
 *
 * This component displays:
 * - Call Stack (left)
 * - Web APIs (right)
 * - Callback Queue (top)
 * - Event Loop (bottom)
 *
 * It also provides controls for:
 * - Playing/pausing the visualization
 * - Stepping through the visualization
 * - Resetting the visualization
 */
export const EventLoopDiagram = () => {
	const { currentExample, currentStep, isPlaying, setCurrentStep, previousStep, setIsPlaying, reset } =
		useEventLoopStore()
	const intervalRef = useRef<ReturnType<typeof setInterval>>()

	/**
	 * Effect to handle the automatic progression of steps when playing
	 */
	useEffect(() => {
		if (isPlaying) {
			intervalRef.current = setInterval(() => {
				setCurrentStep((prev: number) => {
					if (prev >= (currentExample?.steps.length ?? 0) - 1) {
						setIsPlaying(false)
						return prev
					}
					return prev + 1
				})
			}, 1000)
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
	}, [isPlaying, currentExample?.steps.length, setCurrentStep, setIsPlaying])

	if (!currentExample) return null

	const currentTasks = currentExample.steps.slice(0, currentStep + 1)
	const stackTasks = currentTasks.filter(task => task.type === 'stack')
	const webApiTasks = currentTasks.filter(task => task.type === 'webApi')
	const queueTasks = currentTasks.filter(task => task.type === 'queue')

	return (
		<div className={styles.wrapper}>
			<EventLoopControls
				currentStep={currentStep}
				isPlaying={isPlaying}
				maxSteps={currentExample.steps.length}
				onNextStep={() => setCurrentStep(currentStep + 1)}
				onPreviousStep={previousStep}
				onReset={reset}
				onTogglePlay={() => setIsPlaying(!isPlaying)}
			/>

			<div className={styles.container}>
				<div className={styles.queue}>
					<span className={styles.title}>Callback Queue</span>
					{queueTasks.map(task => (
						<TaskComponent key={task.id} task={task} />
					))}
				</div>

				<div className={styles.stack}>
					<span className={styles.title}>Call Stack</span>
					{stackTasks.map(task => (
						<TaskComponent key={task.id} task={task} />
					))}
				</div>

				<div className={styles.webApi}>
					<span className={styles.title}>Web APIs</span>
					{webApiTasks.map(task => (
						<TaskComponent key={task.id} task={task} />
					))}
				</div>

				<div className={styles.loop}>
					<motion.div
						className={styles.arrow}
						animate={{
							rotate: isPlaying ? 360 : 0,
						}}
						transition={{
							duration: 2,
							repeat: isPlaying ? Infinity : 0,
							ease: 'linear',
						}}
					>
						🔄
					</motion.div>
				</div>
			</div>
		</div>
	)
}
