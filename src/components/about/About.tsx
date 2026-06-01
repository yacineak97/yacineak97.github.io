import './about.css';
import myPicture from '../../assets/my-picture2.webp';
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
						I am a <b>Full-Stack TypeScript Engineer</b> focused on building
						scalable, secure, and maintainable web applications. I work
						primarily with technologies such as
						<b>
							{' '}
							TypeScript, Node.js, NestJS, Express.js, React, Angular, and
							Python
						</b>
						, with experience developing REST and GraphQL APIs, authentication
						systems, and database-driven applications. <br />
						<br />I work across both backend and frontend, from designing
						reliable server-side architectures to building responsive user
						interfaces. I am a collaborative developer who values clean code,
						practical problem-solving, and delivering applications that are
						performant, useful, and easy to maintain.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
