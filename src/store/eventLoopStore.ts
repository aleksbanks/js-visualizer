import { create } from 'zustand'

import { DEFAULT_EXAMPLES } from './const'

/**
 * Represents a task in the event loop visualization
 */
export type Task = {
	/** Unique identifier for the task */
	id: string
	/** Name of the task (e.g., 'console.log', 'setTimeout') */
	name: string
	/** Type of the task in the event loop */
	type: 'stack' | 'webApi' | 'queue' | 'loop'
	/** Content of the task (e.g., the message to log) */
	content: string
}

/**
 * Represents a code example with its visualization steps
 */
export type Example = {
	/** Unique identifier for the example */
	id: string
	/** Title of the example with emoji */
	title: string
	/** The actual JavaScript code */
	code: string
	/** List of steps to visualize */
	steps: Task[]
	/** Tab name */
	tabName: string
}

/**
 * State interface for the event loop visualization
 */
export type EventLoopState = {
	/** Currently selected example */
	currentExample: Example | null
	/** Current step in the visualization */
	currentStep: number
	/** Whether the visualization is playing */
	isPlaying: boolean
	/** List of all available examples */
	examples: Example[]
	/** Function to set the current example */
	setCurrentExample: (example: Example) => void
	/** Function to set the current step (can be a number or a function) */
	setCurrentStep: (step: number | ((prev: number) => number)) => void
	/** Function to go to the previous step */
	previousStep: () => void
	/** Function to set the playing state */
	setIsPlaying: (isPlaying: boolean) => void
	/** Function to reset the visualization */
	reset: () => void
}

/**
 * Zustand store for managing the event loop visualization state
 */
export const useEventLoopStore = create<EventLoopState>(set => ({
	currentExample: DEFAULT_EXAMPLES[0],
	currentStep: 0,
	isPlaying: false,
	examples: DEFAULT_EXAMPLES,
	setCurrentExample: example => set({ currentExample: example, currentStep: 0 }),
	setCurrentStep: step => set(state => ({ currentStep: typeof step === 'function' ? step(state.currentStep) : step })),
	previousStep: () => set(state => ({ currentStep: Math.max(0, state.currentStep - 1) })),
	setIsPlaying: isPlaying => set({ isPlaying }),
	reset: () => set({ currentStep: 0, isPlaying: false }),
}))
