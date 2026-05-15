import About from './components/about/About';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';

const App = () => {
	return (
		<>
			<Nav />
			<Header />
			<About />
			<Experience />
			<Education />
			<Projects />
		</>
	);
};

export default App;
