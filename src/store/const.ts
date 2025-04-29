import { Example } from './eventLoopStore'

/**
 * Predefined examples for the event loop visualization
 */
export const DEFAULT_EXAMPLES: Example[] = [
	{
		id: 'avengers',
		tabName: '⚡ setTimeout ',
		title: '⚡ Avengers Assemble',
		code: `console.log("Tony");
		setTimeout(() => {
		console.log("Cap");
		}, 0);
		console.log("Thor");`,
		steps: [
			{ id: '1', name: 'console.log', type: 'stack', content: 'Tony' },
			{ id: '2', name: 'setTimeout', type: 'webApi', content: 'Cap' },
			{ id: '3', name: 'console.log', type: 'stack', content: 'Thor' },
			{ id: '4', name: 'callback', type: 'queue', content: 'Cap' },
			{ id: '5', name: 'console.log', type: 'stack', content: 'Cap' },
		],
	},
	{
		id: 'matrix',
		tabName: '🕶️ fetch().then()',
		title: '🕶️ Matrix',
		code: `console.log("You take the blue pill...");
fetch("https://api").then(() => {
  console.log("You stay in Wonderland.");
});
console.log("You take the red pill...");`,
		steps: [
			{ id: '1', name: 'console.log', type: 'stack', content: 'You take the blue pill...' },
			{ id: '2', name: 'fetch', type: 'webApi', content: 'You stay in Wonderland.' },
			{ id: '3', name: 'console.log', type: 'stack', content: 'You take the red pill...' },
			{ id: '4', name: 'callback', type: 'queue', content: 'You stay in Wonderland.' },
			{ id: '5', name: 'console.log', type: 'stack', content: 'You stay in Wonderland.' },
		],
	},
	{
		id: 'harry-potter',
		tabName: '🧹 setTimeout + console.log',
		title: '🧹 Harry Potter',
		code: `console.log("Accio logs!");
setTimeout(() => {
  console.log("Expecto Callback!");
}, 1000);
console.log("Wingardium Leviosa...");`,
		steps: [
			{ id: '1', name: 'console.log', type: 'stack', content: 'Accio logs!' },
			{ id: '2', name: 'setTimeout', type: 'webApi', content: 'Expecto Callback!' },
			{ id: '3', name: 'console.log', type: 'stack', content: 'Wingardium Leviosa...' },
			{ id: '4', name: 'callback', type: 'queue', content: 'Expecto Callback!' },
			{ id: '5', name: 'console.log', type: 'stack', content: 'Expecto Callback!' },
		],
	},
	{
		id: 'doctor-strange',
		tabName: '🐙 setTimeout(() => {}, 0)',
		title: '🐙 Doctor Strange',
		code: `console.log("Dormammu, I've come to bargain.");
setTimeout(() => {
  console.log("Dormammu?");
}, 0);
console.log("One more time...");`,
		steps: [
			{ id: '1', name: 'console.log', type: 'stack', content: "Dormammu, I've come to bargain." },
			{ id: '2', name: 'setTimeout', type: 'webApi', content: 'Dormammu?' },
			{ id: '3', name: 'console.log', type: 'stack', content: 'One more time...' },
			{ id: '4', name: 'callback', type: 'queue', content: 'Dormammu?' },
			{ id: '5', name: 'console.log', type: 'stack', content: 'Dormammu?' },
		],
	},
	{
		id: 'star-wars',
		tabName: '👾 Microtask vs Macrotask',
		title: '👾 Star Wars',
		code: `console.log("A New Hope");
setTimeout(() => {
  console.log("Return of the Jedi");
}, 0);
Promise.resolve().then(() => {
  console.log("The Empire Strikes Back");
});`,
		steps: [
			{ id: '1', name: 'console.log', type: 'stack', content: 'A New Hope' },
			{ id: '2', name: 'setTimeout', type: 'webApi', content: 'Return of the Jedi' },
			{ id: '3', name: 'Promise', type: 'webApi', content: 'The Empire Strikes Back' },
			{ id: '4', name: 'callback', type: 'queue', content: 'The Empire Strikes Back' },
			{ id: '5', name: 'console.log', type: 'stack', content: 'The Empire Strikes Back' },
			{ id: '6', name: 'callback', type: 'queue', content: 'Return of the Jedi' },
			{ id: '7', name: 'console.log', type: 'stack', content: 'Return of the Jedi' },
		],
	},
]
