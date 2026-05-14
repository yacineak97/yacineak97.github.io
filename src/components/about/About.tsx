import './about.css';
import myPicture from '../../assets/my-picture2.jpg';
import { GiComputing, GiServerRack } from 'react-icons/gi';
import { BsLightning } from 'react-icons/bs';

const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={myPicture} alt='Me' />
					</div>
				</div>

				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<GiComputing className='about__icon' />
							<h5>Full-Stack Development</h5>
							<small>Node.js • React.js • Angular • Python</small>
						</article>

						<article className='about__card'>
							<GiServerRack className='about__icon' />
							<h5>Backend & APIs</h5>
							<small>
								REST APIs • Scalable Systems • Authentication • Databases
							</small>
						</article>

						<article className='about__card'>
							<BsLightning className='about__icon' />
							<h5>Engineering Focus</h5>
							<small>
								Clean Code • Performance • Security • Best Practices
							</small>
						</article>
					</div>

					<p className='about__text'>
						I am a <b>Full-Stack Software Engineer</b> passionate about building
						scalable, performant, and secure web applications. I work primarily
						with technologies such as
						<b> Node.js (Nest.js, Express.js), React.js, Angular, and Python</b>
						, and I enjoy adapting quickly to new tools and environments. <br />
						<br />I am a collaborative and results-driven developer who focuses
						on writing clean, maintainable code and delivering meaningful user
						experiences. I enjoy working on complex systems and continuously
						improving my technical and problem-solving skills.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
