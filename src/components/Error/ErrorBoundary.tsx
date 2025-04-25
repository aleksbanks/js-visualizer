import React from 'react'

import { Link } from 'react-router-dom'

import styles from './ErrorBoundary.module.css'

interface Props {
	children: React.ReactNode
}

interface State {
	hasError: boolean
	error: Error | null
}

export class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { hasError: false, error: null }
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error }
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error('Error caught by ErrorBoundary:', error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className={styles.errorBoundary}>
					<h1>Something went wrong</h1>
					<p>{this.state.error?.message || 'An unexpected error occurred'}</p>
					<Link to='/' onClick={() => this.setState({ hasError: false, error: null })}>
						Return to Home
					</Link>
				</div>
			)
		}

		return this.props.children
	}
}
