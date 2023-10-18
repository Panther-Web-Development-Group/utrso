import AppLayout from './components/AppLayout';
import Section from "./components/Section";
import OrganizationsList from "./components/OrganizationsList";
import './App.css';

function App() {
	return (
		<AppLayout>
			<Section title="Mission" id="mission">
				<p>
					The United Technology Registered Student Organizations, also known as UTRSO, 
					is a student organization that serves as a coalition for all student organizations 
					related to technological advancements and innovations, including programming, gaming, 
					cybersecurity, and more. The purpose of the United Technology Registered Student Organizations 
					is to provide connections for all technology-related student organizations to collaborate, 
					communicate, and network with other organizations and their members.

					The United Technology Registered Student Organizations shall serve as a liaison for 
					inter-organizational problem-solving (and relations) and streamline the exchange of 
					information.
				</p>
			</Section>
			<Section title="Our Founder" id="founder"></Section>
			<Section title="Organizations" id="organizations">
				<OrganizationsList />
			</Section>
		</AppLayout>
	);
}

export default App;