import { motion } from 'framer-motion'

import { type Task } from '@/store/eventLoopStore'

import styles from './EventLoopDiagram.module.css'

interface TaskComponentProps {
	task: Task
}

export const TaskComponent = ({ task }: TaskComponentProps) => {
	return (
		<motion.div
			animate={{ opacity: 1, scale: 1 }}
			className={styles.task}
			exit={{ opacity: 0, scale: 0.8 }}
			initial={{ opacity: 0, scale: 0.8 }}
			transition={{ duration: 0.3 }}
		>
			<span className={styles.taskContent}>{task.content}</span>
			<span>{task.name}</span>
		</motion.div>
	)
}
