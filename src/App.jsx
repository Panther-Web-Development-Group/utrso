import AppLayout from './components/AppLayout';
import Section from "./components/Section";
import './App.css';

function App() {
	return (
		<AppLayout>
			<Section title="About Us">
				<p>
					The United Technology Registered Student Organizations, also known as UTRSO, 
					is a student organization that serves as a coalition for all student organizations 
					related to technological advancements and innovations, including programming, gaming, 
					cybersecurity, and more.
				</p>
			</Section>
		</AppLayout>
	);
}

export default App;