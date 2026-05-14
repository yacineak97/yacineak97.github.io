import About from './components/about/About';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';

const App = () => {
	return (
		<>
			<Nav />
			<Header />
			<About />
			<Experience />
			<Education />
		</>
	);
};

export default App;
