import './skills.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Skills = () => {
	return (
		<section id='skills'>
			<h5>The skills I have</h5>
			<h2>Skills</h2>

			<div className='container skills__container'>
				<div className='skills__frontend'>
					<h3>// Frontend Development</h3>

					<div className='skills__content'>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Angular</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>React</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Next.js</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Redux</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Material-UI</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Bootstrap</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
					</div>
				</div>

				<div className='skills__backend'>
					<h3>// Backend Development</h3>
					<div className='skills__content'>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Node.js (Nest.js & Express.js)</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Python</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>

						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>RESTful API</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>GraphQL API</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>RPC</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>gRPC</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Kafka</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>RabbitMQ</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Microservices</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
					</div>
				</div>

				<div className='skills__backend'>
					<h3>// Databases</h3>
					<div className='skills__content'>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>MongoDB</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>PostgreSQL</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>TypeORM</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
					</div>
				</div>

				<div className='skills__backend'>
					<h3>// DevOps & Tools</h3>
					<div className='skills__content'>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Docker</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Kubernetes</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Linux</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Bash Scripting</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>AWS</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Microsoft Azure</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
					</div>
				</div>

				<div className='skills__backend'>
					<h3>// Methodologies & Project Management</h3>
					<div className='skills__content'>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Agile</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Scrum</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Kanban</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='skills__details'>
							<BsFillPatchCheckFill className='skills__details-icon' />
							<div>
								<h4>Scrumban</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
