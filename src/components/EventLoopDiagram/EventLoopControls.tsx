import styles from './EventLoopDiagram.module.css'

interface EventLoopControlsProps {
	currentStep: number
	isPlaying: boolean
	maxSteps: number
	onPreviousStep: () => void
	onTogglePlay: () => void
	onNextStep: () => void
	onReset: () => void
}

/**
 * Component for controlling the event loop visualization
 * @param props - Component props
 */
export const EventLoopControls = ({
	currentStep,
	isPlaying,
	maxSteps,
	onPreviousStep,
	onTogglePlay,
	onNextStep,
	onReset,
}: EventLoopControlsProps) => {
	return (
		<div className={styles.controls}>
			<button className={styles.controlButton} disabled={currentStep >= maxSteps - 1} onClick={onTogglePlay}>
				{isPlaying ? '⏸ Pause' : '▶ Play'}
			</button>
			<button className={styles.controlButton} disabled={currentStep === 0 || isPlaying} onClick={onPreviousStep}>
				⏮ Previous Step
			</button>

			<button className={styles.controlButton} disabled={currentStep >= maxSteps - 1 || isPlaying} onClick={onNextStep}>
				⏭ Next Step
			</button>
			<button className={styles.controlButton} onClick={onReset}>
				🔁 Reset
			</button>
		</div>
	)
}
