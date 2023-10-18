import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<header className="header" id="header">
				<h1>{count}</h1>
				<div className="test" id="test">Hello World</div>
			</header>
		</>
	)
}

export default App;