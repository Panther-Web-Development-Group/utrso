import './App.css';

function App() {
	const name = "UTRSO";

	return (
		<>
			<header className="header" id="header">
				<h1 className="logo">
					<a href="#" className="logo-link" id="logo-link">
						{name.split("")
							.map(letter => <span className="logo-letter" key={`letter-${letter}`}>{letter}</span>)}
					</a> 
				</h1>
				<div className="test" id="test">Hello World</div>
			</header>
		</>
	)
}

export default App;