import { ReactNode } from 'react'

import { motion, MotionProps } from 'framer-motion'

interface PageTransitionProps {
	children: ReactNode
}

/**
 * Animation variants for page transitions.
 * Defines the opacity states for fade animations:
 * - initial: Starting state (invisible)
 * - in: Final state (fully visible)
 * - out: Exit state (invisible)
 */
const PAGE_VARIANTS: MotionProps['variants'] = {
	initial: {
		opacity: 0,
	},
	in: {
		opacity: 1,
	},
	out: {
		opacity: 0,
	},
}

/**
 * Transition configuration for the fade animation.
 * Uses tween animation with anticipate easing for a
 * smooth 0.3 second transition between states.
 */
const PAGE_TRANSITION: MotionProps['transition'] = {
	type: 'tween',
	ease: ['anticipate'],
	duration: 0.3,
}

/**
 * Wraps page content with Framer Motion fade animations.
 * Provides smooth opacity transitions when navigating between routes.
 */
export const PageTransition = ({ children }: PageTransitionProps) => {
	return (
		<motion.div animate='in' exit='out' initial='initial' transition={PAGE_TRANSITION} variants={PAGE_VARIANTS}>
			{children}
		</motion.div>
	)
}
