import About from './components/about/About';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

const App = () => {
	return (
		<>
			<Nav />
			<Header />
			<About />
			<Experience />
			<Education />
			<Projects />
			<Skills />
			<Contact />
		</>
	);
};

export default App;
